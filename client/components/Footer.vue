<template>
   <v-footer
      dark
      padless
      class="footer"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="grey darken-1 white--text text-center">
         <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
        Home
      </v-btn>
       <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
        About Us
      </v-btn>
       <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
        Contact Us
      </v-btn>
  
          <v-spacer></v-spacer>
          <a  href="https://www.instagram.com">
          <v-btn
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
          </v-btn>
          </a>
          <v-btn
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
             mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              mdi-instagram
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="grey darken-3 py-2 white--text text-center">
          {{ new Date().getFullYear() }} &#169; <strong>Bottom Drawer</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
body{
    background-color: #424242;

}
.footer{
  margin-top: 5%;
}
</style>