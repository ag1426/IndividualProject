<template>
  <!--MAIN-->
  <main>

    <Navbar/>
    <!--SHOPPING CART-->
    <div class="shopping-cart mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-lg-9 col-md-8 col-sm-7">
            <div class="c-section a-spacing-top-base">
              <div class="a-row sc-cart-header sc-compact-bottom">
                <h2>Shopping Cart</h2>
              </div>
              <form action="#" method="post">
                <div class="sc-list-head">
                  <div class="text-right a-spacing-top-micro">
                    <span class="a-color-secondary">Price</span>
                  </div>
                </div>
                <!-- List of the item -->
                <div
                  class="sc-list-body"
                  v-for="product in getCart"
                  :key="product._id"
                >
                  <div class="sc-list-item-border">
                    <div class="a-row a-spacing-top-base a-spacing-base">
                      <div class="row">
                        <!-- Product's Image -->
                        <div class="col-sm-2 col-2">
                          <a href="#" class="a-link-normal">
                            <img :src="product.photo" class="img-fluid w-100" />
                          </a>
                        </div>
                        <div class="col-sm-8 col-8">
                          <!-- Product's Title -->
                          <div class="a-spacing-mini">
                            <a
                              href="#"
                              class="a-link-normal a-size-medium a-text-bold"
                              >{{ product.title }}</a
                            >
                            <!-- Product's Owner name -->
                            <span class="a-size-base sc-product-creator">{{
                              product.brand
                            }}</span>
                          </div>
                          <div style="padding-top: 1%;">
                            <span
                              class="
                                a-size-small a-color-secondary
                                sc-product-binding
                              "
                              >Size: {{product.size}}</span
                            >
                          </div>
                          <div style="padding-top: 1%;">
                            <span
                              class="
                                a-size-small
                                sc-product-availability
                              
                              "
                              >Color: {{product.color}}</span
                            >
                          </div>
                           <div style="padding-top: 1%;">
                            <span
                              class="
                                a-size-small
                                sc-product-availability
                              
                              "
                              >Condition: {{product.condition}}</span
                            >
                          </div>
                          <div class="sc-action-links" style="padding-top: 2%;">
                            <!-- Delete button -->
                            <span class="a-size-small">
                              <a
                                href="#"
                                @click="$store.commit('removeProduct', product)"
                                >Remove</a
                              >
                            </span>
                            &nbsp; &nbsp;
                          </div>
                        </div>
                        <div class="col-sm-2 col-2 tr sm-txt-r">
                          <!-- Product's Price -->
                          <p class="a-spacing-small">
                            <span
                              class="
                                a-size-medium a-color-price
                                sc-price
                                sc-white-space-nowrap
                                sc-product-price
                                sc-price-sign
                                a-text-bold
                              "
                              >Rs. {{ product.price }}</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- List of the item -->

                <div class="text-right">
                  <!-- Cart Subtotal -->
                  <p class="a-spacing-none a-spacing-top-mini">
                    <span class="a-size-medium"
                      >Subtotal ({{ getCartLength }} item)</span
                    >
                    <span class="a-color-price a-text-bold">
                      <!-- Cart Total Price -->
                      <span class="a-size-medium a-color-price"
                        >Rs. {{ getCartTotalPrice }}</span
                      >
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-5">
            <div class="a-box-group" style="margin-bottom: 14px">
              <div class="a-box a-color-alternate-background">
                <div class="a-box-inner">
                  <div class="a-spacing-mini">
                    <p class="a-spacing-none a-spacing-top-none">
                      <!-- Cart Subtotal -->
                      <span class="a-size-medium">
                        <span>Subtotal ({{ getCartLength }} item):</span>
                        <span class="a-color-price a-text-bold">
                          <!-- Cart Total Price  -->
                          <span class="a-size-medium a-color-price"
                            >Rs.{{ getCartTotalPrice }}</span
                          >
                        </span>
                      </span>
                    </p>
                  </div>
                  <div class="a-spacing-base mt-1">
                    <input type="checkbox" name="checkbox" />
                    <span class="a-label a-checkbox-label"
                      >This order contains a gift</span
                    >
                  </div>
                  <template v-if="$auth.$state.loggedIn">
                    <div>
                      <span
                        class="a-spacing-small a-button-primary a-button-icon"
                      >
                        <span class="a-button-inner">
                          <nuxt-link  to="/placeorder" class="a-button-text"
                            >Proceed to checkout</nuxt-link
                          >
                        </span>
                      </span>
                    </div>
                  </template>
                  <template v-else>
                    <div>
                      <span
                        class="a-spacing-small a-button-primary a-button-icon"
                      >
                        <span class="a-button-inner">
                          <nuxt-link to="/login" class="a-button-text"
                            >Proceed to checkout</nuxt-link
                          >
                        </span>
                      </span>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="footer">
      <Footer />
    </div>
    <!--/SHOPPING CART-->
  </main>
  <!--/MAIN-->
</template>

<script>
import { mapGetters } from "vuex";
import NuxtLogo from "../../admin/components/NuxtLogo.vue";
export default {
  layout: "none",
  components: { NuxtLogo },

  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"]),
  },
};
</script>

<style scoped>
.footer{
   margin-top: 18%;
 }
</style>

