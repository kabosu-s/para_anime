
const AnimeFrame = 100;
let tmp = {};
const image = document.getElementById("animation_img");
const AnimeInterval = 5;
const AnimeOffset = $("#animation_img_box").offset();


function loadImageToTmp(){
    for(let i=1;i<=AnimeFrame;i++){
        const _i = i;
        const img = new Image();
        tmp[_i] = null;
        img.src = "./img/img"+_i+".png";
        img.addEventListener("load",()=>{
            tmp[_i] = img;
        })
    }
}

$(window).scroll(function() {
    const y = $(window).scrollTop();
    const dy = y - AnimeOffset.top;
    if(AnimeOffset.top<y&&y<AnimeOffset.top+AnimeFrame*AnimeInterval){
        $("#animation_img_box").css("top",-150)
        const i = Math.floor(dy / AnimeInterval);
        if(i<=0||i>=AnimeFrame) return;
        if(tmp[i].src) image.src = tmp[i].src;
    }else if(y>=AnimeOffset.top+AnimeFrame*AnimeInterval){
        $("#animation_img_box").css("top","-"+(dy-AnimeFrame*AnimeInterval)); // スクロール分が終了したときに移動を始める
    }
});

loadImageToTmp();
$("#animation_img_padding").height(AnimeFrame*AnimeInterval);