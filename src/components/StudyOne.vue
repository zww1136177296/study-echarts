<template>
    <div>
        <!-- Vue2.4中$attrs和$listeners的使用 -->
        <child-dom
        :foo="foo"
        :coo="coo"
        >

        </child-dom>
    </div>
</template>
<script>
// import ChildDom from './studyOneSon/one'
import ChildDom from './studyOneSon/Two'
export default {
    name:"StudyOne",
    components:{
        ChildDom
    },
    data(){
        return{
            foo:'哈哈哈',
            coo:'你好'
        }
    }
}
</script>
