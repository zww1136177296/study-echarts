<template>
    <em>Level 3</em>
</template>
<script>
export default {
    inject:['getMethods','test2'],
    mounted(){
        this.getMethods()//可以触发父辈组件的方法
        console.log(this.test2)
    }
}
</script>
