<template>
    <div class="Storekeeper">
        <h1>Я кладовщица Jenny</h1>
        <p v-show="!happyJenny">Jenny кажется злой!</p>
        <p v-show="happyJenny">Jenny кажется доброй и веселой!</p>
        <p>У меня на складе {{ totalTvCount }} телевизоров</p>
        <p>У меня на складе {{ totalRouterCount }} роутеров</p>
        <button
                @click="complimentJenny"
        >
            Сделать комплимент Jenny
        </button>
        <button
                @click="noComplimentJenny"
        >
            Jenny наступили на ногу
        </button>
        <button
                @click="addTenTvs"
        >
            Добавить на склад 10 телевизоров
        </button>
        <button
                @click="addTenRouters"
        >
            Добавить на склад 10 роутеров
        </button>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters} from 'vuex'
    export default {
        name: "Storekeeper",
        computed: {
           ...mapState(['totalRouterCount', 'totalTvCount']),
            ...mapGetters(['happyJenny']),
        },
        methods: {

            ...mapActions(['addTvs', 'addRouters', 'complimentJENNY', 'noComplimentJENNY']),
            addTenTvs() {
                this.addTvs(10) // Add 10 TVs
            },
            addTenRouters() {
                this.addRouters(10) // Add 10 routers
            },
            complimentJenny() {
               this.complimentJENNY()
            },
            noComplimentJenny() {
                this.noComplimentJENNY()
            }
        }
    }
</script>

<style scoped>

</style>