<template>
    <UserHeader ref="header_control"/>
    <div class="list_section row">
      <select v-model="list_type" @change="select_option" class="select_option">
        <option value="complete_time" selected>제작일순</option>
        <option value="problem_name">문제집 이름순</option>
        <option value="nickname">제작자순</option>
      </select>
        <table class="save_list">
          <colgroup>
          <col class="num">
          <col class="name">
          <col class="nickname">
          <col class="time">
          </colgroup>
          <thead>
            <th>번호</th>
            <th>문제집 이름</th>
            <th>제작자</th>
            <th>제작일</th>
          </thead>
          <tbody>
            <tr v-for="(i,index) in problem_data" :key="i" @click="loading_problem(i)">
              <td>{{index+1}}</td>
              <td>{{i.problem_name}}</td>
              <td>{{i.nickname}}</td>
              <td>{{i.complete_time}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import UserHeader from '@/components/UserHeader.vue'

export default {
  components: {
    UserHeader
  },
  data () {
    return {
      list_type: 'complete_time'
    }
  },
  mounted () {
    this.$refs.header_control.makeControl()
  },
  computed: {
    problem_data () {
      return this.$store.state.save_data
    }
  },
  methods: {
    loading_problem (i) {
      this.$store.commit('loading_data', i)
      this.$router.push({ path: '/loadview' })
    },
    select_option () {
      this.$store.commit('select_option', this.list_type)
    }
  }
}
</script>
<style >
  .list_section{
    border-top: 1px solid black;
    padding: 50px 30px;
  }
  .list_section .select_option {
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    background:#ddd
  }
  .list_section .save_list {
    width:100%;
    text-align: center;
    /* padding: 0 30px; */
  }
  .list_section .save_list .name {
    width: 60%;
    background: pink
  }
  .list_section .save_list .time {
    width:15%;
  }
  .list_section .save_list th {
    background : #ffe400;
    border-bottom: 1px solid black;
    border-radius: 10px;
    height:50px;
  }
  .list_section .save_list td {
    border-radius:10px;
    height:30px;
    font-size:14px;
  }
   .list_section .save_list tr{
     cursor:pointer;
   }
  .list_section .save_list tr:nth-child(odd){
    background:rgb(184, 182, 182);
    transition:all 0.3s
  }
  .list_section .save_list tr:nth-child(even){
    background:#ddd;
    transition: all 0.3s
  }
    .list_section .save_list tr:hover{
      background:#ffe400;
    }
</style>
