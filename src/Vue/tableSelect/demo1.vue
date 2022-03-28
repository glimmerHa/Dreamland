<template>
    <section>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @select="selectHandler"
            @select-all="selectAllHandler">
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
// 需求：接口需要 新增的数据和 新减的数据。 通过维护行为 map
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
            // 提交的数组
            submitList:[],
            cacheFlagTrue:{},
            actionMap:{}
       }
   },
   mounted(){
       this.getMainList()
   },
   methods:{
       getData1(){
           return data1
       },
       getData2(){
           return data2
       },
       getMainList(){
           let tableDataTemp = []
            if(this.pageNum === 1){
                tableDataTemp = this.getData1()
            }else{
                tableDataTemp = this.getData2()
            }
            this.tableData = tableDataTemp
            tableDataTemp.forEach(item=>{
                if(item.flag){
                    this.cacheFlagTrue[item.id] = 1
                }
            })

            if(this.tableData.length){
                this.tableData.forEach(item=>{
                    if(this.actionMap.hasOwnProperty(item.id) ){
                        if(this.actionMap[item.id]){
                            this.$nextTick(()=>{
                                this.$refs.multipleTable.toggleRowSelection(item);
                            })
                        }
                    }else if(!!item.flag){
                        this.$nextTick(()=>{
                            this.$refs.multipleTable.toggleRowSelection(item);
                        })
                    }
                })
            }
       },
       // 分页组件
       handleSizeChange(val){
           this.pageSize = val
           this.getMainList()
       },
       // 分页组件
       handleCurrentChange(val){
           this.pageNum = val
            this.getMainList()
       },
       
       selectHandler(selection, row){
            let ids = []
            selection.forEach(item=>{
                ids.push(item.id)
            })
            if(ids.includes(row.id)){
                this.actionMap[row.id] = 1
            }else{
                this.actionMap[row.id] = 0
            }
       },
       selectAllHandler(selection){
           console.log('全选', selection)
           if(selection.length){
               this.tableData.forEach(item=>{
                   this.actionMap[item.id] = 1
               })
           }else{
               this.tableData.forEach(item=>{
                   this.actionMap[item.id] = 0
               })
           }
       },
       saveHandler(){
           console.log(this.actionMap)
           console.log(this.cacheFlagTrue)
           let arr = []
           let keys = Object.keys(this.actionMap)
           keys.forEach(item=>{
               if(this.cacheFlagTrue.hasOwnProperty(item) ){
                   if(this.actionMap[item]!== this.cacheFlagTrue[item]){
                       arr.push({id:item, flag: this.actionMap[item]}) 
                   }
               }else{
                   if(this.actionMap[item] === 1){
                       arr.push({id:item, flag: this.actionMap[item]}) 
                   } 
               }
           })
           console.log('保存的数据', arr)
       }
   }
}
</script>