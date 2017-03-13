import $ from 'jquery';

class NavigationToggle {
  constructor() {
    // cache elements from page
    this.toggleNav = $('.btn--navigation-toggle');
    this.mainNav = $('.main-nav');

    this.events();
  }

  events() {
    this.toggleNav.on('click', this.toggleNavigation.bind(this));
  }

  // custom functions
  toggleNavigation(e) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('on');
    this.mainNav.slideToggle();
  }
}


export default NavigationToggle;
