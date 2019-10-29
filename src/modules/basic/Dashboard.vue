  
<template>
  <div>
    <center>
      <br>
      <h1 id="design">My First Project</h1>
      <br>
      <hr>
      <br>
      <br>
      <div>
        <b-img :src="require('assets/mine.png')" rounded="circle" alt="Circle image" id="user"></b-img>
      </div>
      <h1>Hi {{myName}}</h1>
      <br>
      <h3>Welcome to Dashboard</h3>
    </center>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#user {
  width: $userWidth !important;
  height: $userHeight !important;
}
#design{
  font-size: $h1size;
  color: $color;
}
</style>

<script>
export default {
  name: "card",
  data() {
    return {
      myName: sessionStorage.getItem("fname")
    };
  },
  component: {},
  methods: {}
};
</script>