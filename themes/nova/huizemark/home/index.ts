// NOVA CAROUSEL
document.querySelectorAll('.nova-carousel').forEach((carousel) => {
  const time = 6000;
  const items = carousel.querySelectorAll('.nova-carousel__item');
  if (items.length < 2) return;

  let current = 0;

  const advance = () => {
    items[current].classList.remove('nova-carousel__item--active');
    current = (current + 1) % items.length;
    items[current].classList.add('nova-carousel__item--active');
    setTimeout(advance, time);
  };

  setTimeout(advance, time);
});

// SWIPERS
const featuredSwiper = new Swiper('.featured-swiper', {
  loop: true,
  speed: 900,
  pagination: {
    el: '.featured-swiper .swiper-pagination',
  },
  navigation: {
    nextEl: '.featured-swiper .swiper-button-next',
    prevEl: '.featured-swiper .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});

$('.featured__prev').click(() => {
  featuredSwiper.slidePrev();
});

$('.featured__next').click(() => {
  featuredSwiper.slideNext();
});

// MAP
const provinceCounts = {
  "eastern-cape": 200,
  "free-state": 700,
  "gauteng": 600,
  "kwazulu-natal": 800,
  "limpopo": 400,
  "mpumalanga": 500,
  "northern-cape": 300,
  "north-west": 900,
  "western-cape": 100
};

const nav = $('.map__nav');
const btn = $('.map__nav-btn');
const count = $('.map__nav-count');

$('.map svg path[data-province]').on('click', (e) => {
  const windowWidth = $(window).width();
  const province = $(e.currentTarget).data('province');
  const url = `/results/all/all/?area__province__province_slug=${province}`;
  const listingCount = provinceCounts[province] || 0;

  if (windowWidth < 1024) {
    nav.css('display', 'flex');
    count.text(listingCount);
    btn.attr('href', url);
  } else {
    window.location.href = url;
  }
});