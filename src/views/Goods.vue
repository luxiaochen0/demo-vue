<template>
    <div class="main">
        <div class="left"><Left></Left></div>
        <div class="right">
            <div class="top"></div>
            <div class="bottom"></div>
        </div>
    </div>
</template>

<script>
    import Left from '../components/Left.vue'
    export default {
        name: "Goods",
        components: {Left},
    }
</script>

<style>
    *{ margin:0; padding:0; }
    .main{
        width: 1210px;
        margin: 20px auto;
        display: flex;
    }
    .left{
        width: 200px;
    }
    .right{
        width: 1000px;
        margin-left: auto;
    }

    .left,.right{
        height: 500px;
        background-color: #f5f5f5;
    }
    .top{
        width: 1000px;
        height: 200px;
        background-color: #42b983;
    }
    .bottom{
        width: 1000px;
    }

</style>