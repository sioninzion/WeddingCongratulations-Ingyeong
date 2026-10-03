'use strict';

const home = document.getElementById('home');
const list = document.getElementById('chat-list');
const verseCollection = document.getElementById('verse-collection');
const adDialog = document.getElementById('ad-popup');
const room = document.getElementById('chat-room');
const listItems = document.getElementById('cl-items');
const messages = document.getElementById('msgs');
const dialog = document.getElementById('vp');
const envelope = document.getElementById('env-ov');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const states = members.map(() => ({ opened: false, received: false, revealed: false, typing: {} }));
let currentIndex = -1;
let verseTimer;
let listScrollTop = 0;
let activeGroup = '전체';

// UI icons are fixed SVG geometry. Message content is never inserted as markup.
const iconPaths = {
  friends: '<circle cx="12" cy="7.5" r="3.5"/><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2"/>',
  chat: '<path class="icon-bubble" d="M21 11c0 4.4-4 7.5-9 7.5-1 0-2-.1-2.9-.4L4 21l1.1-5C3.8 14.7 3 12.9 3 11c0-4.4 4-7.5 9-7.5s9 3.1 9 7.5Z"/>',
  openchat: '<path d="M18.2 12.3c1.8.8 2.8 2.3 2.8 4 0 1.1-.4 2-1.2 2.8l.7 3-3.3-1.9c-.6.1-1.2.2-1.8.2-2.1 0-4-.8-5-2.1"/><path class="icon-bubble" d="M18 8.5c0 3.4-3.3 6-7.5 6-.8 0-1.6-.1-2.3-.3L4 16.5l.9-3.9C3.7 11.5 3 10.1 3 8.5c0-3.4 3.3-6 7.5-6s7.5 2.6 7.5 6Z"/><path class="icon-cross" d="M10.5 5.5v6m-2-4h4" stroke-width="1.5"/>',
  sound: '<path d="M11 4 6 8H3v8h3l5 4V4Z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  muted: '<path d="M11 4 6 8H3v8h3l5 4V4Z"/><path d="m16 9 6 6m0-6-6 6"/>',
  more: '<circle cx="4" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="20" cy="12" r="1.7" fill="currentColor" stroke="none"/>',
  announcement: '<path d="m4 10 13-5v14L4 14v-4Zm0 0H2v4h2m3 1 1 6h3l-1-5m10-7 2-1m-2 8 2 1m-2-5h3"/>',
};

