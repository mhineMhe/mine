<template>
  <div class="container" id="margTop">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4" id="backCol">
        <h5 style="color: white; margin-left:6%;">Are you sure you want to logout?</h5>
        <center>
          <button type="submit" class="btn btn-success" @click="yes()">yes</button>
          <button type="submit" class="btn btn-success" @click="no()">no</button>
        </center>
        <br>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#margTop {
  margin-top: 10%;
}
#backCol {
  background-color: $color;
}
</style>

<script>
import ROUTER from "router";
export default {
  methods: {
    yes() {
      sessionStorage.removeItem("sex");
      sessionStorage.removeItem("age");
      sessionStorage.removeItem("height");
      sessionStorage.removeItem("religion");
      sessionStorage.removeItem("status");
    //   sessionStorage.removeItem("Pass");
    //   sessionStorage.removeItem("fname");
    //   sessionStorage.removeItem("lname");
      ROUTER.push("/login");
    },
    no() {
      ROUTER.push("/dashboard");
    }
  }
};
</script>

