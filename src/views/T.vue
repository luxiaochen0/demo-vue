<template>
    <div>
        <ul>
            <li v-for="(goods,index) in goods_list" :key="index">{{goods.id}}--{{goods.name}}--{{index}}--{{$index}}</li>
        </ul>
        <ul>
            <li v-for="(goods,name,index) in goods" :key="index">{{goods}}--{{name}}--{{index}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "T",
        data(){
            return {
                goods_list:[
                    {id:1, name:'name1'},
                    {id:2, name:'name2'},
                    {id:3, name:'name3'},
                ],
                goods: {sn:11111, name:'name1'}

            }
        }
    }
</script>

<style scoped>

</style>