# kakaoEmbed

[![License: MIT](https://img.shields.io/badge/License-MIT-bule.svg)](https://opensource.org/licenses/MIT)

> 카카오 i 오픈빌더에 사용하는 스킬서버에서 SkillResponse 작성을 도와주는 Node.js 모듈입니다.

## ❓ Why <사용 이유>

카카오 i 오픈빌더에서 SkillResponse을 직접 json으로 적는 것은 코드의 가독성이 떨어집니다.<br>
kakaoEmbed를 사용하면 간단하게 응답 JSON 포맷을 만들 수 있습니다.

## ⬇️ Installation <설치 방법>

```bash
npm install kakaoEmbed
```

## 📄 Example <예제>
### 텍스트 simpleText
```javascript
let data = new kakaoEmbed();
data.addText('hello world');

/*
data.ouput() 출력값
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "simpleText": {
          "text": "hello world"
        }
      }
    ]
  }
}
*/
// res.status(200).send(data.output());  express 사용시
```
![image](https://user-images.githubusercontent.com/32125218/63636311-91892380-c6a8-11e9-9772-a4eb57abe8eb.png)
### 이미지 simpleImage
```javascript
let data = new kakaoEmbed();
data.addImage('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg','보물상자입니다.');

/*
data.ouput() 출력값
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "simpleImage": {
          "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
          "altText": "보물상자입니다."
        }
      }
    ]
  }
}
*/
// res.status(200).send(data.output());  express 사용시
```
![image](https://user-images.githubusercontent.com/32125218/63636369-79fe6a80-c6a9-11e9-99e9-85980365e145.png)
###  베이직카드 basicCard
```javascript
let data = new kakaoEmbed();
data
.addBasicCard()
.setCardTitle('보물상자')
.setCardDescription('보물상자 안에는 뭐가 있을까')
.setCardThumbnail('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg')
.addCardButton('열어보기', { action: 'message', messageText: '짜잔 우리가 찾던 보물입니다.' })
.addCardButton('구경하기', { action: 'webLink', webLinkUrl: 'https://e.kakao.com/t/hello-ryan' })
/*
data.ouput() 출력값
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "보물상자",
          "description": "보물상자 안에는 뭐가 있을까",
          "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
          "buttons": [
            {
              "action": "message",
              "messageText": "짜잔 우리가 찾던 보물입니다.",
              "label": "열어보기"
            },
            {
              "action": "webLink",
              "webLinkUrl": "https://e.kakao.com/t/hello-ryan",
              "label": "구경하기"
            }
          ]
        }
      }
    ]
  }
}
*/
// res.status(200).send(data.output());  express 사용시
```
![image](https://user-images.githubusercontent.com/32125218/63636611-8c2dd800-c6ac-11e9-913f-78301f383773.png)
### 커머스카드 commerceCard
```javascript
let data = new kakaoEmbed();
data
.addCommerceCard()
.setCardDescription('따끈따끈한 보물 상자 팝니다')
.setCardcost(399000,1000,'won')
.setCardThumbnail('http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg','https://store.kakaofriends.com/kr/products/1542')
.setCardprofile('보물상자 팝니다','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM')
.addCardButton('구매하기', { action: 'webLink', webLinkUrl: 'https://store.kakaofriends.com/kr/products/1542' })
.addCardButton('전화하기', { action: 'phone', phoneNumber: '12345-12345-12345' })
.addCardButton('공유하기', { action: 'share' });
/*
data.ouput() 출력값
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "commerceCard": {
          "description": "따끈따끈한 보물 상자 팝니다",
          "price": 399000,
          "discount": 1000,
          "currency": "won",
          "thumbnail": {
            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
          },
          "thumbnails": [
            {
              "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
              "link": {
                "web": "https://store.kakaofriends.com/kr/products/1542"
              }
            }
          ],
          "profile": {
            "nickname": "보물상자 팝니다",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM"
          },
          "buttons": [
            {
              "action": "webLink",
              "webLinkUrl": "https://store.kakaofriends.com/kr/products/1542",
              "label": "구매하기"
            },
            {
              "action": "phone",
              "phoneNumber": "12345-12345-12345",
              "label": "전화하기"
            },
            {
              "action": "share",
              "label": "공유하기"
            }
          ]
        }
      }
    ]
  }
}
*/
// res.status(200).send(data.output());  express 사용시
```
![image](https://user-images.githubusercontent.com/32125218/63636784-16773b80-c6af-11e9-86b4-c655f662b4ad.png)

