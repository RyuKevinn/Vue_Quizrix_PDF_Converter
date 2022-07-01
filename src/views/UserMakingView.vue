<template>
    <UserHeader ref="header_control"/>
    <UserMakingBox/>
</template>
<script>
import UserMakingBox from '@/components/UserMakingBox.vue'
import UserHeader from '@/components/UserHeader.vue'

export default {
  components: {
    UserMakingBox,
    UserHeader
  },
  data () {
    return {
      make: false,
      topLogo: true
    }
  },
  mounted () {
    this.$refs.header_control.usermakeControl()
  }
}
</script>
<style scoped>
    .log_out{
        position:fixed;
        top:10px;
        right:40px;
        color:gray;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px 20px;
    }
    .header{
        padding:10px 30px;
        display:flex;
        justify-content: space-between;
    }
    .header h2{
        line-height:35px;
        letter-spacing: -3px;;
        font-size:16px;
    }
    .header > .btn {
        display:flex;
    }
    .header > .btn a{
        display:block;
        background:#ddd;
        border-radius:5px;
        padding:10px 25px;
        font-size:16px;
        font-weight:bold;
        margin-left:10px;
        letter-spacing: -3px;
    }
</style>
