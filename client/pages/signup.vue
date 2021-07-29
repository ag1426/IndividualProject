<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div id="logoback" class="text-center">
            <nuxt-link to="/">
              <img src="/img/logo.png" />
            </nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Create account</h1>
                <!-- Your Name -->
                <div class="a-row a-spacing-base">
                  <label  class="a-form-label"
                    >Full name</label
                  >
                  <input
                    type="text"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="fullName"
                  />
                </div>
                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label  class="a-form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="email"
                  />
                </div>
                <!-- Password -->
                <div class="a-row a-spacing-base">
                  <label  class="a-form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="password"
                  />
                  <!-- Confirm Password-->
                  <div class="a-row a-spacing-base">
                    <label  class="a-form-label"
                      >Confirm password</label
                    >
                    <input
                      type="password"
                      class="
                        a-input-text
                        form-control
                        auth-autofocus
                        auth-required-field
                        auth-contact-verification-request-info
                      "
                      v-model="confirmPassword"
                    />
                  </div>
                  <div class="a-alert-container">
                    <div class="a-alert-content">
                      {{error}}
                    </div>
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary" style="background-color: #F27D42;">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignup"
                        >Create your account</span
                      >
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating an account, you agree to Bottomdrawer's
                      <a href="#">Conditions of Use</a> and
                      <a href="#">Privacy Notice</a>
                    </b>
                  </div>
                </div>
                <hr />
                <div class="a-row">
                  <b>
                    Already have an account?
                    <nuxt-link to="/login" class="a-link-emphasis"
                      >Sign in</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   middleware: "auth",
  auth: "guest",
  layout: "none",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: null
    };
  },
  methods: {
    async onSignup() {
      try {
        let data = {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        let response = await this.$axios.$post("/api/auth/signup", data);
         
        console.log(response);
        if (response.success) {
          
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push("/");
         
        }
      } catch (err) {
        this.error = err.response.data.message;
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
#logoback {
  background-color: #424242;
}
.a-alert-content{
  color: maroon
}
</style>