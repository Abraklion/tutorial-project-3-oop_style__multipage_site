import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({btns: '.next', constructor: '.page'});
  mainSlider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});