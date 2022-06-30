<template @>
       <div class="left_section">
            <div class="left_top">
                <span>세상의 모든 문제를 정복하라</span>
                <img class="logo_main" :src="img1" alt="">
            </div>
            <div class="left_middle color_gray">
                <p>퀴즈릭스는 문제를 만들고 공유하는<br>
                <span>클라우드 문제집 출판플랫폼</span>입니다.</p>
            </div>
            <div class="left_bottom">
              <img src="@/assets/img/air.png" alt="">
              <div class="text_box">
                <h3>서비스 오픈에 앞서 회원가입을 해주세요.</h3>
                <span class="color_gray">퀴즈릭스 개발소식과 함께 추첨을 통해</span><br>
                <span class="color_gray">에어팟을 선물로 드립니다.</span>
              </div>
            </div>
        </div>
</template>
<script>
export default {
  data () {
    return {
      img1: require('@/assets/img/logo01.png')
    }
  }
}
</script>
<style scoped>
  .left_section{
    width:60%;
    max-width:800px;
    padding-right:20px;
  }
  .left_top{
   position:relative;
   height:100px;
  }
  .left_top .logo_main{
        width:25vw;
    max-width:250px;
  }
  .left_top > span {
    display:block;
    transform:rotate(-6deg);
    font-weight:bold;
    letter-spacing: -3px;;
    position:absolute;
    top:-10PX;
  }
  .left_middle{
    font-size:25px;
    padding:40px 0 40px 0;
    line-height:28px;
  }
  .left_middle p span {
    font-weight:bold;
    color:black;
  }
  .left_bottom{
    display:flex;
    align-items: center;
    letter-spacing: -1px;;
  }
  .left_bottom .text_box {
    padding:0 10px;
  }
  .left_bottom .text_box h3 {
    font-size: 15px;
    padding-bottom:7px;
    margin-bottom:10px;
    position:relative;
    letter-spacing: -2px;;
  }
  .left_bottom .text_box h3::after{
    content:'';
    position:absolute;
    top:100%;
    height:1px;
    width: 103%;
    left:-1.5%;
    background:black;
  }
  .left_bottom .text_box span {
    line-height: 20px;;
    letter-spacing:-1px;
    font-size:15px;
  }
  .left_bottom > img{
    width:10vw;
    max-width:120px;
  }
</style>
