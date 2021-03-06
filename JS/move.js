
(function (desw) {
    var winW = document.documentElement.clientWidth||document.body.clientWidth;
    document.documentElement.style.fontSize= winW/desw*100+'px';
})(640);

var mySwiper = new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    pagination: '.swiper-pagination',
    // effect:'fade',
    paginationType:'progress',
    onSlideChangeEnd: function (swiper) {

        var slideAry = swiper.slides;
        var curIndex = swiper.activeIndex;//切换结束时，告诉我现在是第几个slide
        var total = slideAry.length;
        var targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += total - 2; // 元素的第一个
                break;
            case total - 1:
                targetId += 1;// 最后一张
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slideAry, function (item, index) {
            item.id = curIndex === index ? targetId : null;
        })
    }
});

var oMusic = document.getElementById('music'),
    audioMusic = document.getElementById('audioMusic');
setTimeout(function(){
    audioMusic.play();
    audioMusic.addEventListener('canplay',function(){
        oMusic.className = 'music rotate';
    })
},1000);
oMusic.onclick = function(){
    if(audioMusic.paused){
        audioMusic.play();
        oMusic.className = 'music rotate';
        oMusic.style.backgroundImage = 'url("image/music1.png")';
    }else{
        audioMusic.pause();
        oMusic.className = 'music';
        oMusic.style.backgroundImage = 'url("image/music2.png")';
    }
};

