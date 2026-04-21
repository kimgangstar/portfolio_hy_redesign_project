const heroBnr = document.querySelector('.hero_bnr');
const best = document.querySelector('.best_sellers .best');
const advertise = document.querySelector('.advertise .advertise_bnr');


// solution 변수 모음
const solution = document.querySelector('.solution_swiper');
const solution2 = document.querySelector('.solution_swiper2');
const solutionPore = document.querySelector('.pore');
const solutionMoisturizing = document.querySelector('.Moisturizing');
const solutionTypeBox = document.querySelectorAll('.type_box li a');


const inside = document.querySelector('.inside_wrap');

// 검색창
const search_wrap = document.querySelector('.search_popup');
const popular = document.querySelector('.popular_search');
const header = document.querySelector('header');
const search = document.querySelector('.function .search');
const searchPopup = document.querySelector('.popup_wrap');
const popupBack = document.querySelector('.search_popup .back');

// 제품 서브메뉴
const subMenu = document.querySelector('.product_menu');
const product = document.querySelector('.menu li:nth-child(2)');

console.log(heroBnr,best,advertise,solution,inside,popular,header,
    search,searchPopup,popupBack,subMenu,product,search_wrap,solutionTypeBox
    ,solution2,solutionPore,solutionMoisturizing
);

// 스와이퍼 관련 js
const heroSwiper = new Swiper (heroBnr,{
    scrollbar:{
        el:'.hero_bnr .bar',
    },
    navigation:{
        nextEl:'.hero_bnr .next',
    },
    loop:true,
    autoplay:{delay:4000,},
    speed:800,
})

const bestSwiper = new Swiper(best,{
    loop:true,
    slidesPerView:5,
    spaceBetween:20,
    navigation:{
        nextEl:'.best_sellers .next',
        prevEl:'.best_sellers .prev',
    },
    scrollbar:{
        el:'.best_sellers .bar',
    },
    breakpoints:{
        0: {slidesPerView:1,}, //모바일
        440: {
            slidesPerView:3,
            spaceBetween:10,
        }, //테블릿
        768: {slidesPerView:3,}, //테블릿
        1024: {slidesPerView:5,}, //pc
    }
})

const advertiseSwiper = new Swiper(advertise,{
    loop:true,
    slidesPerView:2,
    spaceBetween:20,
    centeredSlides:true,
    autoplay:{delay:2500,},
    speed:800,
    breakpoints:{
        0:{slidesPerView:1,},
        440:{slidesPerView:1,},
        768:{slidesPerView:1.5,},
        1024:{slidesPerView:2,},
    },
})

const solutionSwiper = new Swiper(solution,{
    slidesPerView:3,
    spaceBetween:15,
    navigation:{
        nextEl:'.Solution .pore .item_box .next',
        prevEl:'.Solution .pore .item_box .prev',
    },
    loop:true,
    breakpoints:{
        0:{slidesPerView:1,},
        440:{slidesPerView:1,},
        1024:{slidesPerView:3,},
    },
})

const solutionSwiper2 = new Swiper(solution2,{
    slidesPerView:3,
    spaceBetween:15,
    navigation:{
        nextEl:'.Solution .Moisturizing .item_box .next',
        prevEl:'.Solution .Moisturizing .item_box .prev',
    },
    loop:true,
    breakpoints:{
        0:{slidesPerView:1,},
        440:{slidesPerView:1,},
        1024:{slidesPerView:3,},
    },
})

const insideSwiper = new Swiper(inside,{
    slidesPerView:4,
    spaceBetween:13,
    loop:true,
    navigation:{
        nextEl:'.bnr_container .next',
        prevEl:'.bnr_container .prev',
    },
    pagination:{
        el: ".bnr_container .swiper-pagination",
    },
    breakpoints:{
        0:{slidesPerView:2,},
        440:{slidesPerView:2,},
        1024:{slidesPerView:4,},
    },
})

const popularSwiper = new Swiper(popular,{
    loop:true,
    slidesPerView:4,
    direction:'vertical',
    autoplay:{delay:2000,},
    spaceBetween:10,
})

// 검색창 관련 js
search.addEventListener('click',function(e){
    e.preventDefault();
    search_wrap.style.display = 'flex';
    header.style.borderBottom = '1px solid #eee';
    header.style.backgroundColor = '#fff';
    header.children[0].children[0].style.filter = 'invert(1)';
    header.children[0].children[1].style.filter = 'invert(1)';
    header.children[2].children[0].style.filter = 'invert(1)';
    header.children[2].children[1].style.filter = 'invert(1)';
    header.children[2].children[2].style.filter = 'invert(1)';
})

popupBack.addEventListener('click',function(e){
    e.preventDefault();
    header.style.borderBottom = 'none';
    search_wrap.style.display = 'none';
    header.style.backgroundColor = 'transparent';
    header.children[0].children[0].style.filter = 'invert(0)';
    header.children[0].children[1].style.filter = 'invert(0)';
    header.children[2].children[0].style.filter = 'invert(0)';
    header.children[2].children[1].style.filter = 'invert(0)';
    header.children[2].children[2].style.filter = 'invert(0)';
})

// popup 관련 함수
product.addEventListener('mouseenter',function(e){
    e.preventDefault();
    search_wrap.style.display = 'none';
    subMenu.style.display = 'block';
    header.style.borderBottom = '1px solid #eee';
    header.style.backgroundColor = '#fff';
    product.style.filter = 'invert(1)';
    header.children[0].children[0].style.filter = 'invert(1)';
    header.children[0].children[1].style.filter = 'invert(1)';
    header.children[2].children[0].style.filter = 'invert(1)';
    header.children[2].children[1].style.filter = 'invert(1)';
    header.children[2].children[2].style.filter = 'invert(1)';
})

product.addEventListener('mouseleave',function(e){
    e.preventDefault();
    subMenu.style.display = 'none';
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
        product.style.filter = 'invert(0)';
    header.children[0].children[0].style.filter = 'invert(0)';
    header.children[0].children[1].style.filter = 'invert(0)';
    header.children[2].children[0].style.filter = 'invert(0)';
    header.children[2].children[1].style.filter = 'invert(0)';
    header.children[2].children[2].style.filter = 'invert(0)';
})


// 솔루션 type_box a 속성 막는 js
for(let i of solutionTypeBox){
    i.addEventListener('click',function(e){
        e.preventDefault();
        activeFunc(i);
    })
}
function activeFunc(target){ //매번 달라지는 매개변수 이름을 붙이고 target을 리턴으로 부른다.
    for(let i of solutionTypeBox) i.classList.remove('active'); //모든 카테 타이틀을 i에 담아서 모든 active를 지우겠다.
    return target.classList.add('active'); // 매개변수에 액티브 클래스를 추가한다.
}

// 솔루션 클릭 함수
solutionTypeBox[1].addEventListener('click',function(){
    solutionPore.style.display = 'flex';
    solutionMoisturizing.style.display = 'none';
})

solutionTypeBox[0].addEventListener('click',function(){
    solutionPore.style.display = 'none';
    solutionMoisturizing.style.display = 'flex';
})

// header sticky 함수 (scroll 사용)
window.addEventListener('scroll',function(){
    if(window.scrollY >= 200){
        header.classList.add('scroll');
    }
    else{header.classList.remove('scroll');}
});