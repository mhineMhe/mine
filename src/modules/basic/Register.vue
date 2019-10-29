<template>
  <form class="col-lg-4 mx-auto text-white" id="formDesign" @submit="onSubmit">
    <br />
    <center>
      <h1>Register:</h1>
    </center>
    <div>
      <label>User name:</label>
      <br />
      <input
        type="text"
        v-model="mine.fname"
        id="fname"
        name="firstName"
        class="col-sm-5"
        :class="{ 'is-invalid': submitted && $v.mine.fname.$error }" placeholder="firstname"
      />
      <div
        v-if="submitted && !$v.mine.fname.required"
        class="invalid-feedback"
      >First Name is required</div>
      <input
        type="text"
        v-model="mine.lname"
        id="lname"
        name="lastName"
        class="col-sm-5"
        :class="{ 'is-invalid': submitted && $v.mine.lname.$error }" placeholder="lastname"
      />
      <div
        v-if="submitted && !$v.mine.lname.required"
        class="invalid-feedback"
      >Last Name is required</div>
    </div>
    <br />
    <div>
      <label>Email address:</label>
      <br />
      <input
        type="email"
        v-model="mine.email"
        id="email"
        name="email"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.mine.email.$error }" placeholder="email"
      />
      <div v-if="submitted && $v.mine.email.$error" class="invalid-feedback">
        <span v-if="!$v.mine.email.required">Email is required</span>
        <span v-if="!$v.mine.email.email">Email is invalid</span>
      </div>
    </div>
    <br />
    <div>
      <label>Password:</label>
      <br />
      <input
        v-model="mine.password" placeholder="password"
        id="password"
        name="password"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.mine.password.$error }" :type="passwordVisible ? 'text' : 'password'"
      />

      <span class="visibility" tabindex='-1' @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
			<i class="material-icons">{{ passwordVisible ? "on" : "off" }}</i>
		</span>

      <div v-if="submitted && $v.mine.password.$error" class="invalid-feedback">
        <span v-if="!$v.mine.password.required">Password is required</span>
        <span v-if="!$v.mine.password.minLength">Weak Password</span>
      </div>
    </div>
    <br />
    <div>
      <label>Confirm Password:</label>
      <br />
      <input
        type="password"
        v-model="mine.conpassword"
        id="confirmPassword"
        name="confirmPassword"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.mine.conpassword.$error }" placeholder="confirm password"
      />
      <div v-if="submitted && $v.mine.conpassword.$error" class="invalid-feedback">
        <span v-if="!$v.mine.conpassword.required">Confirm Password is required</span>
        <span v-else-if="!$v.mine.conpassword.sameAsPassword">Passwords must match</span>
      </div>
    </div>
    <br />
    <center>
      <button type="submit" class="btn btn-success">Register</button>
    </center>
    <br />
  </form>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#formDesign {
  margin-top: 50px;
  background-color: $color;
}
#lname {
  margin-left: $margTop;
  height: 40px;
}
#fname {
  margin-left: $margTop;
  height: 40px;
}

.visibility {
  all: unset;
  padding: 2px 0.4em 0;
  vertical-align: center;
  cursor: pointer; 
  float:right; 
  margin-top:-33px;
  margin-right: 5px;
  color: gray;
  border: solid gray;
}

.material-icons {
  font-size: 1em;
}
</style>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
import AUTH from "services/auth";
// import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      mine: {
        email: "",
        fname: "",
        lname: "",
        password: "",
        conpassword: ""
      },
      passwordVisible: false,
      submitted: false
    };
  },

  validations: {
    mine: {
      fname: { required },
      lname: { required },
      email: { required, email },
      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        }
      },
      conpassword: { required, sameAsPassword: sameAs("password") }
    }
  },

  methods: {
    togglePasswordVisibility () {
			this.passwordVisible = !this.passwordVisible
    },
    
    onSubmit(evt) {
      evt.preventDefault();
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.mine));
      // if (
      //   this.mine.email == "" ||
      //   this.mine.password == "" ||
      //   this.mine.fname == "" ||
      //   this.mine.lname == "" ||
      //   this.mine.conpassword == ""
      // ) {
      //   alert("All fields are required!!!");
      // } else if (this.mine.password != this.mine.conpassword) {
      //   alert("Mismatch password!!!");
      // } else {
      //   sessionStorage.setItem("Pass", this.mine.password);
      //   sessionStorage.setItem("fname", this.mine.fname);
      //   sessionStorage.setItem("lname", this.mine.lname);
      //   AUTH.register(this.mine.email, this.mine.password);
      // }
    }

    // register() {
    //   let link = `http://localhost:3000/db/create/${this.mine.fname}/${this.mine.email}/${this.mine.password}`;
    //   jquery
    //     .ajax({
    //       url: link,
    //       method: "GET",
    //       headers: {
    //         "Access-Control-Allow-Origin": "*"
    //       }
    //     })
    //     .then(response => {
    //       alert(response.username);
    //     });
    // }
  }
};
</script>