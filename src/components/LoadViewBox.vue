<template>
    <div class="load_section" ref="pdfarea">
        <div class="problem_article row">
            <div class="problem_title">
                <span>문제집 제목</span>
                <p>{{problem.problem_name}}</p>
            </div>
            <div class="problem_area"  v-for="(k,kIndex) in problem.list" :key="k">
                <!-- <h2><span>{{kIndex+1}}</span> {{k.title}} </h2> -->
                <div class="title_box">
                    <span>{{kIndex+1}}</span>
                    <p class="title">{{k.title}}</p>
                </div>
                <div class="problem_choice">
                    <ul class="choice_list" >
                        <li v-for="(i,iIndex) in k.choice" :key="i" @click="select_num(kIndex ,iIndex)" :class="{'selected': select[kIndex] == iIndex, 'answer' : k.answer == iIndex && sending}">
                            <span>{{ select[kIndex] == iIndex ? '선택' : k.answer == iIndex && sending ? '정답': iIndex+1 }}</span>
                         <p>{{i.txt}}</p></li>
                    </ul>
                </div>
                <div class="ment_box">
                <span class="problem_result wrong" v-show="result[kIndex] === 'wrong'" ><i>틀렸습니다.</i></span>
                <span class="problem_result correct" v-show="result[kIndex] === 'correct'"><i>맞았습니다.</i></span>
                </div>
            </div>
            <div class="send_result">
            <button class="send_back" type="button" v-show="!sending" @click="send_data(problem)">제출</button>
            <button class="send_back" type="button" v-show="sending" @click="back_list">목록으로</button>
            <button v-show="sending" @click="goTo_result(select,result,correct_count,problem_count,problem.problem_name)">성적표 보기</button>
            <span v-show="sending" class="score" >정답률 : {{correct_count}}/{{problem_count}} {{'('+Math.ceil(correct_count/problem_count*100)+'%)'}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checkAnswer: [],
      problem: this.$store.state.load_data,
      sending: false,
      select: [],
      result: [],
      problem_count: 0,
      correct_count: 0
    }
  },
  methods: {
    // 문제 제출하기 (정답 체크)
    send_data (data) {
      this.problem_count = 0
      this.correct_count = 0
      if (this.select.length !== data.list.length) {
        alert('정답을 선택해 주세요')
      } else {
        for (let i = 0; i < data.list.length; i++) {
          const num = this.select[i]
          const checking = data.list[i].answer
          if (checking === num) {
            this.result[i] = 'correct'
            this.sending = true
            this.correct_count++
          } else {
            this.result[i] = 'wrong'
            this.sending = true
          }
        }
        this.problem_count = this.problem.list.length
      }
    },
    // 문제 보기 클릭 시 해당 데이터 저장하기
    select_num (kIndex, iIndex) {
      this.select[kIndex] = iIndex
    },
    // 문제 풀고 제출 후 목록으로 돌아가기 버튼
    back_list () {
      this.$router.push({ path: '/savelist' })
    },
    goTo_result (s, r, c, p, n) {
      const data = {
        problem_name: n,
        select_result: {},
        correct: c,
        problem: p
      }
      for (let i = 0; i < p; i++) {
        data.select_result[i] = [s[i], r[i]]
      }
      console.log(data.select_result)
      this.$store.commit('save_result', data)
      this.$router.push({ path: '/result' })
    }
  }
}
</script>
<style scoped>
    .load_section{
        border-top:1px solid black;
        padding: 40px 30px;
    }
    .load_section .problem_article .problem_title{
        padding:0 30px;
    }
    .load_section .problem_article .problem_title span {
        font-weight: bold;
        font-size:13px;
    }
    .load_section .problem_article .problem_title p{
        padding: 10px 0 15px;
        font-weight: 100;
        font-size:26px;
        border-bottom: 2px solid #FFE400;
    }
    .load_section .problem_article .problem_area{
        margin: 30px 50px;
        border-bottom: 1px solid black;
        position:relative;
    }
     .load_section .problem_article .problem_area .title_box {
         display:flex;
         align-items: flex-start;
         font-size:18px;
     }
       .load_section .problem_article .problem_area .title_box span {
        display:inline-block;
        width:80px;
        padding: 5px 0;
        background:darkgray;
        text-align:center;
        border-radius: 5px;;
        color:white;
        margin-right: 20px;
     }
      .load_section .problem_article .problem_area .title_box .title{
          padding: 3px 0;
          width:80%;
          line-height: 25px;
      }
    .load_section .problem_article .problem_area .problem_choice {
        margin: 20px 10px;
        display:flex;
        justify-content: flex-start;
        /* align-items: flex-start; */
        align-items: center;
        flex-direction: column;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list{
        width:100%;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li{
        margin: 5px 0;
        transition:all 0.3s;
        padding:5px 10px;
        font-size: 16px;
        color: gray;
        cursor:pointer;
        line-height: 23px;
        display:flex;
        align-items: center;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li:hover{
        background: lightgray;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li span{
        display:inline-block;
        color:black;
        width:10%;
        text-align: center;;
        border-radius: 3px;
        margin:0 20px 0 10px;
        padding:5px 0;
        background:#fde881;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li p {
        width: 90%;
        line-height: 30px;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list .selected {
        background:rgb(244, 227, 129);
        color:black;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list .selected:hover {
        background:#f4e999;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list .selected span{
        text-align:center;
        background:white;
        color:black;
        border: none;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li.choose{
        background:#fde881;
        font-weight: bold;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li.answer{
        background:#ddd;
        font-weight: bold;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li.answer span{
        background:white;
        color:#0091ff
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li.choose button span,
    .load_section .problem_article .problem_area .problem_choice .choice_list li.answer button span{
        background:white;
    }
    .load_section .problem_article .problem_area .problem_choice .choice_list li.answer button span{
        color:#0091ff;
    }
    .load_section .problem_article .problem_area .ment_box{
        width:100%;
        display:flex;
        justify-content: flex-end;
        height:35px;
    }
    .load_section .problem_article button{
         display:block;
         border: none;
        background:#ddd;
        border-radius:5px;
        padding:10px 25px;
        font-size:16px;
        font-weight:bold;
        margin-left:10px;
        letter-spacing: -3px;
        transition:all 0.3s;
    }
    .load_section .problem_article button:hover{
        background:darkgray;
    }
    .load_section .problem_article .send_result {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .load_section .problem_article .send_result .score {
        background:#fde881;
        display:block;
        padding: 10px 25px;
        border-radius: 5px;
        color:black;
        font-size:14px;
    }
    .load_section .problem_article .problem_area .problem_result{
        line-height:35px;
    }
    .load_section .problem_article .problem_area .problem_result.wrong{
        color:red;
    }
    .load_section .problem_article .problem_area .problem_result.correct{
        color:#0091ff;
    }
</style>
