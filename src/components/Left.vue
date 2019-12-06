<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li>笔记本电脑</li>
            <li>手机</li>
            <li>其他1</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Left"
    }
</script>

<style>
    .title{
        width: 200px;
        color: red;
    }

    .menu li{
        list-style: none;
        height: 50px;
        line-height: 50px;
        background-color: white;
        margin-bottom: 5px;
        cursor: pointer;
    }
</style>