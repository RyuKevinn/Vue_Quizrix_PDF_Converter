<template>
<UserHeader ref="header_control"/>
<button class="pdf_download" @click="exportToPDF">PDF download</button>
  <div class="result_section" ref="pdfarea">
    <div class="result_section_header">
       <!-- <h1>Score</h1> -->
       <p class="problem_name">{{data.problem_name}}</p>
       <p class="ment">{{nickname}} 님의 점수는?</p>
    </div>
    <div class="result_section_body">
      <div class="title">
        <span>{{Math.ceil(100/data.problem*data.correct)}}</span> / <small>점</small>
      </div>
      <div class="score_data">
        <p><span>정답 문항수</span>{{data.correct}} / {{data.problem}}</p>
        <p><span>정답률</span> {{Math.ceil(data.correct/data.problem*100)+'%'}} </p>
      </div>
    </div>
    <div class="result_section_footer">
      <table>
        <colgroup>
        <col class="num">
        <col class="answer">
        <col class="result">
        </colgroup>
        <thead>
          <th>문항</th>
          <th>선택한 답</th>
          <th>정답 여부</th>
        </thead>
        <tbody>
          <tr v-for="(i,index) in data.select_result" :key="i">
            <td>{{parseInt(index)+1}}</td>
            <td>{{i[0]}}</td>
            <td v-bind:class="{'correct':i[1]=== 'correct', 'wrong' : i[1]==='wrong'}">{{i[1] === 'correct' ? '정답' : '오답'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import html2pdf from 'html2pdf.js'
import UserHeader from '@/components/UserHeader.vue'

export default {
  data () {
    return {
      data: this.$store.state.result,
      nickname: this.$store.state.now_user.nickname
    }
  },
  components: {
    UserHeader
  },
  methods: {
    exportToPDF () {
      html2pdf(this.$refs.pdfarea, {
        margin: [30, 0, 30, 0],
        filename: 'document.pdf',
        image: { type: 'jpg', quality: 0.95 },
        // allowTaint 옵션추가
        html2canvas: {
          useCORS: true,
          scrollY: 0,
          scale: 1,
          dpi: 300,
          letterRendering: true,
          allowTaint: false
          // useCORS를 true로 설정 시 반드시 allowTaint를 false처리 해주어야함
        },
        pagebreak: { mode: 'avoid-all', before: '.first' },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4', compressPDF: true }
      })
    }
  },
  mounted () {
    this.$refs.header_control.makeControl()
    this.$refs.header_control.usermakeControl()
  }
}
</script>
<style scoped>
.pdf_download {
  padding: 5px 10px;
  border: 1px solid black;
  margin : 10px 0 0 120px;
  background:none;
  transition:all 0.3s
}
.pdf_download:hover {
  background:#ddd
}
  .result_section {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0 50px;;
  }
  .result_section .result_section_header {
    border-top: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
    border-top-left-radius: 10px;;
    border-top-right-radius: 10px;;
    padding: 20px 0 10px;
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
  }
  .result_section .result_section_header .problem_name {
    font-size: 25px;
    padding: 0 10px;
    word-break:keep-all;
  }
  .result_section .result_section_header .ment {
    margin-top: 30px;
  }
  .result_section .result_section_body {
    display:flex;
    /* padding: 30px 0; */
    border: 3px solid black;
    justify-content: center;
    align-items: center;
    /* background:lightgray; */
    /* overflow:hidden; */
    border-radius: 10px;
  }
  .result_section .result_section_body .title {
    width:60%;
    /* margin-top: 10px; */
  }
  .result_section .result_section_body .title span {
    font-size: 60px;
  }
   .result_section .result_section_body .score_data {
     background:#222739;
     color:white;
     width:40%;
     height:150px;
     display:flex;
     flex-direction:column;
     justify-content: space-between;
     padding: 40px 0;
   }
  .result_section .result_section_body .score_data p span {
    display:inline-block;
    width: 90px;
    margin-right: 30px;
  }
  .result_section .result_section_footer {
    margin-top: 40px;
    padding: 0px 30px;
    border-left: 3px solid black;
    border-right:3px solid black;
    border-bottom:3px solid black;
    border-radius: 10px;
  }
  .result_section .result_section_footer table{
    /* border-left: 1px solid black; */
    border-collapse: collapse;
    width: 100%;
  }
  .result_section .result_section_footer table .num {
    width: 30%;
  }
  .result_section .result_section_footer table .answer {
    width: 40%;
  }
  .result_section .result_section_footer table .result {
    width: 30%;
  }
  .result_section .result_section_footer table th {
    border: 1px solid black;
    padding : 3px 0;
    font-size: 16px;
  }
  .result_section .result_section_footer table td{
    border-top: 1px solid lightgray;
    padding: 5px 0;
  }
  .result_section .result_section_footer table tr:last-child td{
    padding-bottom: 20px;
  }
  .result_section .result_section_footer table .correct{
    color:#0091ff;
}
.result_section .result_section_footer table .wrong{
  color:red;
}
</style>
