<template>
    <div class="right_section" v-show="!log_in">
        <h1>MEMBER</h1>
        <span class="color_gray">이메일과 입력만으로 1초만에 회원가입</span>
        <div class="login_area">
          <label for="email_id">EMAIL</label>
          <input type="text" id="email_id" v-model="email_id">
          <label for="pwd">PASSWORD</label>
          <input type="password" id="pwd" v-model="pwd">
        </div>
        <label for="email_agree"  class="email_agree color_gray"><input type="checkbox" class="check_box" id="email_agree" v-model="remember_id">이메일을 기억합니다</label>
        <div class="btn">
          <button class="login" @click="check_user(email_id)">로그인</button>
          <router-link to="/join" class="join">회원가입 <img src="@/assets/img/ev.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      log_in: false,
      email_id: '',
      pwd: '',
      login_user: '',
      remember_id: false
    }
  },
  methods: {
    check_user (id) {
      // 로그인 시 데이터 일치 비교하기
      const storeId = this.$store.state.user[id]
      if (!this.email_id) {
        alert('이메일을 입력해 주세요')
        this.$router.push({ path: '/' })
      } else if (!this.pwd) {
        alert('비밀번호를 입력해 주세요')
        this.$router.push({ path: '/' })
      } else if (storeId === undefined) {
        alert('아이디가 존재하지 않습니다')
        this.$router.push({ path: '/' })
      } else if (this.pwd !== storeId.pwd) {
        alert('비밀번호가 맞지 않습니다')
        this.$router.push({ path: '/' })
      } else {
        this.$router.push({ path: '/' })
        this.$store.commit('now_user', storeId)
        this.login_user = this.$store.state.now_user.nickname
        this.$router.push({ path: '/making' })
      }
    }
  }
}
</script>
<style scoped>
    .right_section{
      display:flex;
      flex-direction:column;
      width:40%;
      max-width:300px;
  }
  .right_section.log_in{
    background:#ffe400;
    padding:20px 20px;
    height:100%;
    border-radius: 10px;;
    position:relative;
  }
  .right_section.log_in .welcome_img {
    width:100px;
    position:absolute;
    bottom:95%;
    left:50%;
    transform:translateX(-50%);
  }
  .right_section.log_in .welcome{
    background:#fff;
    padding: 30px 10px;
    font-weight: 900;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 30px;
    line-height:30px;
  }
  .right_section.log_in p{
    padding: 30px 0 ;
    letter-spacing: -1px;
    font-size:14px;
    text-align: center;
  }
  .right_section h1{
    font-weight: 600;
  }
  .right_section span{
    display:inline-block;
    margin:15px 0 ;
    font-size:13px;
    letter-spacing: -1px;
  }
  .right_section .login_area input{
    display:block;
    height:45px;
    width:100%;
    border: 1px solid lightgray;
    margin:7px 0;
    padding:0 10px;
    border-radius: 10px;;
    font-size:18px;
  }
  .right_section >label {
    margin: 5px 0 10px 0;
    font-size:12px;
  }
  .right_section input.check_box{
    background:gray;
    border:none;
    vertical-align: middle;
    margin-right: 5px;
  }
  .right_section .btn a,
  .right_section .btn button{
    display:block;
    width:100%;
    padding: 15px 30px;
    text-align: center;
    margin:10px 0;
    position:relative;
    font-size:13px;
  }
  .right_section .btn a img {
    width:80px;
    position:absolute;
    top:-20%;
    left:65%;
  }
  .right_section .btn .login{
    background:#FFE400;
    border: none;
  }
  .right_section .btn .join{
    border: 1px solid #FFE400
  }
  .right_section .btn .login,
  .right_section .btn .join{
    transition: all 0.3s;
  }
   .right_section.log_in .btn .go_making{
    /* transition: all 0.3s; */
    margin-bottom:30px;
    background: white;
    position:relative;
  }
  .right_section.log_in .btn .log_out{
    padding:5px 0;
    background:#ddd;
    border: 1px solid black;
    max-width:100px;
    margin:0 auto;
    border-radius: 10px;;
  }
  .right_section .btn .login:hover{
    background:#fff100
  }
  .right_section .btn .join:hover{
    background:#FFE400
  }
</style>
