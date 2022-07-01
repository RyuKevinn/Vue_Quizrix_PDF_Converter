<template>
      <img src="@/assets/img/logo01.png" alt="" class="logo">
    <router-link to="/" class="log_out">로그아웃</router-link>
    <div class="header row">
        <h2>{{user_nickname}} 님!! 샘플 문제를 만들수 있습니다.</h2>
        <div class="btn">
            <router-link to="/making" v-show="make" >문제 만들기</router-link>
            <router-link to="/savelist" v-show="usermake" @click="select_option('complete_time')">문제집 목록</router-link>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      make: false,
      usermake: false
    }
  },
  methods: {
    // /making 이 아닌 경우 해당 변수를 true 값으로 컨트롤
    makeControl () {
      this.make = !this.make
    },
    // /savelist 가 아닌 경우 해당 변수를 true 값으로 컨트롤
    usermakeControl () {
      this.usermake = !this.usermake
    },
    // 문제집 목록으로 이동 시 최초 랜더링에 저장된 목록들을 완성된 날 기준으로 정렬
    select_option (data) {
      this.$store.commit('select_option', data)
    }
  },
  computed: {
    // 로그인과 동시에 store 에 저장되는 현재 이용자 now_user 의 닉네임값 불러오기
    user_nickname () {
      return this.$store.state.now_user.nickname
    }
  },
  created () {
    // 서버와 연결이 되어있지 않기 때문에, 새로고침 시 store 의 now_user 값이 초기화 됨
    // 또한 새로고침 후 문제를 만들면 정렬 오류가 뜨기 때문에 알람과 동시에 메인화면 이동
    if (!this.$store.state.now_user.nickname) {
      alert('로그인 후 이용해 주세요')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
    .header{
        padding:10px 30px;
        display:flex;
        justify-content: space-between;
    }
    .header h2{
        line-height:35px;
        letter-spacing: 0px;;
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
        transition:all 0.3s;
    }
    .header > .btn a:hover{
      background:darkgray;
    }
</style>
