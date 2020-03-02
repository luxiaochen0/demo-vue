<template>
    <div>
        <div>这是vuex测试的首页</div>
        <div>count值{{this.$store.state.count}}</div>
        <div>count值{{this.$store.getters.getStateCount}}</div>
        <div>{{resultNmu}}</div>
        <div>{{getState}}</div>
        <button @click="add2">加</button>
        <button @click="reductionFun">减</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex';
    export default {
        name: "vuex",
        computed: {
            ...mapState({
                resultNmu: state => state.count
            }),
            ...mapGetters({
                getState: 'getStateCount' // 把 `this.getState` 映射为 `this.$store.getters.getStateCount`
            }),

        },
        methods: {
            ...mapActions({
                add2: 'add' // 将 `this.add2()` 映射为 `this.$store.dispatch('add')`
            }),
            addFn() {
                this.add2()
            },
            reductionFun() {
                this.$store.dispatch('reduction')
            }
        }
    }
</script>

<style scoped>

</style>