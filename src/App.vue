<script>
import navbar from "./components/navbar.vue"
import Footer from "./components/footer.vue";
export default{
  components:{
    navbar,
    Footer
  }
}

</script>

<template>

  <navbar/>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped>

</style>
