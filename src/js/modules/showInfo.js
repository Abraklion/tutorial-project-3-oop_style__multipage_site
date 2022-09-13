export default class ShowInfo {
  /**
   * КЛАСС АККАРДИОН
   *
   * triggers   -> селектор по клику на который открывать скрытый контент
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor (triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  init() {
    /**
     * инициализирует аккардион
     */
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sibling = btn.closest('.module__info-show').nextElementSibling;

        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    });
  }
}