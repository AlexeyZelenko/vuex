<template>
    <div>
        <h1>Я покупатель</h1>
        <p v-show="!totalRouterCount">Я не вижу ни одного роутера</p>
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