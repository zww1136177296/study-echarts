<template>
    <div class="child2">
        <p>in child2:</p>
        <p>props:{{pchild2}}</p>
        <p>$attrs:{{$attrs}}</p>
    </div>
</template>
<script>
export default {
    props:['pchild2'],
    mounted(){
        this.$emit('test2')
    }
}
</script>
