import $ from 'jquery';

class NavigationToggle {
  constructor() {
    // cache elements from page
    this.toggleNav = $('.btn--navigation-toggle');
    this.mainNav = $('.main-nav');
    this.wind = $(window);
    this.main_content = $('.maincontent');

    this.events();
  }

  events() {
    this.toggleNav.on('click', this.toggleNavigation.bind(this));
    // this.wind.on('resize', () => {
    //   this.mainNav.attr('style', '');
    //
    //   if(this.toggleNav.hasClass('on')){
    //     this.toggleNav.removeClass('on');
    //   }
    // });
  }

  // custom functions
  toggleNavigation(e) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('on');

    this.mainNav.slideToggle(200, () => this.hf());
  }
  hf() {
    if(this.mainNav.css('display') === 'none') {
      this.mainNav.removeAttr('style');
    }
    
  }
}


export default NavigationToggle;
