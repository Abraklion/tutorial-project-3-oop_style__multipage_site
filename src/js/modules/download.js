export default class Download {
  /**
   * КЛАСС СКАЧАТЬ ФАЙЛ
   *
   * triggers   -> селектор при клике на который происходит скачивание
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  downloadItem(path) {
    /**
     * скачивает файлы
     * path -> путь к файлу
     */
    const element = document.createElement('a');

    element.setAttribute('href', path);
    element.setAttribute('download', 'nice_picture');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    /**
     * инициализирует класс
     */
    this.btns.forEach(item => {

      item.style.cursor = 'pointer'

      item.addEventListener('click', (e) => {
        e.stopPropagation()
        this.downloadItem(this.path)
      });
    });
  }
}