<template>
    <div>
        <ul class="goodsList">
            <li v-for="(goods,index) in list" :key="index">
                <img :src="goods.img">
                <p>{{goods.goodsName}}</p>
                <p>{{index}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data(){
            var _this=this;
            var url="";
            if(_this.goodsId==1){
                url="json/notebook.json"
            }else if(_this.goodsId==2){
                url="json/mobile.json"
            }else{
                url="json/notebook.json"
            }
            this.$axios.get(url).then(function (response) {
                _this.list=response.data;
            })
            return {
                list:[]
            }
        },
        props:{
            goodsId:Number
        },
        watch:{
            goodsId(){
                var _this=this;
                var url="";
                if(_this.goodsId==1){
                    url="json/notebook.json"
                }else if(_this.goodsId==2){
                    url="json/mobile.json"
                }else{
                    url="json/notebook.json"
                }
                this.$axios.get(url).then(function (response) {
                    _this.list=response.data;
                })
                return {
                    list:[]
                }
            }
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