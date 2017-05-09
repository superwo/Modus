import $ from 'jquery';

class TestModule {
  constructor() {
    // cache elements from page
    this.preloader = $('.preloader');

    this.events();
  }

  events() {
    $(document).ready(() => this.preloader.delay(1000).fadeOut());

  }


}

export default TestModule;
