export default class Difference {
  /**
   * Реализация блока с различиями
   *
   * oldOfficer   -> селектор первый блок
   * newOfficer   -> серектор второй блок
   * items        -> селектор пунктов блока
   */

  /** ===========================
   *        Конструктор        *
   =========================== */
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */
  bindTriggers(container, items, counter) {
    /**
     * при клике на триггер показывает пункт
     */
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }

  hideItems(items) {
    /**
     * скрывает пункты (кроме последнего)
     */
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  init() {
    /**
     * инициализирует блоки с различиями
     */
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);

    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}