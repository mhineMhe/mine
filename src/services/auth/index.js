import ROUTER from 'router';
import jquery from "jquery";
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },

    getUser(user) {
        return this.user = user;
    },

    register(email, password) {
        this.registeredUser.push({
            email: email,
            password: password, 
        })
        ROUTER.push('/login')
    },

    login(logEmail, logPassword) {
        // var passwordHash = require('password-hash');
        let link = `http://localhost:3000/retrieve/${logEmail}/${logPassword}`
        jquery.ajax({
          url: link,
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
            alert(response.data)
          alert(response.Email);
          alert(response.Password)
        //   var encryptPass = passwordHash.generate(logPassword);
        //   alert(encryptPass)
          if(response.Email == logEmail && response.Password == logPassword){
            ROUTER.push('/dashboard')
          }else{
            alert("Email or Password is incorrect!")
          }
        });
    }
}