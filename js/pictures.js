var getRandomComments = function(count) {
    var comments = [
        "Всё отлично!",
        "В целом всё неплохо. Но не всё.",
        "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.",
        "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
        "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше",
        "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
    ];
    var generatedComments = [];
    for (var i = 0; i <=count; i++){
        generatedComments.push(comments[getRandomNumbers(0, comments.length - 1)])
    }
    return generatedComments
    
}
var getRandomDescription = function() {
    var description = [
        "Тестим новую камеру!",
        "Затусили с друзьями на море",
        "Как же круто тут кормят",
        "Отдыхаем...",
        "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
        "Вот это тачка!"
    ];
        return description[getRandomNumbers(0, description.length - 1)] 
}
var getRandomNumbers = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var createPictures = function(count){
    var pictures = [];
    
    for (var i = 0; i < count; i++){
        var picture = {
            url: "photos/" + getRandomNumbers(1, 25) + ".jpg",
            avatarUrl: "img/" + "avatar-" + getRandomNumbers(1, 6) + ".svg",
            likes: getRandomNumbers(15, 200),
            comments: getRandomComments(getRandomNumbers(5, 25)),
            description: getRandomDescription()
        } 
        pictures.push(picture);
    }
    return pictures
}
var donePictures = createPictures(25);
var pictureElementList = document.querySelector(".pictures");
var pictureTemplate = document.querySelector("#picture").content;
var fragment = document.createDocumentFragment();
for (let i = 0; i < donePictures.length; i++){
    var pictureElement = pictureTemplate.cloneNode(true);
    var pictureNode = pictureElement.querySelector(".picture");
    pictureNode.addEventListener("click", function() {
        renderBigPicture(i);
    });
    var pictureInfo = donePictures[i];
    var img = pictureElement.querySelector("img");
    var comments = pictureElement.querySelector(".picture__comments");
    var likes = pictureElement.querySelector(".picture__likes");
    img.setAttribute("src", pictureInfo.url);
    comments.textContent = pictureInfo.comments.length;
    likes.textContent = pictureInfo.likes;
    fragment.append(pictureElement);
}
console.log(fragment);
pictureElementList.append(fragment);
var renderBigPicture = function(index) {
    var bigPictureElement = document.querySelector(".big-picture");
    bigPictureElement.classList.remove("hidden");
    var buttonClose = document.querySelector(".big-picture__cancel");
    buttonClose.addEventListener('click', function(){
        bigPictureElement.classList.add("hidden");
    });
    var pictureInfo = donePictures[index];
    var img = bigPictureElement.querySelector(".big-picture__img img");
    var comments = bigPictureElement.querySelector(".comments-count");
    var likes = bigPictureElement.querySelector(".likes-count");
    img.setAttribute("src", pictureInfo.url);
    comments.textContent = pictureInfo.comments.length;
    likes.textContent = pictureInfo.likes;
    var socialCommentsList = bigPictureElement.querySelector(".social__comments");
    var socialFragment = new DocumentFragment();
    var socialTemplate = document.querySelector("#social-comment").content;
    for (var i = 0; i <= 4; i++){
        var socialElement = socialTemplate.cloneNode(true);
        var img = socialElement.querySelector("img");
        var textComment = socialElement.querySelector(".social__text");
        img.setAttribute("src", pictureInfo.avatarUrl);
        socialFragment.appendChild(socialElement);
    }
    socialCommentsList.append(socialFragment);
}
    // var socialComments = bigPictureElement.querySelectorAll(".social__picture");
    // Array.from(socialComments).forEach(function (comment, index) {
    //     socialComments.setAttribute("src", bigPictureInfo.avatarUrl);
    // }); 




    
    var hashtag = document.querySelector('.img-upload__overlay');
    hashtag.classList.remove('hidden')
    var hashtagClose = document.querySelector(".img-upload__cancel");
    hashtagClose.addEventListener('click', function(){
        hashtag.classList.add("hidden");
    });
    var hashtagInput = document.querySelector('.text__hashtags')
    var hashtagNames = '#cool, #beatiful, #huge, #cute, #funny';
    var hashtag = 0;
    var massiveNames = hashtagNames.split(',  ', 5);
    // for( var i = 0; i < massiveNames.length; i++ )
    // hashtagInput.addEventListener('invalid', function(){
    //     if (hashtagInput.validity.tooShort) {
    //         hashtagInput.setCustomValidity('Длиньше должно быть блять!');    
    //     } else if (hashtagInput.validity.tooLong) {
    //         hashtagInput.setCustomValidity('Короче должно быть блять!');    
    //     } else if (hashtagInput.validity.valueMissing) {
    //         hashtagInput.setCustomValidity('Тут должен быть хештэг блять!'); 
    //     } else  if (hashtagInput.validity.patternMismatch){
    //         hashtagInput.setCustomValidity('Вначале должен стоять #');    
    //     } else  hashtagInput.setCustomValidity('');
    //     console.log('Коротко',hashtagInput.validity.tooShort);
    //     console.log('Длинно', hashtagInput.validity.tooLong);
    //     console.log('нет нихуя',hashtagInput.validity.valueMissing);
    // })

    massiveNames.forEach((some) => {
        if (!massiveNames.checkValidity) {
            hashtagInput.setCustomValidity('Тут должен быть хештэг блять!'); 
        } else  if (hashtagInput.validity.patternMismatch){
        hashtagInput.setCustomValidity('Вначале должен стоять #'); 
        } else  hashtagInput.setCustomValidity('');
        console.log(some);
    });
    