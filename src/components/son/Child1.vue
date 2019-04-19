<template>
    <div class="chid1">
        <p>in child1</p>
        <p>props:{{pchild1}}</p>
        <p>$attrs:{{$attrs}}</p>
        <hr>
        <child2 v-bind="$attrs" v-on="$listeners"></child2>
        <!-- $listeners--属性，它是一个对象，里面包含了作用在这个组件上的所有监听器，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。 -->
    </div>
</template>
<script>
import Child2 from './Child2.vue'
export default {
    inheritAttrs:false,
    mounted(){
        this.$emit('test1')
    },
    props:{
        pchild1:String
    },
    components:{
        Child2
    },
}
</script>
