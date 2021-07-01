var getRandomComments = function() {
    var comments = [
        "Всё отлично!",
        "В целом всё неплохо. Но не всё.",
        "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.",
        "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
        "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше",
        "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
    ];
    if (Math.random() < 0.5 ){
        return [comments[getRandomNumbers(0, comments.length - 1)]]
    } 
        return [comments[getRandomNumbers(0, comments.length - 1)], comments[getRandomNumbers(0, comments.length - 1)]]
    
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
            likes: getRandomNumbers(15, 200),
            comments: getRandomComments(),
            description: getRandomDescription()
        } 
        pictures.push(picture);
    }
    return pictures
}
var donePictures = createPictures(25);
console.log(donePictures);