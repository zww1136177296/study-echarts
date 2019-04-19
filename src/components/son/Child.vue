<template>
    <h1 @click="changePropsInSon">hello,{{name}}</h1>
</template>
<script>
export default {
    props:['name'],
    methods:{
        changePropsInSon(){
            this.$emit('update:name','I am from Child!')
        }
    }
}
</script>