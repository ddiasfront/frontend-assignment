<template>
  <div>
    <Header />
    <div id="menuviewwrapper">
      <MenuComponent />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import MenuComponent from "./MenuComponent.vue";
export default {
  components: { Header, Footer, MenuComponent }
};
</script>
