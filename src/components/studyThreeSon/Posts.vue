<template>
    <div style="text-align:left;display:flex">
        <div class="left">
            <div @click="chooseTitle('Cat')">Cat</div>
            <div @click="chooseTitle('Hip')">Hip</div>
            <div @click="chooseTitle('CupCake')">CupCake</div>
        </div>
        <div class="right">
            <div v-if="titleName">
                <post-detail :title="postTitle" :content="postContent"></post-detail>
            </div>
            <div v-else>click a Title</div>
        </div>
    </div>
</template>
<script>
import PostDetail from "./PostDetail"
export default {
    components:{
        PostDetail
    },

    data(){
        return{
            titleName:"",
            postTitle:'',
            postContent:''
        }
    },
    methods:{
        chooseTitle(title){
            this.titleName=title;
            this.postTitle=this.titleName
            if(this.titleName=='Cat'){
                this.postContent="CatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCatCat!"
            }else if(this.titleName=='Hip'){
                this.postContent="HipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHipHip!!"
            }else if(this.titleName=='CupCake'){
                this.postContent="CupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCakeCupCake!!!!"
            }
        }
    }
}
</script>
<style scoped>
.right{
    flex:1
}
</style>

