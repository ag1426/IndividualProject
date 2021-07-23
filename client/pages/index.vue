<template>
  <main class="listingPage">
    <div>
      <Navbar />
      <nuxt />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 nd-4 col-sm-4">
          <!-- Sidebar -->
        </div>

        <!-- Main Content -->
        <div class="featuredimg">
          <FeaturedImage />
        </div>
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <div class="mainResults">
            <ul class="s-result-list">
              <li class="s-result-item celwidget" v-for="product in products" :key="product._id">
                <div class="s-item-container">
                  <!-- Best seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <!-- Image -->
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img
                            :src="product.photo"
                            style="width: 150px;"
                            class="img-fluid"
                          />
                        </a>
                      </div>

                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <!-- Title and Date -->
                          <a href="#"
                            class="a-link-normal"
                          >
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary"
                                >Sep 3, 2021</span
                              >
                            </h2>
                          </a>
                        </div>

                        <!-- Author's name -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary">from</span>
                          <span class="a-size-small a-color-secondary">
                            <a class="a-link-normal a-text-normal" href="#">{{ product.brand }}</a>
                          </span>
                        </div>

                        <!-- Shipment -->
                        <div class="a-row">
                          <span class="a-size-small">Ships to Nepal</span>
                        </div>

                        <div class="row">
                          <!-- Price -->
                          <div class="a-row a-spacing-normal" style="margin-top: 20px">
                            <a href="#" class="a-link-normal a-text-normal">
                              <span class="a-offscreen">Rs.{{ product.price }}</span>
                              <span class="a-color-base sx-zero-spacing">
                                <span class="sx-price sx-price-large">
                                  <sup class="sx-price-currency">Rs</sup>
                                  <span class="sx-price-whole">{{ product.price }}</span>
                                  <sup class="sx-price-fractional">00</sup>
                                </span>
                              </span>
                            </a>
                            <span class="a-letter-space"></span>
                            <span
                              class="a-size-base-plus a-color-secondary a-text-strike"
                              >Rs.5000</span
                            >
                          </div>
                           </div>

                          <!-- Free Delivery -->
                          <div class="pt-4">
                              <span class="a-size-small a-color-secondary">Free delivery within Kathmandu</span>
                            </div>
                            <hr />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from "~/components/Navbar";
import FeaturedImage from "~/components/FeaturedImage";
import Footer from "~/components/Footer";

export default {
  components: {
    Navbar,
    FeaturedImage,
    Footer
  },

  async asyncData({ $axios }){
    try{
      let response = await $axios.$get("/api/products");
      console.log(response);
      return {

        products: response.products
      };
    } catch (err){
        console.log(err);
    }
  }
};
</script>

<style>
body{
  font-size: 13px;
  line-height: 19px;
}
.featuredimg{
  margin-top: -10.88px;
  max-height: 100%;
  max-width: 100%;
}
</style>