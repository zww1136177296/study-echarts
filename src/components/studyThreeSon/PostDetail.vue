<template>
    <div>
        <h1>{{title}}</h1>
        {{content}}
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        content:String
    }
}
</script>
