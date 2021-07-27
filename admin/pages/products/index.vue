<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new product</h2>
            <form>
              <!--Category dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="category" />
              </div>
              <!--Brand dropdown -->
              <div class="a-spacing-top-medium">
                <label>Brand</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="brand" />
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label>Title</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="title" />
              </div>
              <!-- Size dropdown -->
              <div class="a-spacing-top-medium">
                <label>Size</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="size" />
                
              </div>
              <!-- Color input -->
              <div class="a-spacing-top-medium">
                <label>Color</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="color"/>
              </div>
              <!-- Condition input -->
              <div class="a-spacing-top-medium">
                <label>Condition</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="condition" />
              </div>

               <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px;">Description</label>
                <textarea
                  placeholder="Provide details such as a product description"
                  style="width: 100%"
                  v-model="description"
                ></textarea>
              </div>
              
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label>Price</label>
                <input type="number" class="a-input-text" style="width: 100%" v-model="price" />
              </div>
              <!-- Add photo file -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px;">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px"> {{fileName}}</p>
                  </label>
                </div>
              </div>
              <!-- Button -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddProduct">Add product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
   data(){
      return{
          category: "",
          brand: "",
          title: "",
          size: "",
          color: "",
          condition: "",
          description: "",
          price: 0,
          selectedFile: null,
          fileName: ""
      };
  },

  methods: {
      onFileSelected(event) {
          this.selectedFile = event.target.files[0];
          console.log(this.selectedFile);
          this.fileName = event.target.files[0].name;
      },

      async onAddProduct() {
          let data = new FormData();
          data.append("title", this.title);
          data.append("size", this.size);
          data.append("color", this.color);
          data.append("condition", this.condition);
          data.append("price", this.price);
          data.append("category", this.category);
          data.append("brand", this.brand);
          data.append("photo", this.selectedFile, this.selectedFile.name);


          let result = await this.$axios.$post("http://localhost:3000/api/products", data);

          this.$router.push("/")
          
      }
  }
};
</script>
