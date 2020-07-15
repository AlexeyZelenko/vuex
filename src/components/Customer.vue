<template>
    <div class="customer">
        <h1>I'm a customer</h1>
        <p
        v-if="totalTvCount"
        >I see {{ totalTvCount }} TVs!</p>
        <p v-show="happyStaff">Персонал кажется счастливым!</p>
        <p v-show="happyLarry">Ларри кажется счастливым!</p>
        <p v-show="!happyStaff">Персонал кажется злым!</p>
        <p v-show="!totalTvCount">Я не вижу ни одного TV</p>


        <button
                @click="evil">
            У продовца плохое настроение
        </button>
        <button
                @click="evil">
            У продовца Larry плохое настроение
        </button>
        <button
                v-if="totalTvCount"
                :disabled="!totalTvCount"
                @click="buyTv">
            Buy Tv
        </button>
        <button
            :disabled="TotalTvCount < 2"
            @click="buyTwoTvs"
        >
           Buy Two Tvs
        </button>
        <button
                v-if="totalTvCount >= 5"
                :disabled="TotalTvCount < 5"
                @click="buyFiveTvs"
        >
            Buy Five Tvs
        </button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        name: "Customer",
        computed: {
            // totalTvCount () {
            //     return this.$store.state.totalTvCount
            // },
            // // Check in the getter if the staff is happy
            // happyStaff () {
            //     return this.$store.getters.happyStaff
            // },
            // Если у вас есть только один объект состояния / getter, операторы распространения необязательно
            // Но мы будем использовать это сейчас, чтобы вы могли видеть, как они используются
            // mapState / mapGetter принимает массив строк в качестве параметра
            ...mapState(['totalTvCount']),
            ...mapGetters(['happyStaff', 'happyLarry']),
        },
        methods: {
            ...mapActions(['removeTv', 'evil']),
            // buyTv() {
            //     // Отправляем акцию на покупку телевизора
            //     this.$store.dispatch('removeTv', 1)
            // },
            // buyTwoTvs() {
            //     this.$store.dispatch('removeTv', 2)
            // },
            buyTv() {
                this.removeTv(1) // Remove 1 TV
            },
            buyTwoTvs() {
                this.removeTv(2) // Remove 2 TVs
            },
            buyFiveTvs() {
                this.removeTv(5) // Remove 2 TVs
            }
        }
    }
</script>

<style scoped>

</style>