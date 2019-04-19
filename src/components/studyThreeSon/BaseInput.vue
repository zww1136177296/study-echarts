<template>
    <input ref="input" />
</template>
<script>
export default {
    methods:{
        focus:function(){
            this.$refs.input.focus()
            console.log(123)
        }
    }
}
</script>
