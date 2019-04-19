<template>
    <div>
        <h3>{{ title }}</h3>
        <button @click="enLarge">Enlarge text</button>
    </div>
</template>
<script>
export default {
    props:['title'],
    methods:{
        enLarge(){
            this.$emit('enlargeText',0.1)
        }
    }
}
</script>
