<template>
    <div>
        <div>A页面</div>
        <div><router-link to="/first">返回</router-link></div>
        <div><router-link to="/a1">前往A1</router-link></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "A"
    }
</script>

<style scoped>

</style>