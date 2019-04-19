<template>
    <div>
        <!-- <slot></slot> -->
        <!-- ---------------------------------------- -->
        <!-- <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer> -->
        <!-- ---------------------------------------- -->
        <!-- <p>
            <slot :user="user">
                {{user.lastName}}
            </slot>
        </p> -->

        <!-- ---------------------------------------- -->
        <!-- 带有 slot-scope 特性的作用域插槽 -->
        <slot>123</slot>
        <hr>
        <slot name="a" :user="user">
            {{user.lastName}}
        </slot>
    </div>
     
</template>
<script>
export default {
    created(){
        // console.log(this.$refs)
    },
    data(){
        return{
            user:{
                firstName:'周',
                lastName:'伟'
            }
        }
    }
}
</script>
