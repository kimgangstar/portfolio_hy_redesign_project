const gnbProduct = document.querySelector('.menu li:nth-child(2)');
const SearchIcon = document.querySelector('.function .search');
const popupmenuSub = document.querySelector('.product_menu');
const popupSearchBox = document.querySelector('.search_popup');
const popular = document.querySelector('.popular_search');
const popupBack = document.querySelector('.search_popup .back');
const detailHeader  = document.querySelector('header');

console.log(gnbProduct,popupmenuSub,SearchIcon,popupSearchBox,popular,detailHeader);


const popularSwiper = new Swiper(popular,{
    loop:true,
    slidesPerView:4,
    direction:'vertical',
    autoplay:{delay:3000,},
    spaceBetween:10,
})

SearchIcon.addEventListener('click',function(e){
    e.preventDefault();
    popupSearchBox.style.display = 'block';
})

popupBack.addEventListener('click',function(e){
    popupSearchBox.style.display = 'none';
})

gnbProduct.addEventListener('mouseenter',function(e){
    popupmenuSub.style.display = 'block'
})

gnbProduct.addEventListener('mouseleave',function(e){
    popupmenuSub.style.display = 'none'
})
