<template>
    <div>
        <h1>Я покупатель №2</h1>
        <p>Я вижу {{ totalRouterCount }} роутеров!</p>
        <button
                :disabled="!totalRouterCount"
                @click="buyRouter">
            Купить роутер
        </button>
        <button
                :disabled="totalRouterCount < 2"
                @click="buyTwoRouter"
        >
            Купить два роутера
        </button>
    </div>
</template>

<script>
    export default {
        name: 'CustomerTwo',
        computed: {
            totalRouterCount () {
                return this.$store.state.totalRouterCount
            }
        },
        methods: {
            buyRouter () {
                return this.$store.state.totalRouterCount--
            },
            buyTwoRouter () {
                    this.$store.dispatch('removeRouter', 2)
            }
        },
    }
</script>

<style scoped>

</style>