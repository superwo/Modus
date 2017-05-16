import $ from 'jquery';

class TestModule {
  constructor() {
    // cache elements from page
    this.preloader = $('.preloader');

    this.upButton = $('.mainfooter__bottom-inner .btn--square');

    this.events();
  }

  events() {
    $(document).ready(() => this.preloader.delay(1000).fadeOut());
    this.upButton.on('click', (ev) => {
      ev.preventDefault();
      $('body').animate({scrollTop: 0}, '500');
    });
  }



}

export default TestModule;
