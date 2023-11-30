<template>
  <div class="items">
    <div class="container">
      <div class="items__wrap">
        <Item v-for="photo in photoList" :key="photo.id" :photo="photo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Item from "./Item.vue";
export default {
  name: "Items",
  components: {
    Item,
  },
  data(){
    return{
        photoList:[],
    }
  },
  computed: {
    ...mapGetters(["getPhotos"]),
  },
  watch:{
    getPhotos(list){
        this.photoList = JSON.parse(JSON.stringify(list))
    }
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>