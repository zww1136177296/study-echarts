
<template>
<div id="example">
  <!-- <p :style="{color:color,fontSize:fontsize+'px'}">
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p> -->

  <!-- <p>条件渲染</p> -->
  <!-- <template v-if="loginType==='username'">
    <label>
      Username:
    </label>
    <input type="text" placeholder="Enter your username" key="username-input" />
  </template>
  <template v-else>
    <label>
      Email:
    </label>
    <input type="text" placeholder="Enter your email address" key="email-input" />
  </template>
  <br />
  <button @click="toggleLoginType">Toggle login type</button> -->

  <!-- <p>组建基础</p>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter> -->

  <!-- <p>通过 Prop 向子组件传递数据</p> -->
  <!-- <blog-post title="My journey with Vue"></blog-post>
  <blog-post title="Blogging with Vue"></blog-post>
  <blog-post title="Why Vue is so fun"></blog-post> -->

  <!-- <p>监听子组件事件</p>
  <div :style="{fontSize:postFontsize+'em'}">
     <blog-post v-for="item in posts"
    :key="item.id"
    :title="item.title"
    @enlargeText="enlargeText"
   />
  </div> -->


  <!-- <p>通过插槽分发内容</p> -->
  <!-- <alert-box>
      <h1>ABC</h1>
      <p>EDF</p>
      <div>123</div>
  </alert-box> -->


<!-- <p>动态组件</p>
<component :is="componentId"></component>
<button @click="chooseCom('Home')">Home</button>
<button @click="chooseCom('Posts')">Posts</button>
<button @click="chooseCom('Archive')">Archive</button> -->




  <!-- <p>vue中使用echarts</p>
  <div id="main" style="width: 600px;height:400px;">
  </div> -->


  <!-- <p>禁用特性继承</p>
  <base-input 
  v-for="(item,index) in inputData"
  :key="index"
  :labelName="item.labelName"
  :type="item.type"
  :placeholder="item.placeholder"
  ></base-input> -->

  <!-- <p>在组件上使用 v-model</p> -->
  <!-- <input v-model="searchText"> -->
  <!-- 等价于： -->
  <!-- <input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
  > -->
  <!-- 当用在组件上时，v-model 则会这样： -->
  <!-- <custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input> -->


<!-- 自定义组件的 v-model -->
<!-- <base-checkbox v-model="lovingVue">
</base-checkbox> -->


<!-- 将原生事件绑定到组件(想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 
修饰符有的时候这是很有用的，不过在你尝试监听一个类似 <input> 的非常特定的元素时，这并不是个好主意。
比如上述 <base-input> 组件可能做了如下重构，所以根元素实际上是一个 <label> 元素) -->
<!-- 解决这个问题，Vue 提供了一个 $listeners 属性，它是一个对象，里面包含了作用在这个组件上的所有监听器 -->
<base-input-two label="用户名" value="周伟" placeholder="请输入用户名" @focus="focus"></base-input-two>


</div>
</template>

<script>
import ButtonCounter from "./son/ButtonCounter";
import BlogPost from "./son/BlogPost";
import AlertBox from './son/AlertBox'
import Home from './son/Home'
import Posts from './son/Posts'
import Archive from './son/Archive'
import BaseInput from './son/BaseInput'
import CustomInput from './son/CustomInput'
import BaseCheckbox from './son/BaseCheckbox'
import BaseInputTwo from './son/BaseInputTwo'
import { setTimeout } from 'timers';
export default {
  name: "EchartsOne",
  components: {
    ButtonCounter,
    BlogPost,
    AlertBox,
    Home,
    Posts,
    Archive,
    BaseInput,
    CustomInput,
    BaseCheckbox,
    BaseInputTwo
  },
  props:[
    'size'
  ],
  data() {
    return {
      clothType: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      title: "在Vue中使用echarts",
      data: [5, 10, 15, 10, 50, 3],
      echartsType: "销量",
      question: "",
      answer: "",
      color: "red",
      fontsize: 30,
      isShow: false,
      loginType: "username",

      //通过 Prop 向子组件传递数据
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],

      // 监听子组件事件
      postFontsize: 1,

      //动态组建
      componentId:'',
      inputData:[
        {
          labelName:'用户名',
          type:'text',
          placeholder:'请输入用户名'
        },
        {
          labelName:'密码',
          type:'password',
          placeholder:''
        },
      ],
      searchText:"",
      lovingVue:true

    };
  },
  watch: {
    question: function(newVal, oldVal) {
      this.answer = newVal;
    },
    searchText:function(newVal,oldVal){
      console.log(newVal);
    }
  },
 
 computed:{
   fullName:function(){
     return this.furstName+this.lastName
   }
 },
  mounted() {
    // this.drawLine();
  },
  methods: {
    // drawLine() {
    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart = this.$echarts.init(document.getElementById("main"));
    //   // 绘制图表
    //   myChart.setOption({
    //     title: { text: this.title },
    //     tooltip: {},
    //     xAxis: {
    //       data: this.clothType
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: this.echartsType,
    //         type: "bar",
    //         data: this.data
    //       }
    //     ]
    //   });
    // },
    toggleLoginType() {
      if (this.loginType == "username") {
        this.loginType = "email";
      } else {
        this.loginType = "username";
      }
    },
    enlargeText(a){
      this.postFontsize+=a
    },

    //动态组建
    chooseCom(com){
      this.componentId=com
    },
    focus(){
      console.log('触发了获得焦点事件！')
    }
  }
};
</script>
<style scoped>
</style>
