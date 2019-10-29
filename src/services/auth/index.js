import ROUTER from 'router';

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

    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                return this.registeredUser[i]
            }
        }
        alert("Email or Password is incorrect!")
        return null
    }
}