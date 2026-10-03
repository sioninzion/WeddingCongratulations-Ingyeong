// 카카오톡에서 추린 25명의 메시지와 별도로 전달받은 편지입니다.
// 원문을 유지하며, 작성 시각이 제공되지 않은 편지는 날짜와 시간을 표시하지 않습니다.
const siteContent = {
  "title": "결혼을 축하해요!",
  "subtitle": "뒤나미스의 마음을 모아,",
  "recipient": "강인경",
  "musicSrc": "assets/helping-partner.mp3",
  "defaultVolume": 50,
  "groups": ["전체", "🎶", "sop", "alt", "ten", "bas"]
};

const members = [
  {
    "id": "message-7",
    "name": "김용빈",
    "group": "ten",
    "sentAt": "2026-09-25 15:45:46",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 3:45",
    "congrats": [
      "안녕하세여 누나! 결혼 진심으로 축하드립니다 :) \n늘 밝은 미소와 아름다운 목소리로 찬양대를 섬겨주셔서 감사드려요!\n서로의 목소리로 화음을 이루는 찬양대처럼 결혼 생활 속에서도 아름다운 하모니가 이루어지길 기도드리겠습니다!\n-용빈-"
    ],
    "verseText": "그런즉 이제 둘이 아니요 한 몸이니 그러므로 하나님이 짝지어주신 것을 사람이 나누지 못할지니라",
    "verseRef": "마태복음 19:6",
    "verseNote": "",
    "afterVerse": [
      "말씀처럼 하나님께서 엮어주신 두 분이 평생의 동반자가 되어 걸어갈 앞날을 진심으로 축복 해드리겠습니다!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-7.png?v=3944a94e402a"
  },
  {
    "id": "message-14",
    "name": "김예연",
    "group": "bas",
    "sentAt": "2026-09-25 16:07:24",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 4:07",
    "congrats": [
      "누나 안녕하세용! 일단 지난 학기 리더하시면서 잘 챙겨주셔서 너무 감사했어요 \n어떤 상황에서도 늘 침착함을 잃지 않았던 누나야말로 이시대의 테토녀가 아닐까라는 생각을 해봅니다\n이제 새로운 신앙의 공동체를 만들어 갈 누나의 앞길을 진심으로 축하하고 응원하겠습니다!! 결혼하셔도 저희 옆에 남아주세요!!"
    ],
    "verseText": "네가 들어와도 복을 받고 나가도 복을 받을것이니라",
    "verseRef": "신명기 28:6",
    "verseNote": "",
    "afterVerse": [],
    "afterImage": "assets/kim-yeyeon-message.png",
    "afterImageAlt": "김예연 님이 보낸 결혼 축하 사진",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-14.png?v=f5f306766426"
  },
  {
    "id": "message-16",
    "name": "남시은",
    "group": "alt",
    "sentAt": "2026-09-25 17:33:54",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 5:33",
    "congrats": [
      "인경언니 안녕하세요! 결혼을 진심으로 축하드립니다~ 항상 웃음으로 반겨주시고 대해주셔서 뒤나에 잘 정착할 수 있었던 것 같아요! 주님께서 그 선하신 모습에 좋은 인연을 만나게 해주신 것이라고 생각합니다 😄 앞으로의 결혼생활 속에서도 주님이 함께하시기를 바라고 다시한번 결혼 축하드립니다~~!"
    ],
    "verseText": "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
    "verseRef": "빌4:13",
    "verseNote": "",
    "afterVerse": [
      "앞으로도 잘 부탁드리고 평안한 가정 되시기를 기도하겠습니다~~!!!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-16.png?v=0b1012c96de3"
  },
  {
    "id": "message-18",
    "name": "김효진",
    "group": "alt",
    "sentAt": "2026-09-25 18:15:01",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 6:15",
    "congrats": [
      "저의 피아니시모, 인경언니! 결혼 축하해요!! 처음 뒤나미스 들어와서 언니 덕분에 적응할 수 있었던 것 같아요~ ㅎㅎ 언니가 기대하는 믿음의 가정을 잘 꾸려나갈 수 있도록 계속 기도할게요! 항상 주님안에서 평온하게 아름다운 가정 이루기를!!!🙌🏻😆"
    ],
    "verseText": "네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라",
    "verseRef": "여호수아 1:9",
    "verseNote": "",
    "afterVerse": [
      "언니 식 잘 마치고 조만간 데이트 한번 해요~"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-18.png?v=63be9d37c6fc"
  },
  {
    "id": "message-20",
    "name": "김종우",
    "group": "bas",
    "sentAt": "2026-09-25 18:32:07",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 6:32",
    "congrats": [
      "인경누나 안녕하세요 뒤나미스와 사랑방을 함께 섬기고 있는 종우입니다! 먼저 결혼을 진심으로 축하드려요~ 앞으로 가정을 이루시고 부부라는 울타리 안에서 진심으로 사랑하고 아껴주는 두 분이 되셨으면 좋겠어요 선택의 기로에 설 때가 정말 많을 텐데 항상 기도하시고 하나님께서 뜻하시는 방향으로 나아가시면 좋겠어요! 그 길이 가장 좋고 완벽하다고 믿습니다 평생 행복하시고 사랑 많이 받으세요👏🤭"
    ],
    "verseText": "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라",
    "verseRef": "잠언 16:9",
    "verseNote": "",
    "afterVerse": [
      "평안한 가정을 이루기를 기도합니다!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-20.png?v=e5301b622f8e"
  },
  {
    "id": "message-22",
    "name": "노다솜",
    "group": "alt",
    "sentAt": "2026-09-25 18:34:51",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 6:34",
    "congrats": [
      "항상 햇살같은 미소로 반겨주는 인경이~ 결혼 너무너무 축하해 🥰 아차산에서 우연히 마주친 예비남편분과 서로 배려하고 아껴주면서  오래오래 행복하게 지내기를 !!! 💓"
    ],
    "verseText": "사랑은 오래 참고 사랑은 온유하며 투기하는 자가 되지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며",
    "verseRef": "고린도전서 13:4",
    "verseNote": "",
    "afterVerse": [
      "눈웃음 비법좀 알려줘 😉"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-22.png?v=36d21b6035a2"
  },
  {
    "id": "message-23",
    "name": "김태우",
    "group": "bas",
    "sentAt": "2026-09-25 18:35:16",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 6:35",
    "congrats": [
      "인경아 안녕! 너의 결혼을 진심으로 축하해! 유부의 세계로 온 것을 환영하고 축복해. ㅎㅎㅎ\n낯선 새로운 환경과 삶의 방식 안에서도 더욱 하나님을, 하나님의 사랑을 느끼는 두 부부가 되길 축복해."
    ],
    "verseText": "37 새 포도주를 낡은 가죽 부대에 넣는 자가 없나니 만일 그렇게 하면 새 포도주가 부대를 터뜨려 포도주가 쏟아지고 부대도 못쓰게 되리라\n38 새 포도주는 새 부대에 넣어야 할 것이니라",
    "verseRef": "누가복음 5:37-38",
    "verseNote": "인경이네 부부가 정착할 새로운 곳에 가장 새로운 마음으로 시작할 수 있길 기도할게!",
    "afterVerse": [
      "결혼기념일이 한글날이더라고! 그리고 동시에 내 생일... 정말 뜻 깊은 날에 결혼하는 거 아주 축하해!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-23.png?v=097bbd7c930e"
  },
  {
    "id": "message-25",
    "name": "최정민",
    "group": "sop",
    "sentAt": "2026-09-25 19:45:34",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 7:45",
    "congrats": [
      "언니💓 결혼 너무너무 축하합니다! 저의 뒤나 첫 짝꿍이자 피아니시모, 추억 속의 오육이(95&96), 용산묌, 언니의 부케순이까쥐☘️ 이제는 언니가 사랑하는 사람과 새로운 가정을 이루고 함께 걸어가는 모습을 보게 되니 괜히 제가 다 뭉클하네용 ㅎㅎ앞으로도 지금처럼 서로 많이 아껴주고, 웃음 가득한 예쁜 가정 만들어가길 진심으로 기도할게요 두 사람이 함께하는 모든 날들에 하나님의 은혜와 사랑이 가득하기를 바라며, 앞으로 펼쳐질 새로운 순간들도 하나하나 예쁘게 채워가길 바랍니댜❣️"
    ],
    "verseText": "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며 \n무례히 행하지 아니하며 자기의 유익을 구하지 아니하며 성내지 아니하며 악한 것을 생각하지 아니하며 \n불의를 기뻐하지 아니하며 진리와 함께 기뻐하고 \n모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라",
    "verseRef": "고린도전서 13:4-7",
    "verseNote": "",
    "afterVerse": [
      "강_같이 흘러가는 시간 속에서\n인_연으로 만나 평생을 함께하게 된 두 사람\n경_이로운 순간들 가득한 행복한 결혼생활 되길 기도할게요💕"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-25.png?v=05a97a90b3f1"
  },
  {
    "id": "message-28",
    "name": "김세린",
    "group": "sop",
    "sentAt": "2026-09-25 22:12:40",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 10:12",
    "congrats": [
      "인경언니 결혼 축하드려요!!! 예비 남편분과 함께 행복한 가정 이루시고 하나님의 뜻하심과 인도하심 속에서 즐겁게 살아가시길 기도할게요💓 다시 한 번 정말 축하드려요!!☺️"
    ],
    "verseText": "2. 마음을 같이하여 같은 사랑을 가지고 뜻을 합하며 한마음을 품어",
    "verseRef": "빌립보서 2:2",
    "verseNote": "",
    "afterVerse": [
      "말씀처럼 남편분과 같은 마음과 사랑을 가지고 한 마음으로 하나님의 사랑을 실천하며 드러내는 가정을 이루길 기도할게요💓 그리고 저랑도 데이트 한 번 해주세요☺️"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-28.png?v=ac0277fd627b"
  },
  {
    "id": "message-29",
    "name": "이은영",
    "group": "sop",
    "sentAt": "2026-09-25 22:37:14",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 10:37",
    "congrats": [
      "인경아~ 결혼 너무너무 축하해! \n주변 사람들을 늘 행복하게 해주는 마음 따뜻한 인경이라, 그 가정이 더욱 사랑 가득한 가정이 될 것 같아.\n두 사람의 앞날에 행복한 순간만 가득하길 진심으로 바랄게요~!"
    ],
    "verseText": "항상 기뻐하라 쉬지말고 기도하라 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라",
    "verseRef": "데살로니가전서 5장 16-18절",
    "verseNote": "",
    "afterVerse": [
      "믿음안에 단단히 세워져가는 가정이\n되자! 웰컴 투 유부월드 🧏‍♀️"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-29.png?v=2d818b7daa95"
  },
  {
    "id": "message-31",
    "name": "천지원",
    "group": "sop",
    "sentAt": "2026-09-25 23:53:17",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 11:53",
    "congrats": [
      "인경 언니~~ 결혼 넘 축하드려요!! 🥹💐\n언니의 결혼 소식을 듣고,, 또 기도회에서 언니의 결혼 준비 기도제목을 들었던 게 엊그제 같은데,, 벌써 언니의 결혼식이 코앞으로 다가왔네용😆 새로운 가정을 이루게 된 것을 진심으로 축하하고 드립니다! 앞으로 두 분이 함께 만들어갈 하루하루가 기쁨으로 가득하길 기도할게요🙏🏻",
      "무엇보다 하나님 안에서 서로를 더욱 사랑하고 아껴주면서, 사랑으로 세워지는 가정이 되길 기도할게요ㅎㅎ 함께하는 시간이 쌓일수록 서로를 더 깊이 알아가고, 작은 것에도 감사하며 웃음이 끊이지 않는 쀼가 되길 바랍니당😘 앞으로의 꽃길만 걸으시길 바라며,, 다시 한 번 결혼을 축하드려요💐"
    ],
    "verseText": "이 모든 것 위에 사랑을 더하라 이는 온전하게 매는 띠니라",
    "verseRef": "골로새서 3:14",
    "verseNote": "",
    "afterVerse": [
      "결혼 축하드립니당🥳🎉\n두 분 오래오래 행복하세요!!💕"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-31.png?v=3e980ba52c9d"
  },
  {
    "id": "message-33",
    "name": "문예원",
    "group": "🎶",
    "sentAt": "2026-09-25 23:57:36",
    "dateLabel": "2026년 9월 25일 금요일",
    "shortDate": "9월 25일",
    "timeLabel": "오후 11:57",
    "congrats": [
      "언니❣️결혼을 진심으로 축하합니다!! 항상 차분함을 잃지 않고, 하는 일마다 진심을 다하는 모습이 너무 멋져요!! 언니의 믿음과 선한 모습을 보며 정말 많이 배웠습니다!! 항상 환하게 웃어주던 모습도 잊지 못해..\n저번학기 사랑방을 통해 다양한 이야기를 나눌 수 있어서 더 좋았습니다~ 뒤나에서와 사랑방에서 만나는 건 또 다른 느낌~~ 이제는 밖에서 또또 만납시다~~~\n멋진 여성.. 이제 새로운 가정 안에서 언니의 매력을 뽐내며 축복 가득한 하루하루 살아가길 진심으로 기도합니다🙏🏻"
    ],
    "verseText": "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 서로 사랑한 것 같이 너희도 서로 사랑하라",
    "verseRef": "요한복음 13장 34절",
    "verseNote": "",
    "afterVerse": [
      "결혼 진심을 다해 축하합니다❤️ 늘 행복만 가득하길! 결혼하고도 가끔 만나서 수다해요~"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-33.png?v=9c179f164dfe"
  },
  {
    "id": "message-35",
    "name": "박소정",
    "group": "alt",
    "sentAt": "2026-09-26 00:01:51",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오전 12:01",
    "congrats": [
      "인경아~ 결혼을 진심으로 축하해❤️ 처음 자양교회 와서 언니의 사랑방원으로 지내다 뒤나대원을 거쳐 리더까지!! 함께한 경험이 정말 많다-! 결혼소식을 들은지가 엊그제 같은데 결혼식이 몇 주 안남았네. 결혼 이후의 생활에 있어 행복, 기대, 걱정 등 여러가지 감정이 드는 시기일텐데 누구보다 지혜로운 인경이는 하나님 안에서 남편될 분과 함께 기도하며 사랑가득한 가정을 이룰거라 믿어~ 10월의 신부 강인경! 인경이의 인생에 있어 또 다른 행복의 첫 걸음이 되길 바라며 기도할게😘"
    ],
    "verseText": "34 새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라",
    "verseRef": "요한복음 13장",
    "verseNote": "",
    "afterVerse": [
      "인경아, 결혼식 긴장하지말고 신나게 즐겨!! 트레이드마크 눈웃음도 많이 보여주고 신혼여행가서 푹 쉬는걸 생각하자고!!! 화이팅😉"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-35.png?v=a290c06d8d13"
  },
  {
    "id": "message-37",
    "name": "김지은",
    "group": "sop",
    "sentAt": "2026-09-26 01:33:41",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오전 1:33",
    "congrats": [
      "인경아, 결혼 진심으로 축하해💛\n인경이랑 뒤나미스와 사랑방 리더로 함께 섬길 수 있어서 감사했던 순간들이 얼마나 많았는지 몰라! 늘 상대방의 말을 하나도 흘려보내지 않고 반응해 주는 모습 보면서, 나도 인경이처럼 주변 사람들의 좋은 점을 먼저 발견하고 적극적으로 표현해 주는 사람이 되고 싶다고 생각하곤 했어! 따수운 마음씨를 가진 다정한 인경아~~🤍 결혼 준비하랴, 일하랴, 사역까지 챙기느라 그동안 진짜 고생 많았어! 결혼 진심으로 축하하고, 앞으로 펼쳐질 인경이 가정의 새로운 앞날에 하나님의 축복이 늘 가득하길 기도할게💟"
    ],
    "verseText": "하나님이 우리를 사랑하시는 사랑을 우리가 알고 믿었노니 하나님은 사랑이시라 사랑 안에 거하는 자는 하나님 안에 거하고 하나님도 그의 안에 거하시느니라",
    "verseRef": "요한1서 4:16",
    "verseNote": "",
    "afterVerse": [
      "변치않는 하나님의 사랑을 받아들이고 전하는, 늘 하나님 안에 거하는, 하나님께서 거하시는 가정이 되길🫶🏼"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-37.png?v=517828e1225c"
  },
  {
    "id": "message-38",
    "name": "심지운",
    "group": "ten",
    "sentAt": "2026-09-26 11:18:46",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오전 11:18",
    "congrats": [
      "결혼을 진심으로 축하드립니다! 새로운 시작서부터 사랑, 감사, 화목이 풍성한 가정 꾸려나가시길 기도합니다!! 두분 앞날에 축복과 행복이 가득하시길 바랍니다!!"
    ],
    "verseText": "이러한즉 이제 둘이 아니요 한 몸이니 그러므로 하나님이 짝지어 주신 것을 사람이 나누지 못할찌니라 하시니",
    "verseRef": "마태복음 19:4",
    "verseNote": "",
    "afterVerse": [],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-38.png?v=bc034ca5b04f"
  },
  {
    "id": "message-39",
    "name": "이가을",
    "group": "sop",
    "sentAt": "2026-09-26 11:19:41",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오전 11:19",
    "congrats": [
      "인경언니 ~ 🩷 결혼 진심으로 축하드려요 항상 따뜻한 미소와 목소리로 반겨주셔서 언니를 보면 마음이 편안해졌어요 제가 처음 뒤나에 왔을 때부터 지금까지 매번 사우회와 임역원으로 섬겨주시고 수고해주셔서 늘 감사해요 새로 이루어 갈 언니의 가정을 위해서도 기도할게요 두 분께서 함께 내딛는 한 걸음 마다 하나님의 선하심이 인도하실 것을 믿고, 크고 작은 갈등을 겪겠지만 결국 주님을 선택할 굳건한 믿음을 허락하시길 기도할게요 🩷"
    ],
    "verseText": "두 사람이 한 사람보다 나음은 그들이 수고함으로 좋은 상을 얻을 것임이라",
    "verseRef": "전도서 4장 9-12절",
    "verseNote": "",
    "afterVerse": [
      "결혼 너무너무 축하드려요 😽🎀 오래오래 행복하세요 언니 ~~"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-39.png?v=1f6a1aedb9e0"
  },
  {
    "id": "message-42",
    "name": "김현기",
    "group": "ten",
    "sentAt": "2026-09-26 12:10:45",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 12:10",
    "congrats": [
      "인경누나 결혼 축하드립니다!! 항상 친절한 모습으로 대해주셔서 감사합니다.\n앞으로 시작될 결혼 생활 속에서도 하나님과 함께 서로를 사랑하고 배려하며 나아가는 부부 되셨으면 좋겠습니다!"
    ],
    "verseText": "이제 인내와 위로의 하나님이 너희로 그리스도 예수를 본받아 서로 뜻이 같게 하여 주사",
    "verseRef": "로마서 15:5",
    "verseNote": "",
    "afterVerse": [],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-42.png?v=83c9b67b7ac2"
  },
  {
    "id": "message-44",
    "name": "이선화",
    "group": "alt",
    "sentAt": "2026-09-26 13:40:35",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 1:40",
    "congrats": [
      "인경언니~~~!! 결혼 축하해요💐 뒤나미스와 사랑방에서 언제나 따뜻한 미소와 다정한 말로 맞이해주셔서 감사해요ㅎㅎ 작은 것도 지나치지 않고, 저도 몰랐던 저의 좋은 점을 찾아내서 칭찬해주시던 긍정 폭탄 인경언니,,! 그런 인경언니의 아름다움을 알아보고 언니를 꽉 붙잡은 피앙세 분과 함께 행복한 결혼 생활을 만들어가시길 기도할게용💕 주변 사람들에게 늘 힘과 사랑을 나누어주었던 인경언니에게 이제는 누구보다 든든한 힘이 되어줄 인생의 동반자가 생긴 것을 진심으로 축하드리며!! 인경언니의 앞으로의 나날에 하나님의 돌보심과 축복이 가득하길 바랍니다!!🫶"
    ],
    "verseText": "6:24 여호와는 네게 복을 주시고 너를 지키시기를 원하며 25 여호와는 그 얼굴로 네게 비취사 은혜 베푸시기를 원하며 26 여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라 할찌니라 하라",
    "verseRef": "민수기 6:24-26",
    "verseNote": "",
    "afterVerse": [
      "인경언니 행복하게 사세용❤️"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-44.png?v=dd7c8e12e9c7"
  },
  {
    "id": "message-46",
    "name": "이현주",
    "group": "alt",
    "sentAt": "2026-09-26 14:28:17",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 2:28",
    "congrats": [
      "인경아 결혼을 축하해! 🤍 \n항상 애정 어린 말과 따뜻한 미소로 주변을 포근하게 해주는 인경이니까, 인경이랑 닮은 사랑과 웃음 많은 따뜻한 가정을 잘 만들어갈수 있을것 같아! \n여러 사람들의 축복 속에서, 새로운 인생의 전환점을 맞은것을 축하해. 행복한 결혼생활 되기를❤️"
    ],
    "verseText": "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며\n무례히 행하지 아니하며 자기의 유익을 구하지 아니하며 성내지 아니하며 악한 것을 생각하지 아니하며\n불의를 기뻐하지 아니하며 진리와 함께 기뻐하고\n모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라",
    "verseRef": "고전13:4-7",
    "verseNote": "",
    "afterVerse": [
      "웰컴 투 유부월드🫶🏻 앞으로의 날들을 축복해✨"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-46.png?v=d99fce8dfcc2"
  },
  {
    "id": "message-47",
    "name": "이예진",
    "group": "sop",
    "sentAt": "2026-09-26 15:20:22",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 3:20",
    "congrats": [
      "인경아 결혼 축하해~🩷 볼 때마다 서민정 선생님 같은 그녀,, 너무 귀엽고 무해한 인경이 결혼 너무 축하해😍😍\n남편분 성함을 보면서 또 하나의 믿음의 가정이 세워지는구나, 싶어서 너무 기뻤어!! 하나님 안에서 이어진 부부의 연은 세상 어떤 것도 부럽지 않은 가장 큰 축복인 것 같아💕 하나님을 가장 사랑하고 서로 사랑하는 예쁜 부부가 되기를 진심으로 축복해용🫶🏻🫶🏻"
    ],
    "verseText": "사랑하는 자여 네 영혼이 잘됨 같이 네가 범사에 잘되고 강건하기를 내가 간구하노라",
    "verseRef": "요삼1:2",
    "verseNote": "",
    "afterVerse": [
      "강한여자 강인경! 인간승리 강인경! 경축 강인경 결혼😍🩷"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-47.png?v=00707de26cbf"
  },
  {
    "id": "message-48",
    "name": "조하연",
    "group": "sop",
    "sentAt": "2026-09-26 15:30:26",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 3:30",
    "congrats": [
      "인경언니~ 결혼을 축하합니다~~🎉❤️❤️\n늘 친절하지만 어딘가 은은하게 돌아있는 것 같은 언니가 넘나 웃겨ㅋㅋㅋㅋᩚ\n결혼하고도 아주 알콩달콩 잘살것 같어ㅎㅎ\n결혼하고도 많이 놀러오고ㅠ 자양동으로 이사와라ㅠ🥹❤️\n행복하게 잘 살아!!!"
    ],
    "verseText": "사랑하는 자여 네 영혼이 잘됨 같이 네가 범사에 잘되고 강건하기를 내가 간구하노라",
    "verseRef": "요삼1:2",
    "verseNote": "",
    "afterVerse": [
      "라뷰!!!!❤️"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-48.png?v=1058a779607c"
  },
  {
    "id": "message-51",
    "name": "우성원",
    "group": "bas",
    "sentAt": "2026-09-26 15:41:59",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 3:41",
    "congrats": [
      "인경 누님! 결혼을 진심으로 축하드려요! 뒤나미스에서 함께 찬양으로 섬기며 뵐 수 있어서 늘 감사한 마음을 가지고 있습니다. 새로운 가정을 이루는 귀한 시작 위에 하나님의 사랑과 은혜가 언제나 가득하고, 두 분이 서로를 아끼고 의지하며 기쁨이 넘치는 가정을 만들어 가시길 기도하겠습니다!"
    ],
    "verseText": "한마음과 한 입으로 하나님 곧 우리 주 예수 그리스도의 아버지께 영광을 돌리게 하려 하노라",
    "verseRef": "로마서 15장 6절",
    "verseNote": "",
    "afterVerse": [
      "로마서 15장 6절 말씀처럼 두 분이 언제나 한마음으로 동행하며, 삶과 찬양으로 하나님께 영광 돌리는 아름다운 가정을 이루시길 기도할게요!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-51.png?v=16c9a0a66ae0"
  },
  {
    "id": "message-52",
    "name": "박태민",
    "group": "bas",
    "sentAt": "2026-09-26 16:46:38",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 4:46",
    "congrats": [
      "인경누나 결혼 축하드려요🎊🎉\n누나랑 사랑방부터 뒤나미스, 리더까지 하나님과 함께한 모든 순간들이 너무나도 감사했습니다😆\n이제 새로운 가정을 꾸리시는데 가정에 하나님의 사랑이 항상 넘치고 또 그 사랑이 빛과 같이 세상에  환하게 비춰지기를 소망합니다✨️🙏"
    ],
    "verseText": "내가 네게 명한 것이 아니냐 마음을 강하게 하고 담대히 하라 두려워 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라 ”",
    "verseRef": "여호수아 1:9",
    "verseNote": "",
    "afterVerse": [
      "하나님께서 항상 동행하실 누나의 앞길을 축복합니다👏"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-52.png?v=2e812b7fb9e0"
  },
  {
    "id": "message-54",
    "name": "조성은 지휘자님",
    "group": "🎶",
    "sentAt": "2026-09-26 17:20:55",
    "dateLabel": "2026년 9월 26일 토요일",
    "shortDate": "9월 26일",
    "timeLabel": "오후 5:20",
    "congrats": [
      "따뜻한 미소와 조용한 성품 뒤에 숨겨진 엉뚱하고 재밌는 면이 놀라웠던 반전 매력의 소유자 인경 자매 🥰\n다정다감하면서도 성실한 마음과 자세로 뒤나미스의 일원으로, 또 임역원으로 섬기는 자매가 있어 항상 든든하고 감사했어요. 멋진 믿음의 형제를 만나 아름다운 가정을 이룬다는 소식에 매우 기쁘고 감사합니다. 두 사람이 완전하신 하나님의 사랑으로 한 몸을 이루어 하나님의 거룩한 나라를 만들어가길, 그 가정을 통해 많은 이들이 하나님을 볼 수 있길, 하나님의 평안 속에 항상 건강하고 행복하길 축복합니다."
    ],
    "verseText": "\"여호와가 너를 항상 인도하여 메마른 곳에서도 네 영혼을 만족하게 하며 네 뼈를 견고하게 하리니 너는 물 댄 동산 같겠고 물이 끊어지지 아니하는 샘 같을 것이라\"",
    "verseRef": "이사야 58:11",
    "verseNote": "",
    "afterVerse": [
      "결혼 예식과 신혼 여행에서도 행복한 순간들이 넘치길💕"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": true,
    "avatarSrc": "assets/profiles/message-54.png?v=744ea03563ae"
  },
  {
    "id": "message-56",
    "name": "송성민",
    "group": "ten",
    "sentAt": "2026-10-02 16:12:41",
    "dateLabel": "2026년 10월 2일 금요일",
    "shortDate": "10월 2일",
    "timeLabel": "오후 4:12",
    "congrats": [
      "인경누나 결혼 축하드려요!!  뒤나미스에서 늘 밝게 대해주셔서 감사했어요 ㅎㅎ 두 분의 가정 위에 하나님의 사랑과 은혜가 늘 가득했으면 좋겠어요. 두 분의 가정이 웃음과 사랑이 끊이지 않는 따뜻한 가정이 되도록 저도 계속 기도할게요!!"
    ],
    "verseText": "이 모든 것 위에 사랑을 더하라 이는 온전하게 매는 띠니라",
    "verseRef": "골로새서 3:14",
    "verseNote": "",
    "afterVerse": [
      "결혼 축하드려요!!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/message-56.png?v=12249e6f29c3"
  },
  {
    "id": "letter-noh-sion",
    "name": "노시온",
    "group": "bas",
    "sentAt": "",
    "dateLabel": "",
    "shortDate": "",
    "timeLabel": "",
    "congrats": [
      "인경누님 좋은 아침, 좋은 오후, 좋은 밤 보내고 계신가요?\n언제나 밝은 미소로 뒤나미스를 섬겨 주셔서 감사해요! 결혼 진심으로 축하드리고, 누님의 앞으로의 인생 가운데에 주님 안에서 화목한 가정이 될 수 있기를 기도할게요.😊\n인생 선배로써, 뒤나미스 선배로써 앞으로 잘 부탁드립니다~!~!"
    ],
    "verseText": "\"무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라\"",
    "verseRef": "베드로전서 4장 8절",
    "verseNote": "",
    "afterVerse": [
      "언제나 어디에서나 행복한 가정이 되길 기도하고 축복하겠습니다!!"
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": false,
    "avatarSrc": "assets/profiles/letter-noh-sion.png?v=373cfc4cb38f"
  },
  {
    "id": "letter-oh-jaewook",
    "name": "오재욱 대장님",
    "group": "🎶",
    "sentAt": "",
    "dateLabel": "",
    "shortDate": "",
    "timeLabel": "",
    "congrats": [
      "결혼을 축하합니다. 하나님안에서 늘 행복하고 예수님과 늘 동행하며 성령충만한 가정을 이루길 기도합니다."
    ],
    "verseText": "1 여호와께서 시온의 포로를 돌려 보내실 때에 우리는 꿈꾸는 것 같았도다\n2 그 때에 우리 입에는 웃음이 가득하고 우리 혀에는 찬양이 찼었도다 그 때에 뭇 나라 가운데에서 말하기를 여호와께서 그들을 위하여 큰 일을 행하셨다 하였도다\n3 여호와께서 우리를 위하여 큰 일을 행하셨으니 우리는 기쁘도다\n4 여호와여 우리의 포로를 남방 시내들 같이 돌려 보내소서\n5 눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다\n6 울며 씨를 뿌리러 나가는 자는 반드시 기쁨으로 그 곡식 단을 가지고 돌아오리로다",
    "verseRef": "시편 126:1-6\n시편 128편 1~6절",
    "verseNote": "",
    "afterVerse": [
      "브리스길라와 아굴라 처럼 주님께 쓰임 받는 가정되길 바랍니다."
    ],
    "afterImage": "",
    "afterImageAlt": "",
    "pinnedInChats": true,
    "avatarSrc": "assets/profiles/letter-oh-jaewook.png?v=7575ae08bca8"
  }
];
