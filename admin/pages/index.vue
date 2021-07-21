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
          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-history margin-right-10"
            >Add a new category</a
          >
          <a href="#" class="a-button-history margin-right-10"
            >Add a new brand</a
          >
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <!-- Listing page -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="(product, index) in products" :key="product._id"  class="col-xs-2 col-lg-2 col-md-2 col-sm6 br bb">
          <div class="history-box">
            <div class="text-center">
              <!-- Product image -->
              <a href="#" class="a-link-normal">
                <img :src="product.photo" class="img-fluid" />
              </a>
              <!-- Product title -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">Title: {{product.title}}</div>
                </span>
              </div>
              <!-- Product size -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">Size: {{product.size}}</div>
                </span>
              </div>
              <!-- Product color -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated"> Color: {{product.color}}</div>
                </span>
              </div>
              <!-- Product Condition -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">Condition: {{product.condition}}
                  </div>
                </span>
              </div>
              <div class="a-row">
                <span class="a-size-base a-color-pricce">
                  <span class="p13n-sc-price">NPR {{product.price}}</span>
                </span>
                <!-- Product Buttons -->
                <div class="a-row">
                  <a href="a-row" class="a-button-history margin-right-10"
                    >Update</a
                  >
                  <a href="a-row" class="a-button-history margin-left-10"
                    >Delete</a
                  >
                </div>
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
  }
};
</script>
