import Slider from './slider';

export default class MiniSlider extends Slider {
  /**
   * ВТОРОСТЕПЕННЫЕ СЛАЙДЕР
   *
   * options   -> опции для работы слайдера (смотрите подробно в классе Slider)
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(option) {
    super(option);
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  decorizeSlides() {
    /**
     * задает класс активность и анимацию активного слайда
     */
    Array.from(this.slides).forEach(slide => {

      slide.classList.remove(this.activeClass);

      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }

    });

    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }

  }

  bindTriggers() {
    /**
     * при клике на триггер(кнопки) переключает слайдер
     */
    this.next.addEventListener('click', () => {
      this.container.append(this.slides[0]);

      this.decorizeSlides()
    });

    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length -1];
      this.container.prepend(active);

      this.decorizeSlides()
    });
  }

  init() {
    /**
     * инициализирует слайдер
     */
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

    this.bindTriggers();
    this.decorizeSlides();

    if (this.autoplay) {
      // автовоспроизведение

      setInterval(() =>{
        this.next.click();
      } , 5000);

    }

  }
}