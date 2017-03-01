import $ from 'jquery';
import slick from 'slick-carousel';

class Carousel {
  constructor() {
    // cache elements from page
    this.carousel = $('.banner__list');
    this.carousel.slick({
      dots: true,
      speed: 600,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000
    });

    this.events();
  }

  events() {
    // this.titles.on('click', this.logSomething);
  }

  // custom functions
  logSomething() {
    console.log("car!");
  }
}

export default Carousel;
