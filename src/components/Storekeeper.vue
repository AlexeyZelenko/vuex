<template>
    <div class="Storekeeper">
        <h1>Я кладовщик</h1>
        <p>У меня на складе { totalTvCount } телевизоров</p>
        <p>У меня на складе { totalRouterCount } роутеров</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Storekeeper",
        computed: {
           ...mapState(['totalRouterCount', 'totalTvCount'])
        }
    }
</script>

<style scoped>

</style>