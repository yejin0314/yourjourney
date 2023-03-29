 $(function(){
 var swiper = new Swiper('.gallery_inner ', {
    slidesPerView: 5,//보여지는 갤러리 수
    spaceBetween: 0,//갤러리 사이 간격
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
	    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        type: "progressbar",
        clickable: true,
      },
    });
});