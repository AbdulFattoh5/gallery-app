<template>
  <div class="items">
    <div class="container">
        <div class="items__wrap">
            <Item />
        </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name: "Items",
    components:{
        Item,
    }
}
</script>

<style>

</style>