function makeIcon(name) {
  const holder = document.createElement('span');
  holder.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconPaths[name]}</svg>`;
  return holder.firstElementChild;
}

function makeAvatar(member, extraClass = '') {
  const avatar = element('span', `profile-avatar ${extraClass}`.trim());
  // Each avatar sits beside its owner's name, so avoid reading that name twice.
  avatar.setAttribute('aria-hidden', 'true');
  const showDefault = () => {
    avatar.classList.add('is-placeholder');
    avatar.replaceChildren(makeIcon('friends'));
  };
  if (!member.avatarSrc) {
    showDefault();
    return avatar;
  }
  const image = element('img');
  image.src = member.avatarSrc;
  image.alt = '';
  image.width = 96;
  image.height = 96;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', showDefault, { once: true });
  avatar.append(image);
  return avatar;
}

function renderGroups() {
  const groups = document.getElementById('chat-groups');
  groups.replaceChildren();
  siteContent.groups.forEach(name => {
    const button = element('button', 'group-chip', name);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(name === activeGroup));
    button.addEventListener('click', () => {
      activeGroup = name;
      listItems.scrollTop = 0;
      groups.querySelectorAll('button').forEach(chip => chip.setAttribute('aria-pressed', String(chip === button)));
      renderList();
    });
    groups.append(button);
  });
}

function makeAdvertisement() {
  const ad = element('button', 'ad-banner');
  ad.type = 'button';
  ad.setAttribute('aria-label', '광고: 결혼하는 주인공 알아보기');
  const icon = element('span', 'ad-icon');
  icon.append(makeIcon('announcement'));
  const copy = element('span', 'ad-copy');
  copy.append(element('span', 'ad-title', '10월 9일에 결혼하는 사람이 그렇게 예쁘다던데?'));
  copy.append(element('span', 'ad-sub', '누군지 알아보러 가기'));
  ad.append(icon, copy, element('span', 'ad-tag', '광고'));
  ad.addEventListener('click', () => adDialog.showModal());
  return ad;
}

// Data always enters the page as text, including user-supplied message content.
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function hasVerse(member) {
  return Boolean(member.verseText && member.verseText.trim());
}

function honorificName(member) {
  return member.name.endsWith('님') ? member.name : `${member.name}님`;
}

function unreadCount(index) {
  const state = states[index];
  return Number(!state.opened) + Number(hasVerse(members[index]) && !state.received);
}

function renderList() {
  const savedScroll = listItems.scrollTop;
  listItems.replaceChildren();
  // Preserve the source indices so sorting cannot mix up messages and read states.
  const visibleMembers = members
    .map((member, index) => ({ member, index }))
    .filter(({ member }) => activeGroup === '전체' || member.group === activeGroup)
    .sort((a, b) => Number(Boolean(b.member.pinnedInChats)) - Number(Boolean(a.member.pinnedInChats)));
  document.getElementById('member-count').textContent = visibleMembers.length;
  listItems.append(makeAdvertisement());
  if (!visibleMembers.length) {
    listItems.append(element('p', 'empty-state', activeGroup === '전체' ? '아직 메시지가 없습니다.' : '아직 배정된 대화가 없어요.'));
    return;
  }
  visibleMembers.forEach(({ member, index }) => {
    const row = element('button', 'cl-row');
    row.type = 'button';
    row.dataset.memberId = member.id;
    row.setAttribute('aria-label', `${honorificName(member)}의 축하 메시지`);
    const info = element('span', 'cl-info');
    info.append(element('span', 'cl-name', member.name));
    info.append(element('span', 'cl-preview', member.congrats.join(' ').replace(/\s+/g, ' ')));
    const meta = element('span', 'cl-meta');
    if (member.shortDate) meta.append(element('span', 'cl-time', member.shortDate));
    const unread = unreadCount(index);
    const badge = element('span', unread ? 'badge' : 'read-label', unread ? String(unread) : '읽음');
    if (unread) badge.setAttribute('aria-label', `읽지 않은 항목 ${unread}개`);
    meta.append(badge);
    row.append(makeAvatar(member, 'list-avatar'), info, meta);
    row.addEventListener('click', () => openRoom(index));
    listItems.append(row);
  });
  listItems.scrollTop = savedScroll;
}

function renderVerseCollection() {
  const feed = document.getElementById('verse-feed');
  const verseMembers = members.filter(hasVerse);
  const intro = element('div', 'verse-intro');
  intro.append(element('h2', '', `${siteContent.recipient} 님에게 전하는 말씀`));
  intro.append(element('p', '', `${verseMembers.length}명이 마음을 담아 골랐어요.`));
  feed.replaceChildren(intro);
  verseMembers.forEach(member => {
    const card = element('article', 'verse-collection-card');
    card.setAttribute('aria-label', `${honorificName(member)}의 말씀`);
    const author = element('div', 'verse-author-row');
    author.append(makeAvatar(member, 'verse-avatar'), element('h3', 'verse-author', member.name));
    card.append(author);
    card.append(element('p', 'collected-verse', member.verseText));
    card.append(element('p', 'collected-reference', member.verseRef));
    feed.append(card);
  });
}

function switchHomeView(view) {
  closeVolume();
  const showChats = view === 'chats';
  list.hidden = !showChats;
  verseCollection.hidden = showChats;
  for (const [id, active] of [['nav-chats', showChats], ['nav-verses', !showChats]]) {
    const button = document.getElementById(id);
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  }
}

const typingInterval = 12;
const graphemeSegmenter = new Intl.Segmenter('ko', { granularity: 'grapheme' });
let typingTimer;
let typingBubbles = [];

function stopTyping() {
  clearInterval(typingTimer);
  typingBubbles = [];
}

function startTyping() {
  if (!typingBubbles.some(({ characters, progress }) => progress.count < characters.length)) return;
  typingTimer = setInterval(() => {
    // Preserve progress while a verse is open or the page is in the background.
    if (currentIndex < 0 || room.inert || dialog.open || document.hidden) return;
    const advancedGroups = new Set();
    for (const { characters, progress, phase } of typingBubbles) {
      if (progress.count >= characters.length || advancedGroups.has(phase)) continue;
      characters[progress.count++].classList.add('is-visible');
      advancedGroups.add(phase);
    }
    if (typingBubbles.every(({ characters, progress }) => progress.count >= characters.length)) {
      clearInterval(typingTimer);
    }
  }, typingInterval);
}

function addTextMessage(group, text, time, progress, phase) {
  const line = element('div', 'bline');
  const bubble = element('p', 'bubble');
  // Hidden glyphs still occupy their final space, so the bubble never grows.
  const visual = element('span', 'typing-text');
  visual.setAttribute('aria-hidden', 'true');
  const characters = Array.from(graphemeSegmenter.segment(text), ({ segment }) =>
    element('span', 'typing-character', segment));
  if (reducedMotion.matches) progress.count = characters.length;
  characters.forEach((character, index) => {
    if (index < progress.count) character.classList.add('is-visible');
    visual.append(character);
  });
  bubble.append(element('span', 'sr-only', text), visual);
  typingBubbles.push({ characters, progress, phase });
  line.append(bubble);
  if (time) line.append(element('span', 'btime', time));
  group.append(line);
}

function messageGroup(member, extraClass = '') {
  const group = element('div', `message-group ${extraClass}`.trim());
  group.append(makeAvatar(member, 'message-avatar'));
  group.append(element('p', 'msg-sender', member.name));
  return group;
}

function renderMessages(index) {
  stopTyping();
  const member = members[index];
  const state = states[index];
  messages.replaceChildren();
  if (member.dateLabel) messages.append(element('p', 'date-div', member.dateLabel));
  const greeting = messageGroup(member);
  member.congrats.forEach((text, i) => addTextMessage(greeting, text, member.timeLabel,
    state.typing[`greeting-${i}`] ??= { count: 0 }, 'greeting'));
  messages.append(greeting);

  if (hasVerse(member)) {
    const line = element('div', 'bline verse-line');
    const card = element('div', 'vc');
    const top = element('div', 'vc-top');
    top.append(element('p', 'vc-t', '말씀을 보내요'));
    top.append(element('p', 'vc-sent', '당신을 생각하며 고른 말씀'));
    const body = element('div', 'vc-body');
    body.append(element('p', 'vc-note', `${honorificName(member)}이 말씀을 보냈어요.`));
    const button = element('button', `vc-btn${state.received ? ' done' : ''}`, state.received ? '말씀 다시 보기' : '말씀 받기');
    button.type = 'button';
    button.addEventListener('click', () => receiveVerse(index));
    body.append(button);
    card.append(top, body);
    line.append(card);
    if (member.timeLabel) line.append(element('span', 'btime', member.timeLabel));
    messages.append(line);
    if (state.received) messages.append(element('p', 'sys-msg', '말씀을 받았어요'));
  }

  const showFollowup = state.revealed || !hasVerse(member);
  if (showFollowup && (member.afterVerse.length || member.afterImage)) {
    const followup = messageGroup(member, 'followup');
    member.afterVerse.forEach((text, i) => addTextMessage(followup, text, member.timeLabel,
      state.typing[`followup-${i}`] ??= { count: 0 }, 'followup'));
    if (member.afterImage) {
      const line = element('div', 'bline');
      const bubble = element('div', 'photo-bubble');
      const photo = element('img');
      photo.src = member.afterImage;
      photo.alt = member.afterImageAlt;
      photo.width = 900;
      photo.height = 900;
      bubble.append(photo);
      line.append(bubble, element('span', 'btime', member.timeLabel));
      followup.append(line);
    }
    messages.append(followup);
  }
  startTyping();
}

function openRoom(index) {
  if (!members[index]) return;
  resetRoomSwipe();
  closeVolume();
  listScrollTop = listItems.scrollTop;
  currentIndex = index;
  states[index].opened = true;
  const title = document.getElementById('cr-title');
  title.textContent = members[index].name;
  room.setAttribute('aria-label', `${honorificName(members[index])}과의 대화`);
  renderMessages(index);
  messages.scrollTop = 0;
  home.inert = true;
  home.setAttribute('aria-hidden', 'true');
  room.inert = false;
  room.removeAttribute('aria-hidden');
  home.classList.add('pushed');
  room.classList.add('open');
  title.focus({ preventScroll: true });
}

function goBack() {
  stopTyping();
  resetRoomSwipe();
  const previousIndex = currentIndex;
  currentIndex = -1;
  clearTimeout(verseTimer);
  envelope.classList.remove('show');
  if (dialog.open) dialog.close();
  room.classList.remove('open');
  room.inert = true;
  room.setAttribute('aria-hidden', 'true');
  home.classList.remove('pushed');
  home.inert = false;
  home.removeAttribute('aria-hidden');
  renderList();
  listItems.scrollTop = listScrollTop;
  Array.from(listItems.children).find(row => row.dataset.memberId === members[previousIndex]?.id)?.focus({ preventScroll: true });
}

function showVerse(index) {
  if (currentIndex !== index) return;
  const member = members[index];
  states[index].received = true;
  room.inert = false;
  document.getElementById('vp-sender').textContent = `${honorificName(member)}이 전하는 말씀`;
  document.getElementById('vp-verse').textContent = member.verseText;
  document.getElementById('vp-ref').textContent = member.verseRef;
  const note = document.getElementById('vp-note');
  note.textContent = member.verseNote;
  note.hidden = !member.verseNote;
  dialog.showModal();
  dialog.scrollTop = 0;
}

function receiveVerse(index) {
  if (currentIndex !== index || !hasVerse(members[index])) return;
  if (states[index].received) {
    showVerse(index);
    return;
  }
  clearTimeout(verseTimer);
  envelope.classList.add('show');
  room.inert = true;
  verseTimer = setTimeout(() => showVerse(index), reducedMotion.matches ? 0 : 600);
}

dialog.addEventListener('close', () => {
  envelope.classList.remove('show');
  if (currentIndex < 0) return;
  const state = states[currentIndex];
  const reveal = !state.revealed;
  const savedScroll = messages.scrollTop;
  state.revealed = true;
  renderMessages(currentIndex);
  room.inert = false;
  const followup = messages.querySelector('.followup');
  if (reveal && followup) {
    followup.scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  } else {
    messages.scrollTop = savedScroll;
  }
  messages.querySelector('.vc-btn')?.focus({ preventScroll: true });
});

document.getElementById('back-button').addEventListener('click', goBack);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !volumePanel.hidden) {
    closeVolume();
    soundButton.focus();
    return;
  }
  if (event.key !== 'Escape' || dialog.open || currentIndex < 0) return;
  goBack();
});

// Horizontal room gestures belong to the app; vertical reading stays native.
let roomSwipe = null;
function resetRoomSwipe() {
  roomSwipe = null;
}

room.addEventListener('touchstart', event => {
  resetRoomSwipe();
  if (event.touches.length !== 1 || currentIndex < 0 || dialog.open || room.inert) return;
  const touch = event.touches[0];
  roomSwipe = { id: touch.identifier, x: touch.clientX, y: touch.clientY, horizontal: false };
}, { passive: true });

room.addEventListener('touchmove', event => {
  if (!roomSwipe) return;
  if (event.touches.length !== 1 || dialog.open || room.inert) {
    resetRoomSwipe();
    return;
  }
  const touch = Array.from(event.touches).find(item => item.identifier === roomSwipe.id);
  if (!touch) {
    resetRoomSwipe();
    return;
  }
  const dx = touch.clientX - roomSwipe.x;
  const dy = Math.abs(touch.clientY - roomSwipe.y);
  if (!roomSwipe.horizontal) {
    if (dx < -12 || (dy > 12 && dy >= Math.abs(dx))) {
      resetRoomSwipe();
      return;
    }
    if (dx > 12 && dx > dy * 1.5) roomSwipe.horizontal = true;
  }
  if (roomSwipe.horizontal && event.cancelable) event.preventDefault();
}, { passive: false });

room.addEventListener('touchend', event => {
  const swipe = roomSwipe;
  resetRoomSwipe();
  if (!swipe || event.touches.length || currentIndex < 0 || dialog.open || room.inert) return;
  const touch = Array.from(event.changedTouches).find(item => item.identifier === swipe.id);
  if (!touch) return;
  const dx = touch.clientX - swipe.x;
  const dy = Math.abs(touch.clientY - swipe.y);
  const threshold = Math.min(72, room.clientWidth * .22);
  if (dx >= threshold && dx > dy * 1.5 && dy < 80) {
    if (event.cancelable) event.preventDefault();
    switchHomeView('chats');
    goBack();
  }
}, { passive: false });
room.addEventListener('touchcancel', resetRoomSwipe, { passive: true });

// Keep the app at its designed scale, including WebKit and trackpad gestures.
const preventPageZoom = event => {
  if (event.cancelable) event.preventDefault();
};
for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
  document.addEventListener(type, preventPageZoom, { passive: false });
}
document.addEventListener('touchmove', event => {
  if (event.touches.length > 1) {
    resetRoomSwipe();
    preventPageZoom(event);
  }
}, { passive: false });
document.addEventListener('wheel', event => {
  if (event.ctrlKey) preventPageZoom(event);
}, { passive: false });
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && ['+', '=', '-', '_'].includes(event.key)) preventPageZoom(event);
});
document.querySelector('.bottom-nav').addEventListener('dblclick', preventPageZoom);

// The sound button is a popover, not another app screen.
const volumePanel = document.getElementById('volume-panel');
const volumeSlider = document.getElementById('volume-slider');
const soundButton = document.getElementById('nav-sound');
const music = document.getElementById('background-music');
let volume = Math.max(0, Math.min(100, siteContent.defaultVolume));
let audioContext;
let volumeGain;

function closeVolume() {
  volumePanel.hidden = true;
  soundButton.setAttribute('aria-expanded', 'false');
}

function setVolume(value) {
  volume = Math.max(0, Math.min(100, Number(value)));
  volumeSlider.value = volume;
  volumeSlider.setAttribute('aria-valuetext', `${volume}%`);
  volumeSlider.style.setProperty('--volume', `${volume}%`);
  if (volumeGain) {
    volumeGain.gain.setTargetAtTime(volume / 100, audioContext.currentTime, .025);
  } else {
    music.volume = volume / 100;
  }
  soundButton.querySelector('[data-icon]').replaceChildren(makeIcon(volume === 0 ? 'muted' : 'sound'));
}

function playMusic() {
  if (!music.paused) return;
  music.play().catch(error => {
    // Autoplay can wait for the visitor's first tap without adding another control.
    if (!['NotAllowedError', 'AbortError'].includes(error.name)) {
      document.getElementById('music-status').textContent = '음악을 불러오지 못했어요.';
    }
  });
}

function unlockMusic() {
  // A GainNode also enables the slider on browsers that ignore audio.volume.
  const Context = window.AudioContext || window.webkitAudioContext;
  if (Context && !audioContext) {
    try {
      audioContext = new Context();
      const source = audioContext.createMediaElementSource(music);
      volumeGain = audioContext.createGain();
      volumeGain.gain.value = volume / 100;
      source.connect(volumeGain);
      volumeGain.connect(audioContext.destination);
      music.volume = 1;
    } catch {
      volumeGain = null;
      music.volume = volume / 100;
    }
  }
  if (audioContext?.state === 'suspended') audioContext.resume().catch(() => {});
  playMusic();
}

document.querySelectorAll('[data-icon]').forEach(holder => holder.append(makeIcon(holder.dataset.icon)));
soundButton.addEventListener('click', () => {
  const open = volumePanel.hidden;
  volumePanel.hidden = !open;
  soundButton.setAttribute('aria-expanded', String(open));
});
volumeSlider.addEventListener('input', () => setVolume(volumeSlider.value));
document.addEventListener('pointerdown', event => {
  if (!volumePanel.contains(event.target) && !soundButton.contains(event.target)) closeVolume();
  unlockMusic();
});
document.addEventListener('keydown', event => {
  if (['Enter', ' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) unlockMusic();
});
music.addEventListener('error', () => {
  document.getElementById('music-status').textContent = '음악을 불러오지 못했어요.';
});
document.getElementById('nav-chats').addEventListener('click', () => switchHomeView('chats'));
document.getElementById('nav-verses').addEventListener('click', () => switchHomeView('verses'));

document.title = siteContent.title;
document.getElementById('ad-reveal-title').textContent = siteContent.recipient;
document.querySelector('.sp-brand').textContent = siteContent.title;
document.querySelector('.sp-sub').textContent = siteContent.subtitle;
renderGroups();
renderList();
renderVerseCollection();
if (music.getAttribute('src') !== siteContent.musicSrc) music.src = siteContent.musicSrc;
setVolume(volume);
playMusic();
const splash = document.getElementById('splash');
setTimeout(() => {
  splash.classList.add('out');
  setTimeout(() => splash.remove(), reducedMotion.matches ? 0 : 350);
}, 1800);
