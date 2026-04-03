const viewItem = document.querySelector('.container1 .swiper');
const viewItem2 = document.querySelector('.container2 .swiper');
console.log(viewItem,viewItem2 );

const viewItemSwiper = new Swiper (viewItem,{
    loop:true,

})

const viewItem2Swiper = new Swiper (viewItem2,{
    loop:true,
})