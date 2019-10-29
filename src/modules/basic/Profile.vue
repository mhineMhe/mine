<template>
  <div class="container" id="contMargin">
    <center>
      <h1 style="font-size:80px;">
        Personal Information
        <br>
      </h1>
      <br>
      <br>
    </center>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4 mx-auto text-white" id="backCol">
        <br>
        <h4>Name : {{fname}} {{lname}}</h4>
        <br>
        <h4>Sex : {{Sex}}</h4>
        <br>
        <h4>Age : {{Age}}</h4>
        <br>
        <h4>Height : {{Height}}</h4>
        <br>
        <h4>Religion : {{Religion}}</h4>
        <br>
        <h4>Status : {{Status}}</h4>
        <br>
        <center>
          <div>
            <form @submit="onSubmit">
              <div>
                <button type="submit" class="btn btn-success">Update Profile</button>
              </div>
            </form>
          </div>
        </center>
        <br>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#contMargin{
    margin-top: $margTop;
}
#backCol{
    background-color: $color;
}
</style>

<script>
import ROUTER from "router";
export default {
  data() {
    return {
      fname: sessionStorage.getItem("fname"),
      lname: sessionStorage.getItem("lname"),
      Sex: sessionStorage.getItem("sex"),
      Age: sessionStorage.getItem("age"),
      Height: sessionStorage.getItem("height"),
      Religion: sessionStorage.getItem("religion"),
      Status: sessionStorage.getItem("status")
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      ROUTER.push("/addProf");
    }
  }
};
</script>

