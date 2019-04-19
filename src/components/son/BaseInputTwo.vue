<template>
    <label for="">
        {{label}}
        <input v-bind="$attrs"
            :value="value"
            v-on="inputListeners"
        />
    </label>
</template>
<script>
export default {
    inheritAttrs:false,
    props:['value','label'],
    computed:{
        inputListeners:function(){
            return Object.assign({},this.$listeners,{
                input:function(e){
                    this.$emit('focus',e.target.value)
                }
            })
        }
    }
}
</script>
