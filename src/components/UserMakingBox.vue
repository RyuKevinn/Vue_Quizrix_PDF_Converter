<template>
    <div class="making_section">
        <div class="making_box row">
            <input type="text" placeholder="문제집 제목을 입력하세요!" class="set_problem" v-model="problem.problem_name">
            <!-- 문제 추가하기 버튼 눌렀을 때 반복 될 부분 -->
            <div class="making_problem" v-for="(k,index) in problem.list" :key="k">
                <div class="problem_control">
                <span>문항 {{index +1}}</span> <button type="button" class="problem_delete color_gray" @click="delete_problem(index,k)">문항 삭제</button>
                </div>
                <div class="problem_info">
                    <div class="problem_title">
                        <label for="title" class="title" :value="k">문제입력</label>
                        <input type="text" id="title" v-model="k.title">
                    </div>

                    <div class="problem_data" v-for="(i,index) in k.choice" :key="i">
                        <!-- 보기 추가히가 버튼 눌렀을 때 반복 될 부분 -->
                        <label for="">보기입력 {{index+1}}</label>
                        <input type="itext" name="choice" class="choice" v-model="i.txt">

                        <div class="check_box">
                            <input type="radio" class="answer" :name="k.val" v-model="k.answer" :value="index" unchecked>
                            <span class="answer_check">정답체크</span>
                            <img src="@/assets/img/x.png" alt="" @click="delete_choice(index,k)" :value="k">
                        </div>
                        <!-- 보기 추가 여기까지 -->
                    </div>
                    <div class="btn">
                        <button type="button" class="add_choice" @click="add_choice(k)" >보기추가</button>
                    </div>
                </div>
            </div>
            <!-- 문제 추가 여기까지 -->
            <button type="button" class="add_problem color_gray" @click="add_problem()">문항 추가하기</button>
            <router-link to="/loadview" class="complete gray_ani" @click="complete_problem">완 료</router-link>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 문제 만들기 첫 입력 폼
      problem: {
        problem_name: '',
        complete_time: '',
        nickname: this.$store.state.now_user.nickname,
        list: [
          {
            title: '',
            val: 1,
            answer: '',
            choice: [
              {
                txt: ''
              },
              {
                txt: ''
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    complete_problem () {
      // 문제집 생성 완료하기
      let titleCheck = 0
      let choiceCheck = 0
      let answerCheck = 0
      const list = this.problem.list
      for (let i = 0; i < list.length; i++) {
        const listChoice = this.problem.list[i].choice
        if (list[i].title === '') {
          titleCheck++
        }
        if (list[i].answer === '') {
          answerCheck++
        }
        for (let j = 0; j < listChoice.length; j++) {
          if (list[i].choice[j].txt === '') {
            choiceCheck++
          }
        }
      }
      if (this.problem.problem_name === '') {
        alert('문제집 제목을 입력해 주세요')
        this.$router.push({ path: '/making' })
      } else if (titleCheck > 0) {
        alert('문제를 입력해 주세요')
        this.$router.push({ path: '/making' })
      } else if (choiceCheck > 0) {
        alert('보기를 입력해 주세요')
        this.$router.push({ path: '/making' })
      } else if (answerCheck > 0) {
        alert('정답을 체크해 주세요')
        this.$router.push({ path: '/making' })
      } else if (this.problem.list.length === 0) {
        alert('문제를 하나 이상 만들어 주세요')
        this.$router.push({ path: '/making' })
      } else {
        // 날짜 생성
        const today = new Date()
        const nowyear = today.getFullYear()
        const nowmonth = today.getMonth() + 1
        const nowdate = today.getDate()
        this.problem.complete_time = `${nowyear}-${nowmonth}-${nowdate}`
        this.$store.commit('save_data', this.problem)
        this.$router.push({ path: '/loadview' })
      }
    },
    add_choice (k) {
      // 보기입력 추가하기
      k.choice.push({ txt: '' })
      console.log(k.answer)
    },
    delete_choice (index, k) {
      // 보기입력 삭제하기
      k.choice.splice(index, 1)
      k.answer = ''
    },
    add_problem () {
      // 문항 추가하기
      const num = this.problem.list.length + 1
      this.problem.list.push({ title: '', answer: '', val: num, choice: [{ txt: '' }, { txt: '' }] })
    },
    delete_problem (index, k) {
      // 문항 삭제하기
      this.problem.list.splice(index, 1)
    }
  }
}
</script>
<style>
    .making_section{
        border-top:1px solid black;
        padding: 50px 0px;
    }
    .making_section .making_box{
        display:flex;
        justify-content: center;;
        padding:0 30px;
        flex-direction: column;
        position:relative;
    }
    .making_section .making_box .set_problem{
        border:none;
        border-bottom: 4px solid gray;
        width:100%;
        height:50px;
        font-size:26px;
        margin-bottom:30px;
    }
    .making_section .making_box .making_problem{
        margin:20px 0;
    }
    .making_section .making_box .making_problem .problem_control{
        display:flex;
        justify-content: space-between;
    }
    .making_section .making_box .making_problem .problem_control span{
        font-size: 24px;
    }
    .making_section .making_box .making_problem .problem_delete{
        padding:7px 25px;
        border:1px solid gray;
        background:none;
        border-radius:5px;
        font-size:15px;
        letter-spacing:-2px;
        transition:all 0.3s;
    }
    .making_section .making_box .making_problem .problem_info{
        border-top: 2px solid #FFE400;
        border-bottom: 2px solid #FFE400;
        margin-top:5px;
        padding-top: 20px;
    }
    .making_section .making_box .problem_info input{
        height:45px;
        border:none;
        border: 1px solid lightgray;
        border-radius: 10px;;
        font-size:18px;
        padding-left:10px;
    }
    .making_section .making_box .making_problem .problem_info .poblem_title {
        display:flex;
        width:100%;
    }
    .making_section .making_box .making_problem .problem_info .problem_title .title{
        width:15%;
        text-align: center;;
        display:inline-block;
    }
    .making_section .making_box .making_problem .problem_info .problem_title input{
        width:85%;
    }
    .making_section .making_box .making_problem .problem_info .problem_data{
        display:flex;
        margin: 10px 0 0 50px;
        height:45px;
    }
    .making_section .making_box .making_problem .problem_info .problem_data label{
        line-height:45px;
        width:25%;
        font-size:15px;
        text-align: center;;
        display:inline-block
    }
    .making_section .making_box .making_problem .problem_info .problem_data .choice{
        width:62%;
        vertical-align: middle;
    }
    .making_section .making_box .making_problem .problem_info .problem_data .check_box{
        position:relative;
    }
    .making_section .making_box .making_problem .problem_info .problem_data .check_box .answer{
        border:1px solid blue;
        margin:0 15px;
        width:20px;
    }
    .making_section .making_box .making_problem .problem_info .problem_data .check_box span.answer_check {
        position:absolute;
        top:35px;
        left:5px;
        font-size:7px;
    }
    .making_section .making_box .making_problem .problem_info .problem_data .check_box img{
        display:inline;
        vertical-align:14px;
        background:none;
        cursor:pointer;
        width:16px
    }
    .making_section .making_box .making_problem .problem_info .btn{
        display:flex;
        justify-content: space-between;
        padding: 30px 0 10px;
    }
    .making_section .making_box .making_problem .problem_info .btn button{
        width: 120px;
        padding: 10px 0;
        font-size:16px;
        border-radius: 5px;
        background:#ddd;
        border:none;
        font-weight:bold;
        text-align: center;
        transition: all 0.3s;
    }
    .making_section .making_box .complete{
        position:absolute;
        bottom:25px;
        right:30px;
        border:1px solid blue;
        width: 120px;
        padding: 10px 0;
        font-size:16px;
        border-radius: 5px;
        background:#ddd;
        border:none;
        font-weight:bold;
        text-align: center;
        transition: all 0.3s;
    }
    .making_section .making_box .add_problem{
        width:270px;
        margin: 0 auto;
        padding: 15px 0;
        background:white;
        border: 1px solid #FFE400;
        font-size:16px;
        border-radius: 30px;
        transition:all 0.3s;
        color: gray;
    }
    .making_section .making_box .add_problem:hover{
        background:#FFE400
    }
    .making_section .making_box .complete:hover,
    .making_section .making_box .making_problem .problem_delete:hover,
    .making_section .making_box .making_problem .problem_info .btn a:hover,
    .making_section .making_box .making_problem .problem_info .btn button:hover
    {
        background:darkgray;
    }
</style>
