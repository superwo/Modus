import $ from 'jquery';

class Services {
  constructor() {
    // cache elements from page
    this.links = $('.services__link');
    this.items = $('.services__item');
    this.info = $('.services__text');

    // team information
    this.teamLinks = $('.team__member a');
    this.teamInfoWrap = $('.team__info-wrap');
    this.teamImage = $('.team__photo');

    this.events();
  }

  events() {
    this.links.on('click', this.showText.bind(this));
    this.teamLinks.on('click', this.showTeamInfo.bind(this));
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

  showTeamInfo(e) {
    e.preventDefault();
    var ind = $(this.teamLinks).index(e.currentTarget);
    var image = $(e.currentTarget).find('img').attr('src');
    this.teamInfoWrap.removeClass('current');
    this.teamInfoWrap.hide();
    this.teamLinks.removeClass('active');
    $(this.teamLinks[ind]).addClass('active');
    $(this.teamInfoWrap[ind]).fadeIn();
    this.teamImage.attr('style', `background-image: url('${image}');`);
  }
}

export default Services;
