/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_playVideo_playVideoModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo/playVideoModules */ "./src/js/modules/playVideo/playVideoModules.js");


window.addEventListener('DOMContentLoaded', () => {
  const modulesSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: '.next'
  });
  modulesSlider.render();
  new _modules_playVideo_playVideoModules__WEBPACK_IMPORTED_MODULE_1__["default"]('.module__video-item .play', '.overlay').init();
});

/***/ }),

/***/ "./src/js/modules/playVideo/playVideo.js":
/*!***********************************************!*\
  !*** ./src/js/modules/playVideo/playVideo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
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
            this.player.loadVideoById({
              videoId: this.path
            });
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

/***/ }),

/***/ "./src/js/modules/playVideo/playVideoModules.js":
/*!******************************************************!*\
  !*** ./src/js/modules/playVideo/playVideoModules.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayVideoModules; });
/* harmony import */ var _playVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playVideo */ "./src/js/modules/playVideo/playVideo.js");

class PlayVideoModules extends _playVideo__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    super(triggers, overlay);
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
              this.player.loadVideoById({
                videoId: this.path
              });
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
    if (!this.activeBtn.closest('.module__video-item').dataset.disabled) {
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

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) {
      console.info('Slider : ' + e.message);
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
    } catch (e) {
      console.info('Slider : ' + e.message);
    }

    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    if (document.querySelectorAll('.prevmodule') && document.querySelectorAll('.nextmodule')) {
      // для страницы modules.html
      document.querySelectorAll('.prevmodule').forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlides(-1);
        });
      });
      document.querySelectorAll('.nextmodule').forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlides(1);
        });
      });
    }

    this.showSlides(this.slideIndex);
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
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
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate = false,
    autoplay = false
  } = {}) {
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

/***/ })

/******/ });
//# sourceMappingURL=modules.js.map