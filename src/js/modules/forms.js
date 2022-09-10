import ValidatorForm from "../core/validatorForm";

export default class Form {
  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С ФОРМАМИ
   *
   * forms   -> селектор форм
   */

  /** ===========================
   *        Конструктор        *
   =========================== */

  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }

  /** ===========================
   *     Публичные методы      *
   =========================== */

  clearInputs() {
    /**
     * сбрасываем данные формы
     */
    this.inputs.forEach(item => {
      item.value = '';
    });
  }

  async postData(url, data) {
    /**
     * Асинхронный запрос к сорверу методом POST
     * url   -> ссылка на ресурс
     * data  -> данные для передачи на сервер
     */
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  }

  init() {
    /**
     * инициализирует модуль работы в формой
     */
    ValidatorForm.checkMailInputs('[type="email"]')
    ValidatorForm.initMask('[name="phone"]');

    this.forms.forEach(item => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
        item.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData = new FormData(item);

        this.postData(this.path, formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 6000);
          });
      });
    });
  }
}