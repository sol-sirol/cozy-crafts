<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container container">
        <div class="footer__body">
          <h2 class="footer__title title">Давайте свяжемся с Вами!</h2>
          <div class="footer__content">
            <div class="footer__text">
              У вас есть какие-либо вопросы о наших продуктах? Хотите
              сотрудничать с связаться с нами? Нажмите на ссылку ниже и
              отправьте нам электронное письмо!
            </div>
            <a href="mailto:sundayandsageco@gmail.com" class="footer__email">
              COZYCRAFTS@GMAIL.COM
            </a>
            <div class="footer__text">
              Мы с нетерпением ждем возможности поработать с вами и ответить на
              любые вопросы!
            </div>
          </div>
          <h3 class="footer__sub-title">следуйте за нами:</h3>
          <ul class="footer__list">
            <!-- <li>
              <a href="#" class="footer__link">
                <img src="@/assets/images/icons/f.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                <img src="@/assets/images/icons/i.svg" alt="instagram" />
              </a>
            </li> -->
            <li>
              <a href="#" class="footer__link">
                <img src="@/assets/images/icons/t.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
          <div class="footer__bottom">2023, COZYCRAFTS ©</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>
