<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" id="backCol">
        <form
        id="formHeight"
          class="col-lg-8 mx-auto text-white"
          @submit="onSubmit"
        >
          <center>
            <h1>Personal Information</h1>
          </center>
          <br>
          <div>
            <label>Sex:</label>
            <br>
            <input type="text" v-model="sex" class="form-control" placeholder="sex">
          </div>
          <br>
          <div>
            <label>Age:</label>
            <br>
            <input type="text" v-model="age" class="form-control" placeholder="age">
          </div>
          <br>
          <div>
            <label>Height:</label>
            <br>
            <input type="text" v-model="height" class="form-control" placeholder="height">
          </div>
          <br>
          <div>
            <label>Religion:</label>
            <br>
            <input type="text" v-model="religion" class="form-control" placeholder="religion">
          </div>
          <br>
          <div>
            <label>Status:</label>
            <br>
            <input type="text" v-model="status" class="form-control" placeholder="status">
          </div>
          <br>
          <center>
            <button type="submit" class="btn btn-success">Update</button>
          </center>
          <br>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#backCol{
    background-color: $color;
}
#formHeight{
    margin-top: 40px;
}

</style>

<script>
import ROUTER from "router";
export default {
  data() {
    return {
      sex: "",
      age: "",
      height: "",
      religion: "",
      status: ""
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      sessionStorage.setItem("sex", this.sex);
      sessionStorage.setItem("age", this.age);
      sessionStorage.setItem("height", this.height);
      sessionStorage.setItem("religion", this.religion);
      sessionStorage.setItem("status", this.status);
      ROUTER.push("/profile");
    }
  }
};
</script>

