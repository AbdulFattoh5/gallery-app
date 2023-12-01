<template>
  <div class="item">
    <img :src="photo?.src?.large" alt="" class="item__img" />
    <div class="item__details">
      <a
        @click.prevent="downloadImage"
        :href="photo?.src?.large"
        target="_blank"
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
import axios from "axios"
export default {
  data() {
    return {};
  },
  props: {
    photo: Object,
  },
  methods: {
    async downloadImage() {
      try {
        const response = await axios.get(this.photo?.src?.large, {
          responseType: "blob",
        });
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);

        // Create a download link
        const link = document.createElement("a");
        link.href = url;
        link.download = "downloaded_gallery.jpg";

        // Append the link to the body and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    },
  },
};
</script>
