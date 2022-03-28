<template>
    <section>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
        </el-table>
        <el-pagination 
            background
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[5,10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            class="pagination">
        </el-pagination>
        <el-button @click="saveHandler">保存</el-button>
    </section>
</template>
<script>
// 同需求，我的思考。通过 数组来维护
import _ from 'lodash'
let data1=[
    {id:1,name:'1',flag:0},
    {id:2,name:'2',flag:1},
    {id:3,name:'3',flag:1},
    {id:4,name:'4',flag:0},
    {id:5,name:'5',flag:0},
    {id:6,name:'6',flag:0},
]
let data2=[
    {id:7,name:'7',flag:0},
    {id:8,name:'8',flag:1},
    {id:9,name:'9',flag:1},
    {id:10,name:'10',flag:0},
]
export default {
   data(){
       return{
            pageNum:1,
            pageSize:5,
            total:10,
            tableData:[],
            //
            flagTrueListFromApi:[],
            //
            flagTrueCacheList:[],
            // 
            selection:[],
            // 
            pageNumCache:[],
            // 
            curPageFlagList:[]
       }
   },
   mounted(){
       this.getMainList()
       this.setPageNumCache(this.pageNum)
   },
   methods:{
       setPageNumCache(val){
           if(!this.pageNumCache.includes(val)){
               this.pageNumCache.push(val)
           }
       },
       getMainList(){
           let tableDataTemp = []
        if(this.pageNum === 1){

           tableDataTemp = this.getData1()
        }else{
           tableDataTemp = this.getData2()
        }
        this.curPageFlagList = []
       tableDataTemp.forEach(item=>{
            if(item.flag){
                this.curPageFlagList.push(item)
            }
        })
        console.log('筛选出来当前页面的flag=1', this.curPageFlagList)
        this.flagTrueListFromApi = this.uniqByKey(this.flagTrueListFromApi.concat(this.curPageFlagList), 'id')
        console.log('接口内 去重 的数据', this.flagTrueListFromApi)

        // init table
        // 接口数据和 用户操作数据融合
        if(this.flagTrueCacheList.length){
            // 已经访问过的页还是没有访问过的页
            if(this.pageNumCache.includes(this.pageNum)){
                console.log('页面---已经访问过')
                // 用户操作后的
                let ids = []
                this.flagTrueCacheList.forEach(item=>{
                    ids.push(item.id)
                })
                console.log('页面---ids',ids)
                console.log('页面--tableDataTemp',tableDataTemp)
                tableDataTemp.forEach(item=>{
                    if(ids.includes(item.id)){
                        item.flag = 1
                    }else{
                        item.flag = 0
                    }
                })
            }else{
                console.log('页面---未访问过')
                this.setPageNumCache(this.pageNum)
            }
        }
        this.tableData = tableDataTemp
        if(this.tableData.length){
            this.tableData.forEach(item=>{
                if(!!item.flag){
                    this.$nextTick(()=>{
                        this.$refs.multipleTable.toggleRowSelection(item);
                    })
                }
            })
        }
       },
       getData1(){
           return data1
       },
       getData2(){
           return data2
       },
       handleSelectionChange(val){
           console.log('11111--selection',this.selection)
           console.log('11111',val)
            this.selection = val
       },
       handleSizeChange(val){
           console.log('nihao ',val)
           this.pageSize = val
           this.getMainList()
       },

       handleCurrentChange(val){
           console.log('nihao1 ',val)
           this.setCache()
           this.pageNum = val
            this.getMainList()
       },
       xorByJian(root,diff,key){
           let result = []
           let ids = []
           diff.forEach(item=>{
                ids.push(item.id)
            })
            root.forEach(item=>{
                if(!ids.includes(item.id)){
                    result.push(item)
                }
            })
            return result
       },
       setCache(){
           let arr = _.unionBy(this.selection,this.curPageFlagList, 'id')
           console.log('页面---选择', this.selection)

           console.log('页面---并集',arr )
           let arr1 = this.xorByJian( arr, this.selection,'id')
           let ids = []
           arr1.forEach(item=>{
                ids.push(item.id)
            })
           console.log('页面---补集',arr1,ids,this.flagTrueCacheList.length )
           let arr2 = this.flagTrueCacheList.filter(item=>{
               console.log('页面----', item.id)
               console.log('页面---',ids.includes(item.id))
               return !ids.includes(item.id)
           })
           console.log('页面---处理',arr2)
            this.flagTrueCacheList = this.uniqByKey(arr2.concat(this.selection), 'id')
            console.log('最后',this.flagTrueCacheList)
            this.selection = []
       },
       // 去重返回
       uniqByKey(list,key){
           let result = []
            result = _.uniqBy(list, key)
           return result
       },
       saveHandler(){
           console.log(this.flagTrueListFromApi)
           console.log(this.flagTrueCacheList)
       },
   }
}
</script>