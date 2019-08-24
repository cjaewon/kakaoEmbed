const check = (templateType) => {
    if(templateType == null){
        throw new Error('[에러] template outputs이 정해지지 않았습니다.');
    }
    else if(this.templateType == 'simpleImage' || this.templateType == 'simpleText'){
        console.error(`[주의] ${this.templateType} JSON 포맷에서는 해당 필드명이 없습니다`);
    }
}
class kakaoEmbed {
    constructor(){
        this.Response = {
            version: "2.0",
            template: {
                outputs: [],
                quickReplies: [],
            },
            context: {},
            data: {}
        };

        this.templateLength = -1;
        this.templateType = null;
    }

    /**
   * @description 데이터를 설정합니다.
   * @param {object} data 데이터
   */
    setData(data){
        this.Response.data = data;
        return this;
    }
    /**
   * @description 데이터를 추가합니다.
   * @param {string} key 데이터 키
   * @param {any} data 데이터
   */
    addData(key, data){
        this.Response.data[key] = data;
        return this;
    }
    /**
   * @description 전달하고자 하는 텍스트
   * @param {string} text 텍스트 -필수
   */
    addText(text){
        this.Response.template.outputs.push({
            simpleText: {
                text,
            }
        });
        this.templateType = 'simpleText';
        return this;
    }
    /**
   * @description 전달하고자 하는 이미지
   * @param {string} imageUrl 전달하고자 하는 이미지의 url -필수
   * @param {string} altText url이 유효하지 않은 경우, 전달되는 텍스트 -필수
   */
    addImage(imageUrl, altText){
        this.Response.template.outputs.push({
            simpleImage: {
                imageUrl,
                altText,
            }
        });
        this.templateType = 'simpleImage';
        return this;
    }
    /**
   * @description BasicCard를 추가합니다.
   */
    addBasicCard(){
        this.Response.template.outputs.push({ basicCard: {} });
        this.templateLength++;
        this.templateType = 'basicCard';
        return this;
    }
    /**
   * @description CommerceCard를 추가합니다.
   */
    addCommerceCard(){
        this.Response.template.outputs.push({ commerceCard: {} });
        this.templateLength++;
        this.templateType = 'commerceCard';
        return this;
    }
    /**
   * @description ListCard를 추가
   */
    addListCard(){
        this.Response.template.outputs.push({ listCard: { items: [] } });
        this.templateLength++;
        this.templateType = 'listCard';
        return this;
    }
    /**
   * @description 켈로셀 추가
   * @param {object} carouselObject
   */
    addCarousel(carouselObject){
        this.Response.template.outputs.push({ carousel: carouselObject });
        this.templateLength++;
        this.templateType = 'carousel';
        return this;
    }
    /**
   * @description 카드의 제목을 설정
   * @param {string} title 카드의 제목
   */
    setCardTitle(title){
        check(this.templateType);
        this.Response.template.outputs[this.templateLength][this.templateType].title = title;
        return this;
    }
    /**
   * @description ListCard 헤더 설정
   * @param {string} title ListCard 헤더의 타이틀 설정
   * @param {string} imageUrl ListCard 헤더의 이미지 url 설정
   */
    setCardheader(title,imageUrl){
        this.Response.template.outputs[this.templateLength][this.templateType].header = { 
            title,
            imageUrl,
        };
        return this;
    }
    /**
   * @description 카드의 설명창 설정
   * @param {string} description
   */
    setCardDescription(description){
        check(this.templateType);
        this.Response.template.outputs[this.templateLength][this.templateType].description = description;
        return this;
    }
    /**
   * @description 카드의 섬네일 설정
   * @param {string} imageUrl 이미지 url
   * @param {string} link .필수 x 카드에서 사용하는 바로가기 url
   */
    setCardThumbnail(imageUrl,link){
        check(this.templateType);
        this.Response.template.outputs[this.templateLength][this.templateType].thumbnail = { imageUrl };
        if(link != null && this.templateType == 'commerceCard')
            this.Response.template.outputs[this.templateLength][this.templateType].thumbnails = [{ imageUrl, link:{ web: link }}];
        else if(link != null)
            this.Response.template.outputs[this.templateLength][this.templateType].thumbnail.link = { imageUrl, link:{ web: link }};
        else
            this.Response.template.outputs[this.templateLength][this.templateType].thumbnail = { imageUrl };
        return this;
    }
    /**
   * @description 카드에 버튼 추가
   * @param {string} label 버튼의 라벨
   * @param {object} any 원하는 action
   */
    addCardButton(label,action){
        check(this.templateType);
        if(this.Response.template.outputs[this.templateLength][this.templateType].buttons == null)
            this.Response.template.outputs[this.templateLength][this.templateType].buttons = [];
        action.label = label;
        this.Response.template.outputs[this.templateLength][this.templateType].buttons.push(action);
        return this;
    }
    /**
   * @description ListCard에 아이템을 추가합니다..
   * @param {string} title 아이템의 타이틀 -필수
   * @param {string} description 아이템의 설명 
   * @param {string} imageUrl 이미지 url
   * @param {string} link 클릭하면 이동할 url
   */
    addCarditem(title,description,imageUrl,link){
        check(this.templateType);
        let item = {
            title,
            description,
        }
        
        item.imageUrl = imageUrl;
        if(link != null && this.templateType == 'commerceCard')
            item.link = { web: link };
        this.Response.template.outputs[this.templateLength][this.templateType].items.push(item);
        return this;
    }
    /**
   * @description CommerceCard에 아이템을 추가
   * @param {int} price 제품의 가격 -필수
   * @param {int} discount 제품의 할인 된 금액
   * @param {string} currency 제품 가격의 통화 ex) won
   */
    setCardcost(price,discount,currency){
        check(this.templateType);
        this.Response.template.outputs[this.templateLength][this.templateType].price = price;
        this.Response.template.outputs[this.templateLength][this.templateType].discount = discount;
        this.Response.template.outputs[this.templateLength][this.templateType].currency = currency;
        return this;
    }
    /**
   * @description 카드 프로필 추가
   * @param {string} nickname 닉네임 -필수
   * @param {string} imageUrl 이미지 url
   */
    setCardprofile(nickname, imageUrl){
        check(this.templateType);
        this.Response.template.outputs[this.templateLength][this.templateType].profile = { nickname, imageUrl };
        return this;
    }
    /**
   * @description 바로가기에 추가
   * @param {int} label quickReplies의 라벨
   * @param {object} action 원하는 action
   */
    addQuickReplies(label,action){
        action.label = label;
        this.Response.template.quickReplies.push(action);
        return this;
    }
    /**
   * @description json 포맷을 리턴합니다.
   */
    output(){
        if(this.Response.template.outputs.length == 0)
            delete this.Response.template.outputs;
        if(this.Response.template.quickReplies.length == 0)
            delete this.Response.template.quickReplies;
        if(Object.keys(this.Response.data == 0))
            delete this.Response.data;
        if(Object.keys(this.Response.context == 0))
            delete this.Response.context;
        return this.Response;
    }
}

module.exports = kakaoEmbed;