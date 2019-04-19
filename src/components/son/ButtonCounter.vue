<template>
    <div>
        <button @click="count++">you click me {{count}} times</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0
        }
    }
}
</script>