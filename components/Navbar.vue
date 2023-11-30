<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo">
          <img src="@/assets/img/icon.png" alt="" class="header__logo-img" />
          <h1 class="header__logo-title">Gallery</h1>
        </div>
        <button class="header__btn" @click="loadMorePhotos">
          <img src="@/assets/img/load-more-icon.png" alt="" />Load
        </button>
        <div class="header__input">
          <input type="text" class="header__input-text" placeholder="Search images">
          <button class="header__input-btn"><img src="@/assets/img/search-icon.png" alt=""></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  methods:{
    ...mapActions(['loadMorePhotos'])
  }
};
</script>

<style></style>
