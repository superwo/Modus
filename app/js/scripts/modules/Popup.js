import $ from 'jquery';
import magnificPopup from 'magnific-popup';
import slick from 'slick-carousel';

class Popup {
  constructor() {
    // cache elements from page
    this.imgs = $('.portfolio__cert-link');

    this.portfolioItemsLink = $('.portfolio__link');

    this.portfolioItemsBox = $('.portfolio__img-box');

    this.events();
  }

  events() {
    if(this.imgs.length) {
      this.imgs.magnificPopup({
        type:'image',
        mainClass: 'mfp-fade'
      });
    }

    if(this.portfolioItemsLink.length) {
      this.portfolioItemsLink.each(this.setId);
      this.portfolioItemsLink.magnificPopup({
        type: 'inline'
      });

      this.portfolioItemsLink.on('mfpOpen', this.setTheCarousel.bind(this));
      this.portfolioItemsLink.on('mfpClose', this.destroyTheCarousel.bind(this));
    }
  }

  // custom functions
  setId(e) {
    var th = $(this);
    th.attr('href', '#portfolio-img-' + e)
      .find('.portfolio__item-descr')
        .attr('id', 'portfolio-img-' +e);
  }

  setTheCarousel() {
    this.portfolioItemsBox.slick({
      dots: true,
      speed: 600,
      arrows: false,
      slidesToShow: 1,
      lazyLoad: "ondemand"
    });
  }

  destroyTheCarousel() {
    this.portfolioItemsBox.slick("unslick");
  }
}

export default Popup;
