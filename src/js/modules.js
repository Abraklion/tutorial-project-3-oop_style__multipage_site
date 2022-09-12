import MainSlider from './modules/slider/slider-main';

window.addEventListener('DOMContentLoaded', () => {

  const modulesSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
  modulesSlider.render();

});