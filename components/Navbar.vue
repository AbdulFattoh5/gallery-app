<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo" @click="defaultMode">
          <img src="@/assets/img/icon.png" alt="" class="header__logo-img" />
          <h1 class="header__logo-title">Gallery</h1>
        </div>
        <button class="header__btn" @click="loadMorePhotos">
          <img src="@/assets/img/load-more-icon.png" alt="" />More
        </button>
        <div class="header__input">
          <input
            type="text"
            class="header__input-text"
            placeholder="Search images"
            v-model="searchQuery"
            @keydown.enter="searchImages"
          />
          <button class="header__input-btn" @click="searchImages">
            <img src="@/assets/img/search-icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions(["loadMorePhotos", "searchPhotos", "fetchPhotos", "defaultMode"]),
    searchImages() {
      if (this.searchQuery !== "") {
        this.$store.commit("setSearchQuery", this.searchQuery); // Set the search query in the store
        this.searchPhotos(); // Trigger the searchPhotos action
      }
      this.searchQuery = "";
    },
  },
};
</script>

<style></style>
