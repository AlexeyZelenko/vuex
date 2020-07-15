<template>
  <div  id="app">
    <div>
      <Customer />
    </div>
    <div>
      <CustomerTwo />
    </div>
  </div>

</template>

<script>
  import Customer from "@/components/Customer";
  import CustomerTwo from "@/components/CustomerTwo";

export default {
  name: 'App',
  components: {
    Customer,
    CustomerTwo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
