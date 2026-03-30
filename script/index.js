const heroBnr = document.querySelector('.hero_bnr');
const best = document.querySelector('.best_sellers .best');
const advertise = document.querySelector('.advertise .advertise_bnr');
console.log(heroBnr,best,advertise);

const heroSwiper = new Swiper (heroBnr,{
    pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        renderFraction:function(current,total){
            console.log(current,total)
            let customPg =`<span class=${current}></span>`;
            customPg += `<span> / </span>`;
            customPg +=`<span class=${total}></span>`;
            return customPg;
        }
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