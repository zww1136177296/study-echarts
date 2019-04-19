<template>
    <label for="">
        {{labelName}}
        <input v-bind="$attrs" />
    </label>
</template>
<script>
export default {
    props:{
        labelName:String
    }
}
</script>


