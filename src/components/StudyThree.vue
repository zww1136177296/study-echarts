<template>
    <div>
        <!-- <navi>
            这是插槽里的内容
        </navi> -->
<!-- ---------------------------------------------------- -->

        <!-- <navi>
            <h1>哈哈啊哈哈</h1>
            <p style="font-size:50px;color:red">这个也行啊</p>
        </navi> -->
<!-- ---------------------------------------------------- -->

        <!-- <navi>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <template v-slot:footer>
                <h1>Here's some contact info</h1>
            </template>
        </navi> -->
        <!-- ---------------------------------------------------- -->

        <!-- <navi>
           <template v-slot:default="{slotProps}">
               {{slotProps.user.firstName}}
           </template>
        </navi> -->

        <!-- 解构插槽 Prop -->
        <!-- <navi>
            <template v-slot="{user}">
                {{user.firstName}}
            </template>
        </navi> -->
        <!-- ----------- -->

        <!-- prop 重命名 -->
          <!-- <navi>
            <template v-slot="{user:person}">
                {{person.firstName}}
            </template>
        </navi> -->
        <!-- ----------- -->

        <!-- 甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形 -->
         <!-- <navi>
            <template v-slot="{ user={ firstName: 'Guest' }}">
                {{user.firstName}}
            </template>
        </navi> -->

        <!-- 动态插槽名 -->
          <!-- <navi>
            <template v-slot:[dynamicSlotName]>
                {{user.firstName}}
            </template>
        </navi> -->

        <!-- 具名插槽的缩写 -->
        <!-- <navi>
            <template #header>
                 <h1>Here might be a page title</h1>
            </template>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </navi> -->

        <!-- 实例 -->
        <!-- <todo-list :todos="todos">
            <template v-slot:todo="{todo}">
                <span v-if="todo.isComplete">√</span>
                {{todo.text}}
            </template>
        </todo-list> -->


        <!-- 带有 slot-scope 特性的作用域插槽 -->
        <!-- 旧语法: -->
        <!-- <navi>
            <template slot="a" slot-scope="slotProps">
                {{slotProps.user.firstName}}
            </template>
        </navi> -->
        <!-- 新语法: -->
        <!-- <navi>
            <template v-slot="slotProps">
                这样会报错，因为slotProps并没有得到传过来的props，会报undefined！而且没有指定要填充的插槽名!,就会填充到组件的默认插槽中，
                {{slotProps.user.firstName}}  
            </template>
        </navi> -->
        <!-- 正确的: -->
        <!-- <navi>
            <template v-slot:a="slotProps">
                {{slotProps.user.firstName}}
                v-slot:a相当于slot="a"这样就知道要填充到哪个插槽中，而且该插槽中有绑定的props：'user',这样slotProps.user.firstName就能正确渲染
            </template>
        </navi> -->


        <!-- 在动态组件上使用 keep-alive -->
        <!-- <div>
            <div class="btn-box" style="font-size:0px;width:500px;margin:0 auto;text-align:left" >
            <input type="button" @click="chooseCom('Posts')" value="Posts" />
            <input type="button" @click="chooseCom('Archive')" value="Archive" />
        </div>
        <div style="border:1px solid #eee;width:500px;margin:0 auto">
            <keep-alive>
            <component :is="componentId"></component>
            </keep-alive>
        </div>
        </div> -->


        <!-- 访问子组件实例或子元素 -->
        <!-- <navi ref="test">

        </navi> -->
        <!-- 另一个例子: -->
        <!-- <base-input ref="usernameInput" @click="focus"></base-input> -->


        <!-- 依赖注入 -->
        <level-one>
            <level-two>
                <level-three>

                </level-three>
            </level-two>
        </level-one>

        
    </div>
</template>
<script>
import Navi from "./studyThreeSon/one.vue";
import TodoList from "./studyThreeSon/two.vue";
import Posts from "./studyThreeSon/Posts";
import Archive from "./studyThreeSon/Archive";
import BaseInput from "./studyThreeSon/BaseInput";
import LevelOne from "./studyThreeSon/LevelOne";
import LevelTwo from "./studyThreeSon/LevelTwo";
import LevelThree from "./studyThreeSon/LevelThree";
export default {
  components: {
    Navi,
    TodoList,
    Posts,
    Archive,
    BaseInput,
    LevelOne,
    LevelTwo,
    LevelThree
  },
  created() {
    // console.log(this)
    // console.log(this.$root.foo)
    //在每个 new Vue 实例的子组件中，其根实例可以通过 $root 属性进行访问，这里的根实例就是main.js中的new Vue()
    // 对于 demo 或非常小型的有少量组件的应用来说这是很方便的。不过这个模式扩展到中大型应用来说就不然了。因此在绝大多数情况下，我们强烈推荐使用 Vuex 来管理应用的状态。
    // 和 $root 类似，$parent 属性可以用来从一个子组件访问父组件的实例
    // console.log(this.$refs.test);//undefined  $refs 只会在组件渲染完成之后生效，并且它们不是响应式的。
    // 这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。
  },
  provide:function(){
      return{
          getMethods:this.test,  //proviede里面定义的方法可以在任意后代组件中通过inject先接受方法名，这里就是'getMethods'即在后代组件中先inject:['getMethods']，后面就可以使用这个方法了
          test2:'哈哈哈',//同理，放入属性也可以在后代组件中用，provide和inject配合使用，就可以灵活准确地选择哪个后代组件中使用长辈级的组件中provide中声明的属性或方法
      }
  },
  mounted() {
    console.log(this.$refs.test);
  },
  data() {
    return {
      dynamicSlotName: "user",
      todos: [
        {
          text: "A",
          isComplete: true
        },
        {
          text: "B",
          isComplete: true
        },
        {
          text: "C",
          isComplete: true
        },
        {
          text: "D",
          isComplete: true
        },
        {
          text: "E",
          isComplete: false
        }
      ],
      componentId: "" //用于选择组件
    };
  },
  methods: {
    chooseCom(com) {
      this.componentId = com;
    },
    focus(){
        // this.$refs.usernameInput.focus()
        console.log(1)
    },
    test(){
        console.log('我是方法!')
    }
  }
};
</script>
<style scoped>
.btn-box input {
  height: 30px;
}
</style>

