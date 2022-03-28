<template>
    <section>
        <el-button @click="open">打开</el-button>
        <el-button @click="ope1n">打开window</el-button>
       <div v-if="show" style="position:fixed;top:0;bottom:0;left:0;right:0;z-index:10;margin:0 auto;background:#fff">
           <div>
               <el-button @click="changePage(0)">上一页</el-button>
               <span>{{currentPage}}/{{pageCount}}</span>
            <el-button @click="changePage(1)">下一页</el-button>
           </div>
            <pdf 
            :src="pdfUrl"
            :page="currentPage" 
            @num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
			style="display: inline-block; width: 80%;"> </pdf>
       </div>
    </section>
</template>
<script>
// 前端预览PDF
import pdf from 'vue-pdf';
export default {
    components: {
        pdf
    },
    data(){
        return{
            show:false,
            pdfUrl:'',
            currentPage:1,
            pageCount:undefined,
            url:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
        }
    },
    methods:{
        //"vue-pdf": "^4.3.0",
        open(){
            let loadSrc = pdf.createLoadingTask(this.url);
            loadSrc.promise.then(pdf => {
                this.pageCount = pdf.numPages
            });
             this.pdfUrl=loadSrc
            this.show = true
        },
        ope1n(){
            window.open(this.url)
        },
        changePage(direction){
            if(direction === 1&& this.currentPage < this.pageCount){
                this.currentPage++
            }
            if(direction ==0 && this.currentPage > 1){
                this.currentPage--
            }
        }
    }
}
</script>