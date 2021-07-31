<template>
  <body>
    <!--SHIPPING ADDRESS-->
    <div class="container-fluid">
      <div class="shipping-address">
        <div style="background-color: #424242; width: 100%">
          <nuxt-link to="/">
            <img src="img/logo.png" style="width: 5%; height: 5%" />
          </nuxt-link>
        </div>
        <div class="a-row">
          <div class="a-size-large a-text-bold a-spacing-mini">
            Review your order
          </div>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
            <div class="a-row a-spacing-large"></div>
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Shipping address
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <div class="displayAddressDiv">
                          <!-- User's address -->
                          <ul class="displayAddressUL">
                            <li>{{ $auth.$state.user.fullName }}</li>
                            <li>
                              {{ $auth.$state.user.address.streetAddress }}
                            </li>
                            <li>{{ $auth.$state.user.address.city }}</li>
                            <li>
                              Phone:
                              <span dir="ltr">{{
                                $auth.$state.user.address.phoneNumber
                              }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Payment Method
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <ul class="no-bullet-list">
                          <li class="a-spacing-micro">
                            <span class="a-list-item">
                              <span>
                                <img src="img/visa.gif" class="img-fluid" />
                              </span>
                              ending in
                              <span>6397</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="a-row a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Billing Address
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <span>Same as shipping address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <!-- Estimated delivery -->
                  <div
                    class="
                      a-row
                      a-color-state
                      a-text-bold
                      a-size-medium
                      a-spacing-small
                    "
                  >
                    Estimated delivery: {{ estimatedDelivery }}
                  </div>
                  <div class="row">
                    <!-- Cart -->
                    <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                      <div
                        class="a-row a-spacing-base"
                        v-for="product in getCart"
                        :key="product._id"
                      >
                        <div class="row">
                          <!-- Product's photo -->
                          <div class="col-sm-3 col-3">
                            <img :src="product.photo" style="width: 100%" />
                          </div>
                          <!-- Product's Title -->
                          <div class="col-sm-9 col-9">
                            <div class="a-row">
                              <strong>{{ product.title }}</strong>
                            </div>
                            <!-- Product's owner name -->
                            <div class="a-row a-size-small">
                              by {{ product.brand }}
                            </div>
                            <div class="a-row">
                              <div>
                                <p>Size: {{ product.size }}</p>
                              </div>
                              <div>
                                <p>Condition: {{ product.condition }}</p>
                              </div>
                              <!-- Product's price -->
                              <span class="a-color-price a-spacing-micro">
                                <strong dir="ltr"
                                  >Rs. {{ product.price }}</strong
                                >
                              </span>
                            </div>
                            <div class="a-row a-color-secondary a-size-small">
                              Sold by:&nbsp;Bottomdrawer.com Services, Inc
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 col-sm-6 col-12">
                      <div class="a-row shipping-speeds">
                        <fieldset>
                          <span class="shipping-speeds-title a-size-medium">
                            <b>Choose a delivery option:</b>
                          </span>
                          <!-- Delivery option -->
                          <div class="a-spacing-mini wednesday">
                            <!-- Shipping normal -->
                            <input type="radio" name="order0" checked="checked" @change="onChooseShipping('normal')"/>
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Averages 7 business days</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >Rs. 200&nbsp;-&nbsp;Standard
                                Shipping - No Tracking</span
                              >
                            </span>
                          </div>
                          <br />
                          <div class="a-spacing-mini tuesday">
                            <!-- Shipping fast -->
                            <input type="radio" name="order0" @change="onChooseShipping('fast')"/>
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Averages 3 business days</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >Rs. 600&nbsp;-&nbsp;Shipping</span
                              >
                            </span>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top" class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-micro">
                    <nuxt-link to="/payment">
                      <span class="a-button-place-order">Place your order</span>
                    </nuxt-link>
                  </div>
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    By placing your order, you agree to Bottomdrawer's
                    <a href="#">privacy notice</a>
                    and
                    <a href="#">conditions of use</a>.
                  </div>
                  <div class="a-row">
                    <h3 class="a-spacing-micro a-size-base">Order Summary</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Cart's total price -->
                        <div class="col-sm-6">Items:</div>
                        <div class="col-sm-6 text-right">
                          Rs. {{ getCartTotalPrice }}
                        </div>
                      </div>
                      <div class="row">
                        <!-- Shipping cost -->
                        <div class="col-sm-6">Shipping & handling:</div>
                        <div class="col-sm-6 text-right">
                          Rs. {{ shippingPrice }}
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6 text-right">
                          <hr />
                        </div>
                      </div>
                      <!-- Total Price with Shipping -->
                      <div class="row">
                        <div class="col-sm-6">Total :</div>
                        <div class="col-sm-6 text-right">Rs. {{ getCartTotalPriceWithShipping }}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Order total:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Total Price with Shipping -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            Rs. {{ getCartTotalPriceWithShipping }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="a-row a-spacing-small a-spacing-top-small">
        <p class="a-color-secondary a-size-mini">
          Do you need help? Explore our
          <a href="#">contact us</a>
        </p>
        <p class="a-color-secondary a-size-mini">
          For an item sold by Bottomdrawer.com: When you click the "Place your
          order" button, we'll send you an email message acknowledging receipt
          of your order. Your contract to purchase an item will not be complete
          until we send you an email notifying you that the item has been
          shipped.
        </p>
        <div class="a-color-secondary a-size-mini">
          <p class="a-color-secondary a-size-mini">
            Within 30 days of delivery, you may return new, unopened merchandise
            in its original condition. Exceptions and restrictions apply. See
            Bottomdrawer.com's
            <a href="#">Returns Policy</a>
            <br />
            <br />Go to the
            <nuxt-link to="/">Bottomdrawer.com homepage</nuxt-link> without
            completing your order.
          </p>
        </div>
      </div>
      <hr />
      <p class="a-size-small a-text-center a-color-secondary" data-testid>
        <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> ©
        2021, Bottomdrawer.com, Inc.
      </p>
    </div>
    <!--/SHIPPING ADDRESS-->
  </body>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "none",
  async asyncData({ $axios, store }) {
    try {
      let response = await $axios.$post("/api/shipment", {
        shipment: "normal"
      });

      store.commit("setShipping", {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      });
      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      };
    } catch (err) {}
  },

  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartTotalPriceWithShipping"])
  },

  methods: {
    async onChooseShipping(shipment) {
      try {
        let response = await this.$axios.$post("/api/shipment", {
          shipment: shipment
        });

        this.$store.commit("setShipping", {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated
        });

        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (err) {}
    }
  }
};
</script>
