export default class Slider {
  /**
   * КЛАСС СЛАЙДЕР
   *
   * constructor   -> серектор обертки слайдера
   * btns          -> серектор кнопка для переключения MainSlider слайдера
   * next          -> кнопка вперед
   * prev          -> кнопка назад
   */

  /** ===========================
   *        Конструктор        *
  =========================== */

  constructor({constructor = null, btns = null, next = null, prev = null} = {}){
    this.constructor = document.querySelector(constructor);
    this.slides = Array.from(this.constructor.children);
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }


}