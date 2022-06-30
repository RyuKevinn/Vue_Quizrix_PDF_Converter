<template>
    <div class="join_section">
        <div class="join_box">
            <router-link to="/"><img class="logo_mini" src="@/assets/img/logo01.png" alt=""></router-link>
            <form  @submit.prevent="register_info">
                <h2>회원가입</h2>
                <table class="table">
                    <tbody>
                        <tr>
                            <th><label for="email_id">이메일</label></th>
                            <td>
                                <input type="text" v-model="new_user.email_id" name="email_id" id="email_id">
                            </td>
                        </tr>
                        <tr>
                            <th><label for="nickname">닉네임</label></th>
                            <td>
                                <input type="text" v-model="new_user.nickname" name="nickname" id="nickname">
                            </td>
                        </tr>
                        <tr>
                            <th><label for="password">비밀번호</label></th>
                            <td><input type="password" v-model="new_user.pwd" name="password" id="password"> <span  class="color_gray">*특수문자를 포함하여 8자리 이상으로 생성해주세요.</span></td>
                        </tr>
                        <tr>
                            <th><label for="passwordok">비밀번호 확인</label></th>
                            <td><input type="password" v-model="pwd_check" id="passwordok"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="agree_box">
                    <input type="checkbox" id="agree" name="event" v-model="new_user.agree" @click="agree_control">
                    <label for="agree" class="color_gray">퀴즈릭스의 이용약관 및 개인정보취급방침을 모두 읽어보았으며 이에 동의합니다.</label>
                </div>
                <div class="btn">
                    <button class="regist">가입하기</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      new_user: {
        email_id: '',
        nickname: '',
        pwd: '',
        agree: true
      },
      pwd_check: '',
      errors: []
    }
  },
  methods: {
    // 개인정보 취급방침 체크박스 컨트롤
    agreecontrol () {
      this.new_user.agree = !this.new_user.agree
    },
    // 회원가입 유효성 검사 및 통과 시 store 에 해당 값 저장
    register_info () {
      const pwdRule = /[~!@#$%^&*()_+|<>?:{}`]/
      if (!this.new_user.email_id) {
        alert('이메일을 입력해 주세요')
      } else if (!this.new_user.email_id.includes('@')) {
        alert('올바른 이메일 형식이 아닙니다')
      } else if (!this.new_user.nickname) {
        alert('닉네임을 입력해 주세요')
      } else if (!this.new_user.pwd) {
        alert('비밀번호를 입력해 주세요')
      } else if (!pwdRule.test(this.new_user.pwd) || this.new_user.pwd.length < 8) {
        alert('비밀번호는 특수문자를 포함한 8자리 이상 입력해 주세요')
      } else if (!this.pwd_check) {
        alert('비밀번호 확인란을 입력해 주세요')
      } else if (this.new_user.agree !== true) {
        alert('개인정보 취급방침을 동의해 주세요')
      } else if (this.new_user.pwd !== this.pwd_check) {
        alert('비밀번호가 일치하지 않습니다')
      } else if (this.$store.state.user[this.new_user.email_id]) {
        alert('이미 존재하는 아이디 입니다.')
      } else {
        alert('회원가입이 정상적으로 완료되었습니다.')
        this.$store.commit('regist_user', this.new_user)
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>
<style scoped>
.join_section{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:50px 10vw;
}
.join_box{
    max-width: 500px;
    position:relative;
}
.join_box .logo_mini{
    width: 20vw;
    max-width:160px;
    position:absolute;
    left: 50vw;
    top:-8%;
}
.join_box h2{
    padding-bottom:5px;
    font-size:28px;
    position:relative;
    font-weight: 100;
}
.join_box h2::after{
    content: '';
    position:absolute;
    top:105%;
    left:0;
    height:2px;
    width:100%;
    background:#FFE400
}
.join_box .table {
    padding: 20px 0 ;
}
.join_box .table th{
    text-align:left;
    width: 150px;
}
.join_box .table td span {
    font-size:12px;
    display:inline-block;
    margin-bottom:3px;
}
.join_box .table input{
     display:block;
    height:45px;
    width:100%;
    border: 1px solid lightgray;
    margin:7px 0;
    padding:0 10px;
    border-radius: 10px;;
    font-size:18px;
}
.join_box .agree_box {
    margin-bottom: 20px;
    font-size:14px;
    letter-spacing: -2px;
}
.join_box .agree_box label {
    margin-left: 10px;
}
.join_box .btn button{
    background:#FFE400;
    border:none;
    width: 100%;
    padding: 15px 0;
    font-size: 16px;
}
.join_box .btn .regist {
    transition: all 0.3s
}
.join_box .btn .regist:hover {
    background:#fff100;
}
</style>
