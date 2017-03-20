import $ from 'jquery';
import magnificPopup from 'magnific-popup';

class Popup {
  constructor() {
    // cache elements from page
    this.imgs = $('.portfolio__cert-link');

    this.portfolioItemsLink = $('.portfolio__link');

    this.events();
  }

  events() {
    this.imgs.magnificPopup({
      type:'image',
      mainClass: 'mfp-fade'
    });
    this.portfolioItemsLink.each(this.setId);
    this.portfolioItemsLink.magnificPopup({
      type: 'inline'
    });
  }

  // custom functions
  setId(e) {
    var th = $(this);
    th.attr('href', '#portfolio-img-' + e)
      .find('.portfolio__item-descr')
        .attr('id', 'portfolio-img-' +e);
  }
  // showPopup(e) {
  //   e.preventDefault();
  //   console.log(e.currentTarget);
  // }
}

export default Popup;
