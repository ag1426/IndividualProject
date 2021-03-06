import axios from "axios";

export const state = () => ({
  // State
  cart: [],
  cartLength: 0,
  shippingPrice: 0,
  shippingEstimatedDelivery: ""
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.prodquantity > 0){
      const cartProduct = state.cart.find(prod => prod._id === product._id);
    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", cartProduct);

    }
    commit("incrementCartLength", product);
     
    }
   commit("decreaseProdQyt", product);
  }
};

export const mutations = {
  pushProductToCart(state, product) {
    product.quantity = 1 ;
    state.cart.push(product);
  },

  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity
      });
    }
  },
  incrementProductQty(state, product) {
    product.quantity =1 ;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1, product);
  },
 
  /*
  1. Find the product in the cart
  2. Change the quantity of the product
  3. Update the length of the cart
  4. replace the old product with the updated product

  */
  changeQty(state, { product, qty }) {
    let cartProduct = state.cart.find(prod => prod._id === product._id);
    cartProduct.quantity = qty;

    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },

  decreaseProdQyt(state, product){
    product.prodquantity --;
  },
  /*
  1. remove the product quantity from the cartLength
  2. get the index of the product that we want to delete
  3. remove that product by using splice

  */
  removeProduct(state, product) {
    state.cartLength -= product.quantity;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
  },

  setShipping(state, { price, estimatedDelivery }) {
    state.shippingPrice = price;
    state.shippingEstimatedDelivery = estimatedDelivery;
  },

  clearCart(state) {
    state.cart = [];
    state.cartLength = 0;
    state.shippingPrice = 0;
    state.shippingEstimatedDelivery = "";
  }
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });

    return total;
  },
  getCartTotalPriceWithShipping(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });

    return total + state.shippingPrice;
  },
  getEstimatedDelivery(state) {
    return state.shippingEstimatedDelivery;
  }
};
