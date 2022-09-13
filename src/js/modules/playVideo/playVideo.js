export default class VideoPlayer {
  /**
   * КЛАСС ВИДЕОПЛЕЕР
   *
   * triggers   -> селектор который открывает модальное окно
   * overlay   -> серектор модального окно
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  bindTriggers() {
    /**
     * при клике на триггер показывает плеер
     */
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {

        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';

          if (this.path !== btn.getAttribute('data-url')) {
            this.path = btn.getAttribute('data-url');

            this.player.loadVideoById({videoId: this.path});
          }
        } else {
          this.path = btn.getAttribute('data-url');

          this.createPlayer(this.path);
        }

      });
    });
  }

  bindCloseBtn() {
    /**
     * при клике на крестик вкрывает плеер
     */
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    /**
     * инициализирует плеер
     */
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });

    console.log(this.player);
    this.overlay.style.display = 'flex';
  }

  init() {
    /**
     * подклчает скрипт YouTube-Player-API на страницу
     */
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}