<template>
  <main>
    <Navbar/>
      <!-- Breadcrumbs -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{product.category}}</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{product.title}}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- First 3 grid - Product Image and Author's section -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Image -->
              <div clas="imgBlock">
                <div class="eBooksimg">
                  <img :src="product.photo" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <!-- Middle 6 grid Description -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- Product Title -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle"> {{product.title}}</span>
                </h1>
              </div>
              <!-- Author's name -->
              <div class="bylineinfo">
                from
                <a href="#" class="authorName">
                 {{ product.brand }}
                </a> 
              </div>
              <hr style="margin-top: 10px;" />
              <!-- A tags Dummy Data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <ul>
                    <!-- Kindle -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <h6 style="margin-left: 35%;">Size</h6>
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                           
                        <a href="#" style="text-align: center;">{{product.size}}</a>
                     
                              <br />
                              <span class="a-color-secondary"></span>
                            
                          </span>
                        </span>
                        </span>
                     
                    </li>
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <h6 style="margin-left: 35%;">Color</h6>
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                           
                        <a href="#" style="text-align: center;">{{ product.color }}</a>
                     
                              <br />
                              <span class="a-color-secondary"></span>
                            
                          </span>
                        </span>
                        </span>
                     
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Description -->
              <div class="productDescription">
                <div class="productDescriptionInner">{{ product.condition }}</div>
              </div>

            </div>
          </div>
          <!-- Last 3 grid Buying section -->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <nuxt-link to="/cart">
                        <input type="radio" id="test1" name="radio-group checked" />
                        <label for="test1">Buy Now</label>
                        </nuxt-link>
                      </form>
                    </div>

                    <!-- Product Price -->
                    <div class="float-right">
                      <span
                        class="a-size-medium a-color-price offer-price a-text-normal"
                      >Rs. {{ product.price }} </span>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-none"></div>
                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">In Stock</span>
                  </div>
                  <div class="a-section a-spacing-mini">Ships from and sold by Bottomdrawer.com</div>
                </div>

                <div class="a-section">
                  <button class="a-button-stack" style="width:100%;" v-if="product.prodquantity > 0" @click="addProductToCart(product)">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </button>
                  <button class="a-button-stack" style="width:100%;" v-else disabled>
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </button>
                  <nuxt-link to="/cart">
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow"></i>
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                  </nuxt-link>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                        This item shipts to
                        <b>Kathmadu</b>
                        <b>Get it by Monday, Sept 23 - Monday, Sept. 30</b>
                        Choose this date at checkout
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <span class="a-declarative">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt"></i>
                      <span class="a-size-small">Deliver to Kathmandu</span>
                    </div>
                  </a>
                </span>
                <br />
                <hr />
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test1">Buy Now</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal">Rs. {{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </main>
</template>
<script>

 import { mapActions } from "vuex";
export default {
  layout: "none",
  
  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      console.log(response);

      return {
        product: response.product,
      };
    } catch (err) {
      console.log(err);
    }
  }, 
  methods: {
     ...mapActions(["addProductToCart"])
  }
};
</script>

<style scoped>
 .footer{
   margin-top: 18%;
 }
</style>
