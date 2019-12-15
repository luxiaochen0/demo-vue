<template>
    <div>
        <div v-if="kk==1">
            <GoodsList :goodsId="1"></GoodsList>
        </div>
        <div v-else-if="kk==2">
            <GoodsList :goodsId="2"></GoodsList>
        </div>
        <div v-else>
            <GoodsList :goodsId="0"></GoodsList>
        </div>
    </div>
</template>

<script>
    import Msg from './msg.js'
    import GoodsList from './GoodsList.vue'
    export default {
        name: "Right",
        components: {GoodsList},
        data(){
            return {
                kk:0
            }
        },
        mounted:function () {
            var _this=this;
            Msg.$on('val',function (m) {
                _this.kk=m;
            })
        }
    }
</script>

<style scoped>

</style>