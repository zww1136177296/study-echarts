<template>
    <div>
        <p>foo:{{foo}}</p>
        <p>attrs:{{$attrs}}</p>
        <child-dom-child v-bind="$attrs"></child-dom-child>
    </div>
</template>
<script>
import ChildDomChild from './son/one'
export default {
    props:['foo'],
    components:{
        ChildDomChild
    },
    mounted(){
        console.log(this.$attrs)
    },
    inheritAttrs:true,
}
</script>
