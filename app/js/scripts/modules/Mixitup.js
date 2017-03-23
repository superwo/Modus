import $ from 'jquery';
// import slick from 'slick-carousel';
import mixitup from 'mixitup';

class Mixitup {
  constructor() {
    // cache elements from page
    this.links = $('.portfolio__filters-item a');
    this.mixer = $('.portfolio__list');

    if(this.mixer.length){
      mixitup(this.mixer);
    }
    this.events();
  }

  events() {
    this.links.on('click', function(event) {
      event.preventDefault();
      $('.btn--filters').removeClass('btn--active');
      $(this).addClass('btn--active');
    });
  }

  // custom functions
  logSomething() {
    console.log("car!");
  }
}

export default Mixitup;
