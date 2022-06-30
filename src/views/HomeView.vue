<template>
    <div class="main_section">
      <HomeLeftBox/>
      <HomeRightBox/>
    </div>
</template>
<script>
import HomeLeftBox from '@/components/HomeLeftBox.vue'
import HomeRightBox from '@/components/HomeRightBox.vue'
export default {
  components: {
    HomeLeftBox,
    HomeRightBox
  }
  // data () {
  //   return {
  //     topLogo: false
  //   }
  // },
  // mounted () {
  //   this.$emit('topLogoOK', this.topLogo)
  // }
}
</script>
<style>
  .main_section{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:50px 10vw;
  }
</style>
