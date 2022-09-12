import Slider from './slider';

export default class MainSlider extends Slider {
  /**
   * ГЛАВНЫЙ СЛАЙДЕР
   *
   * options   -> опции для работы слайдера (смотрите подробно в классе Slider)
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(options) {
    super(options);
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  showSlides(n) {
    /**
     * показывает слайд
     * n -> номер слайда, type: number
     */
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      // модернизация для всплывающего блока
      this.hanson.style.opacity = '0';

      if (n === 3){
        this.hanson.classList.add('animated');

        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    }catch(e){
      console.info('Slider : ' + e.message)
    }

    Array.from(this.slides).forEach(slide => {
      slide.style.display = 'none';
    });

    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    /**
     * переключает слайды
     * n -> номер слайда, type: number
     */
    this.showSlides(this.slideIndex += n);
  }

  render() {
    /**
     * инициализирует слайдер
     */
    try {
      // модернизация для всплывающего блока
      this.hanson = document.querySelector('.hanson');
    } catch(e){
      console.info('Slider : ' + e.message)
    }

    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    if(document.querySelectorAll('.prevmodule') && document.querySelectorAll('.nextmodule')){
      // для страницы modules.html

      document.querySelectorAll('.prevmodule').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlides(-1);
        });
      });

      document.querySelectorAll('.nextmodule').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlides(1);
        });
      });

    }

    this.showSlides(this.slideIndex);
  }

}