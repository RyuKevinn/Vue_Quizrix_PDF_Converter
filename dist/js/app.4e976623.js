(function(){"use strict";var t={2568:function(t,e,l){var o=l(9242),a=l(3396);const n={class:"main"},s={class:"article"};function i(t,e,l,o,i,r){const c=(0,a.up)("router-view"),u=(0,a.up)("FooterBox");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a.Wm)(c)]),(0,a.Wm)(u)])}var r=l.p+"img/codnutlogo02.4e2f9793.png";const c={class:"footer_section"},u=(0,a._)("div",{class:"footer_section_logo"},[(0,a._)("img",{src:r,alt:""})],-1),d=(0,a._)("div",{class:"text"},[(0,a._)("p",null,[(0,a._)("span",null,"(주)코드넛"),(0,a.Uk)(" | "),(0,a._)("span",null,"www.quizrix.com"),(0,a.Uk)(" | "),(0,a._)("span",null,"이메일 : gorae@codnut.com"),(0,a.Uk)(" | "),(0,a._)("span",null,"전화 010 2854 9601")]),(0,a._)("p",null," 본사 : 경기도 의정부시 신흥로234 CRC빌딩 11층 / 서울사업소 : 서울시 강남구 논현동 63-10 201호 ")],-1),m=[u,d];function _(t,e){return(0,a.wg)(),(0,a.iD)("div",c,m)}var p=l(89);const h={},x=(0,p.Z)(h,[["render",_]]);var w=x,v={components:{FooterBox:w},data(){return{}}};const g=(0,p.Z)(v,[["render",i]]);var b=g,k=l(678);const f={class:"main_section"};function y(t,e,l,o,n,s){const i=(0,a.up)("HomeLeftBox"),r=(0,a.up)("HomeRightBox");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(i),(0,a.Wm)(r)])}var z=l.p+"img/air.b6621d84.png";const j=t=>((0,a.dD)("data-v-133c300c"),t=t(),(0,a.Cn)(),t),q={class:"left_section"},$={class:"left_top"},C=j((()=>(0,a._)("span",null,"세상의 모든 문제를 정복하라",-1))),U=["src"],D=(0,a.uE)('<div class="left_middle color_gray" data-v-133c300c><p data-v-133c300c>퀴즈릭스는 문제를 만들고 공유하는<br data-v-133c300c><span data-v-133c300c>클라우드 문제집 출판플랫폼</span>입니다.</p></div><div class="left_bottom" data-v-133c300c><img src="'+z+'" alt="" data-v-133c300c><div class="text_box" data-v-133c300c><h3 data-v-133c300c>서비스 오픈에 앞서 회원가입을 해주세요.</h3><span class="color_gray" data-v-133c300c>퀴즈릭스 개발소식과 함께 추첨을 통해</span><br data-v-133c300c><span class="color_gray" data-v-133c300c>에어팟을 선물로 드립니다.</span></div></div>',2);function H(t,e,l,o,n,s){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",$,[C,(0,a._)("img",{class:"logo_main",src:n.img1,alt:""},null,8,U)]),D])}var V={data(){return{img1:l(624)}}};const L=(0,p.Z)(V,[["render",H],["__scopeId","data-v-133c300c"]]);var W=L,O=l.p+"img/ev.660be4c4.png";const F=t=>((0,a.dD)("data-v-219afbcb"),t=t(),(0,a.Cn)(),t),Z={class:"right_section"},B=F((()=>(0,a._)("h1",null,"MEMBER",-1))),M=F((()=>(0,a._)("span",{class:"color_gray"},"이메일과 입력만으로 1초만에 회원가입",-1))),Y={class:"login_area"},I=F((()=>(0,a._)("label",{for:"email_id"},"EMAIL",-1))),K=F((()=>(0,a._)("label",{for:"pwd"},"PASSWORD",-1))),E={for:"email_agree",class:"email_agree color_gray"},R=(0,a.Uk)("이메일을 기억합니다"),A={class:"btn"},P=(0,a.Uk)("회원가입 "),S=F((()=>(0,a._)("img",{src:O,alt:""},null,-1)));function T(t,e,l,n,s,i){const r=(0,a.up)("router-link");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",Z,[B,M,(0,a._)("div",Y,[I,(0,a.wy)((0,a._)("input",{type:"text",id:"email_id","onUpdate:modelValue":e[0]||(e[0]=t=>s.email_id=t)},null,512),[[o.nr,s.email_id]]),K,(0,a.wy)((0,a._)("input",{type:"password",id:"pwd","onUpdate:modelValue":e[1]||(e[1]=t=>s.pwd=t)},null,512),[[o.nr,s.pwd]])]),(0,a._)("label",E,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"check_box",id:"email_agree","onUpdate:modelValue":e[2]||(e[2]=t=>s.remember_id=t)},null,512),[[o.e8,s.remember_id]]),R]),(0,a._)("div",A,[(0,a._)("button",{class:"login",onClick:e[3]||(e[3]=t=>i.check_user(s.email_id))},"로그인"),(0,a.Wm)(r,{to:"/join",class:"join"},{default:(0,a.w5)((()=>[P,S])),_:1})])],512)),[[o.F8,!s.log_in]])}var G={data(){return{log_in:!1,email_id:"",pwd:"",login_user:"",remember_id:!1}},methods:{check_user(t){const e=this.$store.state.user[t];this.email_id?this.pwd?void 0===e?(alert("아이디가 존재하지 않습니다"),this.$router.push({path:"/"})):this.pwd!==e.pwd?(alert("비밀번호가 맞지 않습니다"),this.$router.push({path:"/"})):(this.$router.push({path:"/"}),this.$store.commit("now_user",e),this.login_user=this.$store.state.now_user.nickname,this.$router.push({path:"/making"})):(alert("비밀번호를 입력해 주세요"),this.$router.push({path:"/"})):(alert("이메일을 입력해 주세요"),this.$router.push({path:"/"}))}}};const J=(0,p.Z)(G,[["render",T],["__scopeId","data-v-219afbcb"]]);var N=J,Q={components:{HomeLeftBox:W,HomeRightBox:N},data(){return{topLogo:!1}},mounted(){this.$emit("topLogoOK",this.topLogo)}};const X=(0,p.Z)(Q,[["render",y]]);var tt=X,et=l(624);const lt=t=>((0,a.dD)("data-v-ece3d0a2"),t=t(),(0,a.Cn)(),t),ot={class:"join_section"},at={class:"join_box"},nt=lt((()=>(0,a._)("img",{class:"logo_mini",src:et,alt:""},null,-1))),st=lt((()=>(0,a._)("h2",null,"회원가입",-1))),it={class:"table"},rt=lt((()=>(0,a._)("th",null,[(0,a._)("label",{for:"email_id"},"이메일")],-1))),ct=lt((()=>(0,a._)("th",null,[(0,a._)("label",{for:"nickname"},"닉네임")],-1))),ut=lt((()=>(0,a._)("th",null,[(0,a._)("label",{for:"password"},"비밀번호")],-1))),dt=(0,a.Uk)(),mt=lt((()=>(0,a._)("span",{class:"color_gray"},"*특수문자를 포함하여 8자리 이상으로 생성해주세요.",-1))),_t=lt((()=>(0,a._)("th",null,[(0,a._)("label",{for:"passwordok"},"비밀번호 확인")],-1))),pt={class:"agree_box"},ht=lt((()=>(0,a._)("label",{for:"agree",class:"color_gray"},"퀴즈릭스의 이용약관 및 개인정보취급방침을 모두 읽어보았으며 이에 동의합니다.",-1))),xt=lt((()=>(0,a._)("div",{class:"btn"},[(0,a._)("button",{class:"regist"},"가입하기")],-1)));function wt(t,e,l,n,s,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",ot,[(0,a._)("div",at,[(0,a.Wm)(r,{to:"/"},{default:(0,a.w5)((()=>[nt])),_:1}),(0,a._)("form",{onSubmit:e[6]||(e[6]=(0,o.iM)(((...t)=>i.register_info&&i.register_info(...t)),["prevent"]))},[st,(0,a._)("table",it,[(0,a._)("tbody",null,[(0,a._)("tr",null,[rt,(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.new_user.email_id=t),name:"email_id",id:"email_id"},null,512),[[o.nr,s.new_user.email_id]])])]),(0,a._)("tr",null,[ct,(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.new_user.nickname=t),name:"nickname",id:"nickname"},null,512),[[o.nr,s.new_user.nickname]])])]),(0,a._)("tr",null,[ut,(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>s.new_user.pwd=t),name:"password",id:"password"},null,512),[[o.nr,s.new_user.pwd]]),dt,mt])]),(0,a._)("tr",null,[_t,(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=t=>s.pwd_check=t),id:"passwordok"},null,512),[[o.nr,s.pwd_check]])])])])]),(0,a._)("div",pt,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"agree",name:"event","onUpdate:modelValue":e[4]||(e[4]=t=>s.new_user.agree=t),onClick:e[5]||(e[5]=(...e)=>t.agree_control&&t.agree_control(...e))},null,512),[[o.e8,s.new_user.agree]]),ht]),xt],32)])])}l(6699);var vt={data(){return{new_user:{email_id:"",nickname:"",pwd:"",agree:!0},pwd_check:"",errors:[]}},methods:{agreecontrol(){this.new_user.agree=!this.new_user.agree},register_info(){const t=/[~!@#$%^&*()_+|<>?:{}`]/;this.new_user.email_id?this.new_user.email_id.includes("@")?this.new_user.nickname?this.new_user.pwd?!t.test(this.new_user.pwd)||this.new_user.pwd.length<8?alert("비밀번호는 특수문자를 포함한 8자리 이상 입력해 주세요"):this.pwd_check?!0!==this.new_user.agree?alert("개인정보 취급방침을 동의해 주세요"):this.new_user.pwd!==this.pwd_check?alert("비밀번호가 일치하지 않습니다"):this.$store.state.user[this.new_user.email_id]?alert("이미 존재하는 아이디 입니다."):(alert("회원가입이 정상적으로 완료되었습니다."),this.$store.commit("regist_user",this.new_user),this.$router.push({path:"/"})):alert("비밀번호 확인란을 입력해 주세요"):alert("비밀번호를 입력해 주세요"):alert("닉네임을 입력해 주세요"):alert("올바른 이메일 형식이 아닙니다"):alert("이메일을 입력해 주세요")}}};const gt=(0,p.Z)(vt,[["render",wt],["__scopeId","data-v-ece3d0a2"]]);var bt=gt;function kt(t,e,l,o,n,s){const i=(0,a.up)("UserHeader"),r=(0,a.up)("UserMakingBox");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{ref:"header_control"},null,512),(0,a.Wm)(r)],64)}var ft=l(7139),yt=l.p+"img/x.3d607813.png";const zt={class:"making_section"},jt={class:"making_box row"},qt={class:"problem_control"},$t=(0,a.Uk)(),Ct=["onClick"],Ut={class:"problem_info"},Dt={class:"problem_title"},Ht=["value"],Vt=["onUpdate:modelValue"],Lt={for:""},Wt=["onUpdate:modelValue"],Ot={class:"check_box"},Ft=["name","onUpdate:modelValue","value"],Zt=(0,a._)("span",{class:"answer_check"},"정답체크",-1),Bt=["onClick","value"],Mt={class:"btn"},Yt=["onClick"],It=(0,a.Uk)("완 료");function Kt(t,e,l,n,s,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",zt,[(0,a._)("div",jt,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"문제집 제목을 입력하세요!",class:"set_problem","onUpdate:modelValue":e[0]||(e[0]=t=>s.problem.problem_name=t)},null,512),[[o.nr,s.problem.problem_name]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.problem.list,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"making_problem",key:t},[(0,a._)("div",qt,[(0,a._)("span",null,"문항 "+(0,ft.zw)(e+1),1),$t,(0,a._)("button",{type:"button",class:"problem_delete color_gray",onClick:l=>i.delete_problem(e,t)},"문항 삭제",8,Ct)]),(0,a._)("div",Ut,[(0,a._)("div",Dt,[(0,a._)("label",{for:"title",class:"title",value:t},"문제입력",8,Ht),(0,a.wy)((0,a._)("input",{type:"text",id:"title","onUpdate:modelValue":e=>t.title=e},null,8,Vt),[[o.nr,t.title]])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.choice,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"problem_data",key:e},[(0,a._)("label",Lt,"보기입력 "+(0,ft.zw)(l+1),1),(0,a.wy)((0,a._)("input",{type:"itext",name:"choice",class:"choice","onUpdate:modelValue":t=>e.txt=t},null,8,Wt),[[o.nr,e.txt]]),(0,a._)("div",Ot,[(0,a.wy)((0,a._)("input",{type:"radio",class:"answer",name:t.val,"onUpdate:modelValue":e=>t.answer=e,value:l,unchecked:""},null,8,Ft),[[o.G2,t.answer]]),Zt,(0,a._)("img",{src:yt,alt:"",onClick:e=>i.delete_choice(l,t),value:t},null,8,Bt)])])))),128)),(0,a._)("div",Mt,[(0,a._)("button",{type:"button",class:"add_choice",onClick:e=>i.add_choice(t)},"보기추가",8,Yt)])])])))),128)),(0,a._)("button",{type:"button",class:"add_problem color_gray",onClick:e[1]||(e[1]=t=>i.add_problem())},"문항 추가하기"),(0,a.Wm)(r,{to:"/loadview",class:"complete gray_ani",onClick:i.complete_problem},{default:(0,a.w5)((()=>[It])),_:1},8,["onClick"])])])}var Et={data(){return{problem:{problem_name:"",complete_time:"",nickname:this.$store.state.now_user.nickname,list:[{title:"",val:1,answer:"",choice:[{txt:""},{txt:""}]}]}}},methods:{complete_problem(){let t=0,e=0,l=0;const o=this.problem.list;for(let a=0;a<o.length;a++){const n=this.problem.list[a].choice;""===o[a].title&&t++,""===o[a].answer&&l++;for(let t=0;t<n.length;t++)""===o[a].choice[t].txt&&e++}if(""===this.problem.problem_name)alert("문제집 제목을 입력해 주세요"),this.$router.push({path:"/making"});else if(t>0)alert("문제를 입력해 주세요"),this.$router.push({path:"/making"});else if(e>0)alert("보기를 입력해 주세요"),this.$router.push({path:"/making"});else if(l>0)alert("정답을 체크해 주세요"),this.$router.push({path:"/making"});else if(0===this.problem.list.length)alert("문제를 하나 이상 만들어 주세요"),this.$router.push({path:"/making"});else{const t=new Date,e=t.getFullYear(),l=t.getMonth(),o=t.getDate();this.problem.complete_time=`${e}-${l}-${o}`,this.$store.commit("save_data",this.problem),this.$router.push({path:"/loadview"})}},add_choice(t){t.choice.push({txt:""}),console.log(t.answer)},delete_choice(t,e){e.choice.splice(t,1),e.answer=""},add_problem(){const t=this.problem.list.length+1;this.problem.list.push({title:"",answer:"",val:t,choice:[{txt:""},{txt:""}]})},delete_problem(t,e){this.problem.list.splice(t,1)}}};const Rt=(0,p.Z)(Et,[["render",Kt]]);var At=Rt;const Pt=(0,a._)("img",{src:et,alt:"",class:"logo"},null,-1),St=(0,a.Uk)("로그아웃"),Tt={class:"header row"},Gt={class:"btn"},Jt=(0,a.Uk)("문제 만들기"),Nt=(0,a.Uk)("나의 문제집");function Qt(t,e,l,n,s,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Pt,(0,a.Wm)(r,{to:"/",class:"log_out"},{default:(0,a.w5)((()=>[St])),_:1}),(0,a._)("div",Tt,[(0,a._)("h2",null,(0,ft.zw)(i.user_nickname)+" 님!! 샘플 문제를 만들수 있습니다.",1),(0,a._)("div",Gt,[(0,a.wy)((0,a.Wm)(r,{to:"/making"},{default:(0,a.w5)((()=>[Jt])),_:1},512),[[o.F8,s.make]]),(0,a.wy)((0,a.Wm)(r,{to:"/savelist",onClick:e[0]||(e[0]=t=>i.select_option("complete_time"))},{default:(0,a.w5)((()=>[Nt])),_:1},512),[[o.F8,s.usermake]])])])],64)}var Xt={data(){return{make:!1,usermake:!1,topLogo:!1,ment:!1}},methods:{makeControl(){this.make=!this.make},usermakeControl(){this.usermake=!this.usermake},topLogoControl(){this.topLogo=!this.topLogo},mentControl(){this.ment=!this.ment},select_option(t){this.$store.commit("select_option",t)}},computed:{user_nickname(){return this.$store.state.now_user.nickname}},created(){this.$store.state.now_user.nickname||(alert("로그인 후 이용해 주세요"),this.$router.push({path:"/"}))}};const te=(0,p.Z)(Xt,[["render",Qt]]);var ee=te,le={components:{UserMakingBox:At,UserHeader:ee},data(){return{make:!1,topLogo:!0}},mounted(){this.$refs.header_control.usermakeControl(),this.$refs.header_control.topLogoControl(),this.$refs.header_control.mentControl()}};const oe=(0,p.Z)(le,[["render",kt],["__scopeId","data-v-72e6cd19"]]);var ae=oe;const ne={class:"list_section row"},se=(0,a._)("option",{value:"complete_time",selected:""},"제작일순",-1),ie=(0,a._)("option",{value:"problem_name"},"문제집 이름순",-1),re=(0,a._)("option",{value:"nickname"},"제작자순",-1),ce=[se,ie,re],ue={class:"save_list"},de=(0,a._)("colgroup",null,[(0,a._)("col",{class:"num"}),(0,a._)("col",{class:"name"}),(0,a._)("col",{class:"nickname"}),(0,a._)("col",{class:"time"})],-1),me=(0,a._)("thead",null,[(0,a._)("th",null,"번호"),(0,a._)("th",null,"문제집 이름"),(0,a._)("th",null,"제작자"),(0,a._)("th",null,"제작일")],-1),_e=["onClick"];function pe(t,e,l,n,s,i){const r=(0,a.up)("UserHeader");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{ref:"header_control"},null,512),(0,a._)("div",ne,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.list_type=t),onChange:e[1]||(e[1]=(...t)=>i.select_option&&i.select_option(...t)),class:"select_option"},ce,544),[[o.bM,s.list_type]]),(0,a._)("table",ue,[de,me,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.problem_data,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t,onClick:e=>i.loading_problem(t)},[(0,a._)("td",null,(0,ft.zw)(e+1),1),(0,a._)("td",null,(0,ft.zw)(t.problem_name),1),(0,a._)("td",null,(0,ft.zw)(t.nickname),1),(0,a._)("td",null,(0,ft.zw)(t.complete_time),1)],8,_e)))),128))])])])],64)}var he={components:{UserHeader:ee},data(){return{list_type:"complete_time"}},mounted(){this.$refs.header_control.makeControl(),this.$refs.header_control.topLogoControl()},computed:{problem_data(){return this.$store.state.save_data}},methods:{loading_problem(t){this.$store.commit("loading_data",t),this.$router.push({path:"/loadview"})},select_option(){this.$store.commit("select_option",this.list_type)}}};const xe=(0,p.Z)(he,[["render",pe]]);var we=xe;function ve(t,e,l,o,n,s){const i=(0,a.up)("UserHeader"),r=(0,a.up)("LoadViewBox");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{ref:"header_control"},null,512),(0,a.Wm)(r)],64)}const ge=t=>((0,a.dD)("data-v-14a1701e"),t=t(),(0,a.Cn)(),t),be={class:"load_section"},ke={class:"problem_article row"},fe={class:"problem_title"},ye=ge((()=>(0,a._)("span",null,"문제집 제목",-1))),ze={class:"title_box"},je={class:"title"},qe={class:"problem_choice"},$e={class:"choice_list"},Ce=["onClick"],Ue={class:"ment_box"},De={class:"problem_result wrong"},He=ge((()=>(0,a._)("i",null,"틀렸습니다.",-1))),Ve=[He],Le={class:"problem_result correct"},We=ge((()=>(0,a._)("i",null,"맞았습니다.",-1))),Oe=[We],Fe={class:"send_result"};function Ze(t,e,l,n,s,i){return(0,a.wg)(),(0,a.iD)("div",be,[(0,a._)("div",ke,[(0,a._)("div",fe,[ye,(0,a._)("p",null,(0,ft.zw)(s.problem.problem_name),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.problem.list,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"problem_area",key:t},[(0,a._)("div",ze,[(0,a._)("span",null,(0,ft.zw)(e+1),1),(0,a._)("p",je,(0,ft.zw)(t.title),1)]),(0,a._)("div",qe,[(0,a._)("ul",$e,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.choice,((l,o)=>((0,a.wg)(),(0,a.iD)("li",{key:l,onClick:t=>i.select_num(e,o),class:(0,ft.C_)({selected:s.select[e]==o,answer:t.answer==o&&s.sending})},[(0,a._)("span",null,(0,ft.zw)(s.select[e]==o?"선택":t.answer==o&&s.sending?"정답":o+1),1),(0,a._)("p",null,(0,ft.zw)(l.txt),1)],10,Ce)))),128))])]),(0,a._)("div",Ue,[(0,a.wy)((0,a._)("span",De,Ve,512),[[o.F8,"wrong"===s.result[e]]]),(0,a.wy)((0,a._)("span",Le,Oe,512),[[o.F8,"correct"===s.result[e]]])])])))),128)),(0,a._)("div",Fe,[(0,a.wy)((0,a._)("button",{class:"send_back",type:"button",onClick:e[0]||(e[0]=t=>i.send_data(s.problem))},"제출",512),[[o.F8,!s.sending]]),(0,a.wy)((0,a._)("button",{class:"send_back",type:"button",onClick:e[1]||(e[1]=(...t)=>i.back_list&&i.back_list(...t))},"목록으로",512),[[o.F8,s.sending]]),(0,a.wy)((0,a._)("span",{class:"score"},"정답률 : "+(0,ft.zw)(s.correct_count)+"/"+(0,ft.zw)(s.problem_count)+" "+(0,ft.zw)("("+Math.ceil(s.correct_count/s.problem_count*100)+"%)"),513),[[o.F8,s.sending]])])])])}var Be={data(){return{checkAnswer:[],problem:this.$store.state.load_data,sending:!1,select:[],result:[],problem_count:0,correct_count:0}},methods:{send_data(t){if(this.problem_count=0,this.correct_count=0,this.select.length!==t.list.length)alert("정답을 선택해 주세요");else{for(let e=0;e<t.list.length;e++){const l=this.select[e],o=t.list[e].answer;o===l?(this.result[e]="correct",this.sending=!0,this.correct_count++):(this.result[e]="wrong",this.sending=!0)}this.problem_count=this.problem.list.length}},select_num(t,e){this.select[t]=e},back_list(){this.$router.push({path:"/savelist"})}}};const Me=(0,p.Z)(Be,[["render",Ze],["__scopeId","data-v-14a1701e"]]);var Ye=Me,Ie={components:{UserHeader:ee,LoadViewBox:Ye},mounted(){this.$refs.header_control.usermakeControl(),this.$refs.header_control.makeControl(),this.$refs.header_control.topLogoControl()}};const Ke=(0,p.Z)(Ie,[["render",ve]]);var Ee=Ke;const Re=[{path:"/",name:"home",component:tt},{path:"/join",name:"join",component:bt},{path:"/making",name:"making",component:ae},{path:"/savelist",name:"savelist",component:we},{path:"/loadview",name:"loadview",component:Ee}],Ae=(0,k.p7)({history:(0,k.PO)("/"),routes:Re});var Pe=Ae,Se=l(65),Te=(0,Se.MT)({state(){return{now_user:{},user:{s:{email_id:"s",nickname:"hello",pwd:"s"}},load_data:"",save_data:[{problem_name:"리본 수학 (test-1)",complete_time:"2021-5-04",nickname:"테스트1",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"다본 수학 (test-1)",complete_time:"2021-5-03",nickname:"ㅇㅇ",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"니본 수학 (test-1)",complete_time:"2021-3-24",nickname:"hello",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"리본 수학 (test-1)",complete_time:"2021-7-02",nickname:"테스트1",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"(test-1)",complete_time:"2021-5-04",nickname:"!테스트1",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"비본 수학 (test-1)",complete_time:"2022-5-04",nickname:"테스트7",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"미본 수학 (test-1)",complete_time:"2010-6-20",nickname:"A테스트1",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"기본 수학 (test-1)",complete_time:"2012-10-01",nickname:"테스트12",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]},{problem_name:"기본 수학 (test-2)",complete_time:"2022-6-24",nickname:"3테스트",list:[{title:"삼각형의 3각의 합은 몇도인가?",val:1,answer:2,choice:[{txt:"220도"},{txt:"540도"},{txt:"180도"},{txt:"360도"}]},{title:"1 부터 10 까지의 합은?",val:2,answer:0,choice:[{txt:"55"},{txt:"23"},{txt:"38"}]},{title:"3 + 3 * 3 / 2",val:3,answer:2,choice:[{txt:"9"},{txt:"6"},{txt:"7.5"}]},{title:"10 과 15의 최소공배수는?",val:4,answer:2,choice:[{txt:"5"},{txt:"10"},{txt:"30"},{txt:"150"}]},{title:"테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다",val:5,answer:1,choice:[{txt:"가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하"},{txt:"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890"},{txt:"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"}]},{title:"테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트",val:6,answer:2,choice:[{txt:"아니오"},{txt:"예"},{txt:"이게 정답"}]}]}],save_id:""}},getters:{},mutations:{regist_user(t,e){t.user[e.email_id]=e},save_data(t,e){t.load_data=e,t.save_data.unshift(e)},loading_data(t,e){t.load_data=e},now_user(t,e){t.now_user=e},log_out(t){t.now_user={}},save_id(t,e){t.save_id=e,console.log(t.save_id)},select_option(t,e){"complete_time"===e?t.save_data.sort(((t,e)=>e.complete_time.localeCompare(t.complete_time))):t.save_data.sort(((t,l)=>t[e].localeCompare(l[e])))},check_data(){this.$store.state.now_user==={}&&(alert("로그인 후 이용해 주세요"),this.$router.push({path:"/"}))}},actions:{},modules:{}});(0,o.ri)(b).use(Te).use(Pe).mount("#app")},624:function(t,e,l){t.exports=l.p+"img/logo01.a65b1d65.png"}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,l),n.exports}l.m=t,function(){var t=[];l.O=function(e,o,a,n){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],n=t[u][2];for(var i=!0,r=0;r<o.length;r++)(!1&n||s>=n)&&Object.keys(l.O).every((function(t){return l.O[t](o[r])}))?o.splice(r--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,a,n]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.p="/"}(),function(){var t={143:0};l.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,s=o[0],i=o[1],r=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(r)var u=r(l)}for(e&&e(o);c<s.length;c++)n=s[c],l.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return l.O(u)},o=self["webpackChunkquizrix"]=self["webpackChunkquizrix"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(2568)}));o=l.O(o)})();
//# sourceMappingURL=app.4e976623.js.map