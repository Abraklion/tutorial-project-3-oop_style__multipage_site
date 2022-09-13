import MainSlider from './modules/slider/slider-main';
import PlayVideoModules from "./modules/playVideo/playVideoModules";
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {

  const modulesSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
  modulesSlider.render();

  new PlayVideoModules('.module__video-item .play', '.overlay').init();

  new ShowInfo('.plus__content').init();

  new Download('.download').init();

});