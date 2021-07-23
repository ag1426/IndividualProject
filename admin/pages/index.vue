<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-histiry">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All products
          </h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <nuxt-link to="/products" class="a-button-buy-again"
            >Add a new product</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <!-- Listing page -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="col-xs-2 col-lg-2 col-md-2 col-sm6 br bb"
        >
          <div class="history-box">
            <div class="text-center">
              <!-- Product image -->
              <a href="#" class="a-link-normal">
                <img :src="product.photo" class="productimg" />
              </a>

               <!-- Product Category -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">
                    Category: {{ product.category }}
                  </div>
                </span>
              </div>

               <!-- Product brand -->s

              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">
                    Brand: {{ product.brand }}
                  </div>
                </span>
              </div>
              <!-- Product title -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">
                    Title: {{ product.title }}
                  </div>
                </span>
              </div>
              <!-- Product size -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">Size: {{ product.size }}</div>
                </span>
              </div>
              <!-- Product color -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">
                    Color: {{ product.color }}
                  </div>
                </span>
              </div>
              <!-- Product Condition -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">
                    Condition: {{ product.condition }}
                  </div>
                </span>
              </div>
              <!-- Product Price -->
              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">Rs. {{ product.price }}</span>
                </span>
              </div>
              <!-- Product Buttons -->
              <div class="a-row">
                <nuxt-link
                  :to="`products/${product._id}`"
                  class="a-button-history margin-right-10"
                  >Update</nuxt-link
                >
                <a
                  href="#"
                  class="a-button-history margin-right-10"
                  @click="onDeleteProduct(product._id, index)"
                  >Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // asyncData is fetching Data before nuxt page finished loading on the browser.
  // It is good for SEO because the data will be loaded first
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response);
      return {
        products: response.products
      };
    } catch (err) {}
  },
  methods: {
    async onDeleteProduct(id, index) {
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/products/${id}`
        );
        if (response.status) {
          // remove
          this.products.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.productimg {
  max-width:  70%;
    height: auto;
    object-fit: cover;
    border: 1px;
    border-radius: 5px;
}
</style>
