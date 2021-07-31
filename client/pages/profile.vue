<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Profile Page</h2>
          <a href="#" @click="onLogout">Logout</a>
          <form>

            <!-- Password -->
            <div class="a-spacing-top-medium">
              <label>Password</label>
              <input class="a-input-text" type="password" style="width: 100%" v-model="password" />
            </div>

             <div class="a-spacing-top-medium">
              <label>Confirm Password</label>
              <input class="a-input-text" type="password" style="width: 100%" v-model="confirmPassword" />
            </div>

            {{error}}
            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                </span>
              </span>
            </div>
          </form>
          <br />
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>
    
<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      error: null
    };
  },

  methods: {
    async onUpdateProfile() {
      let data = {
        fullName: this.fullName,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      try {
        let response = await this.$axios.$put("/api/auth/user", data);

        if (response.success) {
          this.password = "";

          await this.$auth.fetchUser();
        }
      } catch (err) {
        this.error = err.response.data.message;
        console.log(err);
      }
    },
    async onLogout() {
      await this.$auth.logout();
            this.$store.commit("clearCart");
    }
  }
};
</script>