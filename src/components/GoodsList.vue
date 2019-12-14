<template>
    <div>
        <ul class="goodsList">
            <li v-for="goods in list" :key="goods.id">
                <img :src="goods.img">
                <p>{{goods.goodsName}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data(){
            var _this=this;
            this.$axios.get("json/notebook.json").then(function (response) {
                _this.list=response.data;
            })
            return {
                list:[]
            }
        },
        props:{
            goodsId:Number
        },
        watch:function () {
            
        }
    }
</script>
<style scoped>
    .goodsList li{
        width: 200px;
        height: 200px;
        list-style: none;
        float: left;
        font-size: 9px;
        color: red;
        margin-bottom: 40px;
    }
    .goodsList img{
        width: 180px;
        height: 180px;
    }
</style>