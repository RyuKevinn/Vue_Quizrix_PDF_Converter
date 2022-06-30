<template>
<div class="main">
  <div class="article">
    <router-view/>
  </div>
    <FooterBox/>
</div>
</template>
<script>
import FooterBox from '@/components/FooterBox.vue'
export default {
  components: {
    FooterBox
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  *{
    margin:0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic Coding', monospace;
    word-break: keep-all;
  }
  a{
    color:inherit;
    text-decoration: none;
  }
  ul{
    list-style-type:none;
  }
  input[type=radio] {
    border: 0px;
    width: 100%;
    height: 1.5em;
  }
  .row{
    max-width:768px;
    margin: 0 auto;
  }
  button{
    cursor:pointer;
  }
  .main{
    background:#FFE400;
    min-height:100vh;
    padding: 100px 40px 0;
    position:relative;
  }
  .log_out{
      position:absolute;
      top: -80px;
      right:20px;
      color:gray;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 5px 20px;
      transition:all 0.3s;
    }
    .log_out:hover{
      background: #fff100;
    }
  .article{
    border-radius:10px;
    background:white;
    width:100%;
    position:relative;
    min-height:550px;
  }
    .color_gray{
    color:#0201018e;
  }
  .logo{
    position:absolute;
    top:-70px;
    left:15px;;
    max-width:160px;
  }
</style>
