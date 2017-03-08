import $ from 'jquery';

class Services {
  constructor() {
    // cache elements from page
    this.links = $('.services__link');
    this.items = $('.services__item');
    this.info = $('.services__text');

    this.events();
  }

  events() {
    this.links.on('click', this.showText.bind(this));
  }

  // custom functions
  showText(e) {
    e.preventDefault();
    var ind = $(this.links).index(e.currentTarget);
    this.items.removeClass('services__item--current');
    this.info.removeClass('services__text--current');
    this.info.hide();
    $(this.items[ind]).addClass('services__item--current');
    $(this.info[ind]).fadeIn();
  }
}

export default Services;
