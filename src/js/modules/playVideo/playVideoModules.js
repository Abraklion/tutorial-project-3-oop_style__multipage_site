import VideoPlayer from './playVideo';

export default class PlayVideoModules extends VideoPlayer {
  /**
   * НАСЛЕДНИК КЛАССА VideoPlayer
   *
   * triggers   -> селектор который открывает модальное окно
   * overlay   -> серектор модального окно
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(triggers, overlay) {
    super(triggers, overlay)
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  bindTriggers() {
    /**
     * при клике на триггер показывает плеер (переопределенный)
     */
    this.btns.forEach((btn, i) => {

      const blockedElem = btn.closest('.module__video-item').nextElementSibling;

      if (i % 2 === 0) {
        blockedElem.setAttribute('data-disabled', 'true');
      }

      btn.addEventListener('click', () => {
        if (btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;

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
        }
      });
    });
  }

  createPlayer(url) {
    /**
     * инициализирует плеер (переопределенный)
     */
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });

    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(event) {
    /**
     * калбэк функция,которая следит за состоянием видио (новый)
     */
    if(!this.activeBtn.closest('.module__video-item').dataset.disabled){

      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

      if (event.data === 0) {
        // 0 - видео закончилось
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';

          blockedElem.setAttribute('data-disabled', 'false');
        }
      }

    }

  }

}