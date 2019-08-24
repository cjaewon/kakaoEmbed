const kakaoEmbed = require('../lib/kakaoEmbed');

let data = new kakaoEmbed();
data.addText('hello world');

console.log(data.output());

data = new kakaoEmbed();
data.addImage('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg','보물상자입니다.');

console.log(data.output());

data = new kakaoEmbed();
data
.addBasicCard()
.setCardTitle('보물상자')
.setCardDescription('보물상자 안에는 뭐가 있을까')
.setCardThumbnail('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg')
.addCardButton('열어보기', { action: 'message', messageText: '짜잔 우리가 찾던 보물입니다.' })
.addCardButton('구경하기', { action: 'webLink', webLinkUrl: 'https://e.kakao.com/t/hello-ryan' })

console.log(data.output())

data = new kakaoEmbed();
data
.addCommerceCard()
.setCardDescription('따끈따끈한 보물 상자 팝니다')
.setCardcost(399000,1000,'won')
.setCardThumbnail('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg','https://store.kakaofriends.com/kr/products/1542')
.setCardprofile('보물상자 팝니다','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM')
.addCardButton('구매하기', { action: 'webLink', webLinkUrl: 'https://store.kakaofriends.com/kr/products/1542' })
.addCardButton('전화하기', { action: 'phone', phoneNumber: '12345-12345-12345' })
.addCardButton('공유하기', { action: 'share' });

console.log(data.output())

data = new kakaoEmbed();
data
.addListCard()
.setCardheader('카카오 i 디벨로퍼스를 소개합니다', 'http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg')
.addCarditem(
    'Kakao i Developers',
    '새로운 AI의 내일과 일상의 변화',
    'http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg',
    'https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%EC%96%B8(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)'
)
.addCarditem(
    'Kakao i Voice Service',
    '보이스봇 / KVS 제휴 신청하기',
    'http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg',
    'https://namu.wiki/w/%EC%96%B4%ED%94%BC%EC%B9%98'
)

console.log(data.output())

data = new kakaoEmbed();
data
.addCarousel({
      "type": "basicCard",
      "items": [
        {
          "title": "보물상자",
          "description": "보물상자 안에는 뭐가 있을까",
          "thumbnail": {
            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
          },
          "buttons": [
            {
              "action": "message",
              "label": "열어보기",
              "messageText": "짜잔! 우리가 찾던 보물입니다"
            },
            {
              "action":  "webLink",
              "label": "구경하기",
              "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
            }
          ]
        },
        {
          "title": "보물상자2",
          "description": "보물상자2 안에는 뭐가 있을까",
          "thumbnail": {
            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
          },
          "buttons": [
            {
              "action": "message",
              "label": "열어보기",
              "messageText": "짜잔! 우리가 찾던 보물입니다"
            },
            {
              "action":  "webLink",
              "label": "구경하기",
              "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
            }
          ]
        },
        {
          "title": "보물상자3",
          "description": "보물상자3 안에는 뭐가 있을까",
          "thumbnail": {
            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
          },
          "buttons": [
            {
              "action": "message",
              "label": "열어보기",
              "messageText": "짜잔! 우리가 찾던 보물입니다"
            },
            {
              "action":  "webLink",
              "label": "구경하기",
              "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
            }
        ]}
    ]}
)

console.log(data.output())

data = new kakaoEmbed();
data
.addText('메뉴에서 원하는 기능을 선택해주세요')
.addQuickReplies('날씨', { action: 'message', messageText: '날씨를 알려주세요.' })
.addQuickReplies('뉴스', { action: 'block', messageText: '뉴스를 알려드릴께요', 'blockId': '블록 아이디' });

console.log(data.output())