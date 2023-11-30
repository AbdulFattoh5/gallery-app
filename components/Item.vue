<template>
  <div class="item">
    <img :src="photo?.src?.large" alt="" class="item__img" />
    <div class="item__details">
      <a :href="photo?.url" target="_blank"
        ><img src="@/assets/img/enter-icon.png" alt="" class="item__link"
      /></a>
      <div class="item__author">
        <img src="@/assets/img/author.png" alt="" class="item__author-icon" />
        <h3 class="item__author-name">{{ photo?.photographer }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    photo: Object,
  },
};
</script>
