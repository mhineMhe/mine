<template>
  <div id="app">
    <myheader/>
    <sidevar
      v-show="$route.path === '/dashboard' || $route.path === '/profile' || $route.path === '/course&yr' || $route.path === '/logout' ? true : false"
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'Dashboard', 'url': 'http://localhost:8080/#/dashboard'},
        {'id': 2, 'text': 'Course & Year', 'url': 'http://localhost:8080/#/course&yr'},
        {'id': 3, 'text': 'Profile', 'url': 'http://localhost:8080/#/profile'},
        {'id': 4, 'text': 'Logout', 'url': 'http://localhost:8080/#/logout'}
      ]"
    ></sidevar>
    <!-- <dashboard /> -->
    <myBody/>

    <!-- <sidevar v-show="$route.path === '/dashboard' || $route.path === '/profile' || $route.path === '/course&yr' ? true : false"/> -->
  </div>
</template>

<script>
// import dashboard from "modules/basic/Dashboard.vue";
import myheader from "components/Frame/Header.vue";
import myBody from "components/Frame/body.vue";
import sidevar from "components/Frame/sidebar.vue";
export default {
  name: "app",
  components: {
    myheader,
    myBody,
    sidevar
    // dashboard
  }
};
</script>