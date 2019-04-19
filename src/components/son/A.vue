<template>
    <div id="app">
        <child1 :pchild1="x" pchild2="传给child2的" v-on:test1="onTest1" v-on:test2="onTest2">

        </child1>
    </div>
</template>
<script>
import Child1 from './Child1.vue'
export default {
    data(){
        return{
            x:'传给child1的'
        }
    },
    components:{
       Child1 
    },
    methods:{
        onTest1(){
            console.log('test1 is running!')
        },
        onTest2(){
            console.log('test2 is running!')
        },
    }
}
</script>