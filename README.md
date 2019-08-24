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
## 리스트카드 ListCard
```javascript
let data = new kakaoEmbed();
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

/*
data.ouput() 출력값
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "listCard": {
          "items": [
            {
              "title": "Kakao i Developers",
              "imageUrl": "http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg"
            },
            {
              "title": "Kakao i Voice Service",
              "imageUrl": "http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg"
            }
          ],
          "header": {
            "title": "카카오 i 디벨로퍼스를 소개합니다",
            "imageUrl": "http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg"
          }
        }
      }
    ]
  }
}
*/
// res.status(200).send(data.output());  express 사용시
```
![image](https://user-images.githubusercontent.com/32125218/63636886-71f5f900-c6b0-11e9-979b-21641f7867a6.png)

