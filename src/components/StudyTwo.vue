<template>
    <div id="app">
        <p>vue中的.sync修饰符</p>
        <child :name.sync="name"></child>
        <button type="button" @click="changePropsInFather">改变name的值</button>
    </div>
</template>
<script>
import Child from './son/Child'
export default {
    components:{
        Child
    },
    data(){
        return{
            name:'World'
        }
    },
    methods:{
        changePropsInFather(){
            this.name="I am from father"
        }
    }
}
</script>
