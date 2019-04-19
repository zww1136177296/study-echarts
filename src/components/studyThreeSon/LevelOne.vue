<template>
<div>
    Level 1
    <slot></slot>
</div>
</template>
<script>
export default {
    inject:['getMethods'],
    mounted(){
        this.getMethods()//可以触发父辈组件的方法
    }
}
</script>
