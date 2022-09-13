import MainSlider from './modules/slider/slider-main';
import PlayVideoModules from "./modules/playVideo/playVideoModules";

window.addEventListener('DOMContentLoaded', () => {

  const modulesSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
  modulesSlider.render();

  new PlayVideoModules('.module__video-item .play', '.overlay').init();

});