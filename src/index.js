import $ from 'jquery';
import './styles/styles.scss';
import 'bootstrap';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }
// })

$('#mobile-hamburger-menu').on('click', (e) => {
  e.preventDefault();
  $('#nav-search-form').toggleClass('hidden');
  $(this).find('#mobile-menu').toggleClass('hidden');
  $(this).find('#mobile-close').toggleClass('hidden');

  if ($('#mobile-hamburger-menu').hasClass('collapsed')) {
    $('.navbar').css('border-radius', '0px');
    $('.navbar').css('box-shadow', 'none');
  } else {
    $('.navbar').css('border-radius', '0px 0px 20px 20px');
    $('.navbar').css(
      'box-shadow',
      '0px 0px 1px rgb(125 145 174 / 35%),0px 2px 2px rgb(125 145 174 / 35%), 0px 5px 10px 2px rgb(125 145 174 / 25%)',
    );
  }
});

$('.header-ul-item.item-expandable').on('click', (e) => {
  e.preventDefault();
  $(this).find('.arrow-down').toggleClass('hidden');
  $(this).find('.arrow-up').toggleClass('hidden');
});

$('.logo-expand').on('click', (e) => {
  e.preventDefault();
  $(this).find('.arrow-down').toggleClass('hidden');
  $(this).find('.arrow-up').toggleClass('hidden');
});

$('.nav-link').on('mouseenter mouseleave', (e) => {
  e.preventDefault();
  $(this).find('.arrow-down').toggleClass('hidden');
  $(this).find('.arrow-up').toggleClass('hidden');
});

$('.mobile-header-search-field').on('mouseenter mouseleave', (e) => {
  e.preventDefault();
  $('#mobile-search').toggleClass('mobile-search-move-right');
});

$(window).on('resize', (e) => {
  e.preventDefault();

  if (window.innerWidth >= 1024) {
    $('#calculator-text').html('калькулятор цен');
  }
  if (window.innerWidth >= 1440) {
    $('.screen-login-btn-text').html('войти в кабинет');
  }
  if (window.innerWidth >= 1920) {
    $('.screen-login-btn-text').html('войти в личный кабинет');
  }
});
