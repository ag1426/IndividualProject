<template>
<v-app style="background-color: white;">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="grey darken-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                          <nuxt-link to="/login">
                        <v-btn rounded color="#F27D42" dark>SIGN IN</v-btn>
                          </nuxt-link>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 brown--text text--lighten-2">Create Account</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                            label="Full name"
                            v-model= "fullName"
                            prepend-icon="mdi-account"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Email"
                            v-model= "email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Phone Number"
                           v-model= "phoneNumber"
                            prepend-icon="mdi-phone"
                            type="text"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Password"
                            v-model= "password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Re-type your password"
                            v-model= "confirmPassword"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="brown lighten-2"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 pb-5">
                          <br>
                          <div class="danger-alert" v-html= "error" />
                          <br> 
                        <v-btn rounded color="#F27D42" dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
