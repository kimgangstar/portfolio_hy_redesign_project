const heroBnr = document.querySelector('.hero_bnr');
const best = document.querySelector('.best_sellers .best');
const advertise = document.querySelector('.advertise .advertise_bnr');
const solution = document.querySelector('.solution_swiper');
const inside = document.querySelector('.inside_wrap');

console.log(heroBnr,best,advertise,solution,inside);

const heroSwiper = new Swiper (heroBnr,{
/*     pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        renderFraction:function(current,total){
            console.log(current,total)
            let customPg =`<span class=${current}></span>`;
            customPg += `<span> / </span>`;
            customPg +=`<span class=${total}></span>`;
            return customPg;
        }
    }, */
    scrollbar:{
        el:'.hero_bnr .pg',
    },
    navigation:{
        nextEl:'.hero_bnr .next',
    },
    loop:true,
})

const bestSwiper = new Swiper(best,{
    slidesPerView:5,
    spaceBetween:20,
    navigation:{
        nextEl:'.best_sellers .next',
        prevEl:'.best_sellers .prev',
    },
    scrollbar:{
        el:'.best_sellers .bar',
    },
})

const advertiseSwiper = new Swiper(advertise,{
    loop:true,
    slidesPerView:2,
    spaceBetween:20,
    centeredSlides:true,
})

const solutionSwiper = new Swiper(solution,{
    slidesPerView:3,
    spaceBetween:15,
    navigation:{
        nextEl:'.Solution .item_box .next',
        prevEl:'.Solution .item_box .prev',
    },
    loop:true,
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
})