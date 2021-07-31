<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid dekstop-nav mobile-nav">
        <div class="row">
          <!-- Logo -->
          <v-toolbar-title class="mr-5">
            <div class="logo-area">
              <nuxt-link to="/">
                <img src="/img/logo.png" alt="Logo" class="img-fluid" />
              </nuxt-link>
            </div>
          </v-toolbar-title>
          <!-- Search bar -->
        <div class="col-sm-4"></div>
        </div>

        <div class="row">
          <!-- Delivery -->
          <template v-if="$auth.$state.loggedIn">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1" 
                    >Deliver to</span
                  >
                  <span class="nav-line-2" id="glow-ingress-line2"
                    >Kathmandu</span
                  >
                </div>
              </nuxt-link>
            </div>
          </div>

          </template>
            <template v-else>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/login" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1" 
                    >Deliver to</span
                  >
                  <span class="nav-line-2" id="glow-ingress-line2"
                    >Kathmandu</span
                  >
                </div>
              </nuxt-link>
            </div>
          </div>

          </template>
         
          <!-- Shopping -->
          <div class="col-xl-6 col-lg-5 col-md-4 col=sm-6 pl-0" style="margin-left: -7%;">
            <div class="nav-fill">
              <div class="nav-shop" >
                <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                  to="/Sell"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2" >
                    Sell
                  </span>
                </nuxt-link>
                </template>
  
                <template v-else>
                <nuxt-link
                  to="/login"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2">
                    Sell
                  </span>
                </nuxt-link>
                </template>
                 <div class="col-sm-6 pt-0" >
                <Search />
              </div>
            </div>
            
          </div>
          
          </div>

           

          <!-- Accounts and order and cart -->
          <div style="margin-left: 23%; padding-top: 0.6%;">
            <div class="nav-tools">
              <a
                href="#"
                id="icp-nav-flyout"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="icp-nac-link-inner">
                  <span class="nav-line-1" >
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-language" >EN</span>
                  </span>

                  <span class="nav-line-2">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                  to="/profile"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello,</span>
                  <span class="nav-line-2">{{ $auth.$state.user.fullName }}</span>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link
                  to="/signup"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello, Sign in</span>
                  <span class="nav-line-2">
                    Account &amp; Lists
                    <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                  </span>
                </nuxt-link>
              </template>
              <template v-if="$auth.$state.loggedIn">
              <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Orders</span>
              </nuxt-link>
              </template>

              <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >{{getCartLength}}</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "~/components/Search";

export default {
  components: {
    Search
  },
  computed: {
     ...mapGetters(["getCartLength"])
  }
};
</script>
