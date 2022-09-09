export default class Slider {
  /**
   * КЛАСС СЛАЙДЕР
   *
   * container   -> серектор обертки слайдера
   * btns          -> серектор кнопки для переключения MainSlider слайдера
   * next          -> серектор кнопка вперед
   * prev          -> серектор кнопка назад
   * activeClass   -> класс активности
   * animate       -> булевое значения (если ли анимация)
   * autoplay      -> булевое значения (есть или автовоспроизведения)
   */

  /** ===========================
   *        Конструктор        *
  =========================== */

  constructor({ container = null,
                btns = null,
                next = null,
                prev = null,
                activeClass = '',
                animate = false,
                autoplay = false
  } = {}){
    this.container = document.querySelector(container);
    this.slides = this.container.children; // коллекция живая
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }


}