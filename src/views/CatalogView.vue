<template>
  <section class="arrangements">
    <div class="arrangements__wrapper">
      <div class="arrangements__container container_catalog">
        <div class="arrangements__body">
          <h1 class="arrangements__title title">Композиция ваших желаний</h1>
          <div class="arrangements__text">
            Добро пожаловать в мир стиля и моды, где каждая вещь в нашем списке
            - как нота в мелодии вашего образа. Откройте дверь в этот
            удивительный мир и дайте себе возможность ощутить волну вдохновения,
            которая превратит ваш образ в настоящую модную симфонию!
          </div>
          <ProductsList
            class="market-box_catalog"
            :category-id="0"
          ></ProductsList>
          <!-- <div class="arrangements__items market-box market-box_catalog">
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/one/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"the honey b"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >MINI ARRANGEMENT</a
              >
              <div class="product-item__price price">8.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/too/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE EMBER"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >SMALL ARRANGEMENT</a
              >
              <div class="product-item__price price">20.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/free/3.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE OLLIE"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >MEDIUM ARRANGEMENT</a
              >
              <div class="product-item__price price">30.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/fore/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE HENNA"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >LARGE ARRANGEMENTT</a
              >
              <div class="product-item__price price">50.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/one/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"the honey b"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >MINI ARRANGEMENT</a
              >
              <div class="product-item__price price">8.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/too/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE EMBER"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >SMALL ARRANGEMENT</a
              >
              <div class="product-item__price price">20.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/free/3.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE OLLIE"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >MEDIUM ARRANGEMENT</a
              >
              <div class="product-item__price price">30.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/arrangements/fore/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"THE HENNA"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >LARGE ARRANGEMENTT</a
              >
              <div class="product-item__price price">50.00</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="gift-boxes">
    <div class="gift-boxes__wrapper">
      <div class="gift-boxes__container container_catalog">
        <div class="gift-boxes__body">
          <h2 class="gift-boxes__title title">Gift Boxes</h2>
          <div class="gift-boxes__text">
            Our gift boxes are available during the fall/winter seasons. All
            gift boxes are carefully curated, containing products from our
            local/small business partners.
          </div>
          <ProductsList
            class="market-box_catalog"
            :category-id="5"
          ></ProductsList>
          <div class="gift-boxes__items market-box market-box_catalog">
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"SWEETER THAN HONEY"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >FALL GIFT BOX</a
              >
              <div class="product-item__price price">60.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"STARRY EYED"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >WINTER GIFT BOX</a
              >
              <div class="product-item__price price">45.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"SWEETER THAN HONEY"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >FALL GIFT BOX</a
              >
              <div class="product-item__price price">60.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"STARRY EYED"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >WINTER GIFT BOX</a
              >
              <div class="product-item__price price">45.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"SWEETER THAN HONEY"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >FALL GIFT BOX</a
              >
              <div class="product-item__price price">60.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"STARRY EYED"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >WINTER GIFT BOX</a
              >
              <div class="product-item__price price">45.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/1.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"SWEETER THAN HONEY"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >FALL GIFT BOX</a
              >
              <div class="product-item__price price">60.00</div>
            </div>
            <div class="market-box__item product-item">
              <div class="product-item__lake"></div>
              <div class="product-item__card"></div>
              <a href="product.html">
                <img
                  src="@/assets/images/gift-boxes/2.jpg"
                  alt="small bouquet of flowers"
                  class="product-item__img"
                />
              </a>
              <a
                href="product.html"
                class="product-item__title title-product title-product_underlain"
                >"STARRY EYED"</a
              >
              <a
                href="product.html"
                class="product-item__category title-product"
                >WINTER GIFT BOX</a
              >
              <div class="product-item__price price">45.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsList from "@/components/ProductsList.vue";

export default defineComponent({
  name: "CatalogPage",
  components: {
    ProductsList,
  },
});
</script>
