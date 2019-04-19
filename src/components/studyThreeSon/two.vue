<template>
    <ul>
        <li
         v-for="todo in filteredTodos"
         v-bind:key="todo.id"
        >
        <slot name="todo" :todo="todo">
            {{todo.text}}
        </slot>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        todos:Array
    },
    created(){
        this.filteredTodos=this.todos
    },
    data(){
        return{
            filteredTodos:[]
        }
    }
}
</script>
