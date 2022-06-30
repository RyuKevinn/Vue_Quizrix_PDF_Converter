<template>
    <UserHeader ref="header_control"/>
    <LoadViewBox/>
</template>
<script>
import UserHeader from '@/components/UserHeader.vue'
import LoadViewBox from '@/components/LoadViewBox.vue'

export default {
  components: {
    UserHeader,
    LoadViewBox
  },
  mounted () {
    this.$refs.header_control.usermakeControl()
    this.$refs.header_control.makeControl()
    this.$refs.header_control.topLogoControl()
  }
}
</script>
