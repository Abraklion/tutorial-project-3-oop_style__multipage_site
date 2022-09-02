export default class Slider {
  /**
   * КЛАСС СЛАЙДЕР
   *
   * page   -> серектор обертки слайдера
   * btns   -> серектор кнопка для переключения слайдера
   */

  /** ===========================
   *        Конструктор        *
  =========================== */

  constructor(page, btns){
    this.page = document.querySelector(page);
    this.slides = Array.from(this.page.children);
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
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

    this.slides.forEach(slide => {
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

    this.showSlides(this.slideIndex);
  }
}