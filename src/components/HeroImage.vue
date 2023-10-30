<script setup>
import heroImg from '@/assets/imgs/hero.png';
</script>
<template>
  <div>
    <div class="relative">
      <img :src="heroImg" />
    </div>
    <!-- <Card class="moving-card">
      <template #content>
        <h6 class="h8">Card Balance</h6>
        <p>Card Balance:</p> 
        <div>
            <span>S$1,801.00</span>

        </div>
      </template>
    </Card> -->
  </div>
</template>

<style scoped lang="scss">
.moving-card {
  position: absolute;
  bottom: 0;
}
</style>
