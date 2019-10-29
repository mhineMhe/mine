<template>
  <form class="col-lg-4 mx-auto text-white" id="formDesign" @submit="onSubmit">
    <br />
    <center>
      <h1>Login:</h1>
    </center>
    <div>
      <label>Email address:</label>
      <br />
      <input type="email" v-model="mine.email" class="form-control" placeholder="Enter email" />
    </div>
    <br />
    <div>
      <label>Password:</label>
      <br />
      <input type="password" v-model="mine.password" class="form-control" placeholder="Password" />
    </div>
    <br />
    <center>
      <button type="submit" class="btn btn-success">Login</button>
    </center>
    <br />
  </form>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#formDesign {
  margin-top: 100px;
  background-color: $color;
}
</style>

<script>
import AUTH from "services/auth";
// import jquery from "jquery";
// import ROUTER from "router";
export default {
  data() {
    return {
      show: true,
      mine: { email: "", password: "" },
      auth: AUTH
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.mine.email === "" || this.mine.password === "") {
        alert("All fields are required");
      } else {
        // let link = 'http://localhost:3000/user'
        // jquery.ajax({
        //   url: link,
        //   method: 'POST',
        //   headers: {
        //     'Access-Control-Allow-Origin': '*'
        //   }
        // })
        AUTH.login(this.mine.email, this.mine.password);
      }
    }
  }
};
</script>