<template>
    <div>
        <input type="checkbox" value="1" v-model="users">user001
        <input type="checkbox" value="2" v-model="users">user002
        <input type="checkbox" value="3" v-model="users">user003
        <div>{{users}}</div>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data(){
            return {
                users:[],
            }
        }
    }
</script>

<style scoped>

</style>