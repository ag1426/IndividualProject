<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new brand</h2>
          <form>
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input class="a-input-text" style="width: 100%" v-model="name" />
            </div>

            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddbrand">Add brand</span>
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group">
            <li
              v-for="brand in brands"
              :key="brand._id"
              class="list-group-item"
            >{{ brand.name }}</li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>
    
<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/brands");
      return {
        brands: response.brands
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    async onAddbrand() {
      try {
        let data = { name: this.name };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/brands",
          data
        );
        this.brands.push(data);
        console.log(this.brands);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
