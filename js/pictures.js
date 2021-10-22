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




    
    var imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload.classList.remove('hidden')
    var hashtagClose = document.querySelector(".img-upload__cancel");
    hashtagClose.addEventListener('click', function(){
        console.log(imgUpload)
        imgUpload.classList.add("hidden");
        
    });
    var hashtagInput = document.querySelector('.text__hashtags')
    hashtagInput.addEventListener('change', (evt) => {
        var massiveNames = evt.target.value.split(', ');
        let isTooLong = massiveNames.every(item => item.length < 20)
        let isValidHashtag = massiveNames.every(item => item.startsWith('#'))
        let isTooShort = massiveNames.every(item => item.length > 5)
        if(!isValidHashtag){
            hashtagInput.setCustomValidity('Тут должен быть хештэг блять!');
        }
        else if(!isTooLong){  hashtagInput.setCustomValidity('Длина не должна превашать 20-ти символов');
        }
        else if(!isTooShort){  hashtagInput.setCustomValidity('Длина не должна быть меньше 5-ти символов');
        }
        else  {hashtagInput.setCustomValidity('');}
    })
        // TODO: Добавить проверку длины массива, максимув хештегов точно так же как хештег через every.
    var hashtag = 0;
    let field = document.querySelector('.scale__control_value')
    let minus = document.querySelector('.scale__control_smaller');
    let plus = document.querySelector('.scale__control_bigger');
    let imgPreview = document.querySelector('.img-upload__preview');
    plus.addEventListener('click', function() {
        if(parseInt(field.value) < 100){
            field.value = parseInt(field.value) + 25 +'%';
            imgPreview.style.transform = `scale(${parseInt(field.value)/100})`
        }
        
})
    minus.addEventListener("click", function() { 
        if(parseInt(field.value) > 25){
            field.value = parseInt(field.value) - 25 + '%';
            imgPreview.style.transform = `scale(${parseInt(field.value)/100})`
        }
    });

    // var pin = slider.querySelector('.effect-level__pin');
    // var depth = document.querySelector('.effect-level__depth');

    // pin.addEventListener('mousedown', function(evt){
    //     evt.preventDefault();
    

    //     var startCoords = {
    //         x: evt.ClientX,
    //     };

    //     var onMouseMove = function(moveEvt) {
    //         moveEvt.preventDefault();

    //         var shift = {
    //             x: startCoords.x - moveEvt.ClientX
    //         };

    //         startCoords = {
    //             x: moveEvt.ClientX
    //         };
    //         pin.style.left = (pin.offsetleft - shift.x) + 'px';

    //     }

    //     var onMouseUp = function(upEvt){
    //         upEvt.preventDefault();
    //         document.removeEventListener('mousemove', onMouseMove);
    //         document.removeEventListener('mouseup', onMouseUp);
    //     }

    //     document.addEventListener
    //     ('mousemove', onMouseMove);
    //     document.addEventListener
    //     ('mouseup', onMouseUp);
    // })

    let thumb = slider.querySelector('.effect-level__pin');
    let line = slider.querySelector('.effect-level__depth')

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        const sliderCoords =  slider.getBoundingClientRect();
        let newLeft = event.clientX - shiftX - sliderCoords.left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          newLeft = 0;
        }
        if (newLeft > sliderCoords.width) {
          newLeft = sliderCoords.width;
        }
        thumb.style.left = newLeft + 'px';
        line.style.width = newLeft/sliderCoords.width * 100 + '%'
        if (imgPreview.classList.contains('effects__preview--chrome')){
            imgPreview.style.filter = `grayscale(${newLeft/sliderCoords.width})`
        }
        if (imgPreview.classList.contains('effects__preview--sepia')){
            imgPreview.style.filter = `sepia(${newLeft/sliderCoords.width})`
        }
        if (imgPreview.classList.contains('effects__preview--marvin')){
            imgPreview.style.filter = `invert(${newLeft/sliderCoords.width * 100 + '%'})`
        }
        if (imgPreview.classList.contains('effects__preview--phobos')){
            imgPreview.style.filter = `blur(${newLeft/sliderCoords.width * 3 + 'px'})`
        }
        if (imgPreview.classList.contains('effects__preview--heat')){
            imgPreview.style.filter = `brightness(${(newLeft/sliderCoords.width)* 2 +1})`
        }
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };



    const radioButtons = document.querySelectorAll('.effects__radio')
    const sliderContainer = document.querySelector('.img-upload__effect-level')

    radioButtons.forEach(radio => {
        console.log(radio);
        radio.addEventListener('change', (evt) => {
            console.log(evt.target.value)
            sliderContainer.classList.remove('visually-hidden');
            switch(evt.target.value){
                case 'chrome':
                    imgPreview.className = 'effects__preview--chrome img-upload__preview';
                    imgPreview.style.filter = 'grayscale(1)'
                    break;
                case 'sepia':
                    imgPreview.className = 'effects__preview--sepia img-upload__preview';
                    imgPreview.style.filter = 'sepia(1)'
                    break;
                case 'none':
                    imgPreview.className = 'img-upload__preview';
                    imgPreview.style.filter = ''
                    sliderContainer.classList.add('visually-hidden');
                    break;
                case 'heat':
                    imgPreview.className = 'effects__preview--heat img-upload__preview';
                    imgPreview.style.filter = 'brightness(3)'
                    break;
                case 'phobos':
                    imgPreview.className = 'effects__preview--phobos img-upload__preview'
                    imgPreview.style.filter = 'blur(3)'
                    break;
                case 'marvin':
                    imgPreview.className = 'effects__preview--marvin img-upload__preview'
                    imgPreview.style.filter = 'invert(100%)'
                    break;
            }
             thumb.style.left = '100%'
             line.style.width = '100%'
        })
    })



