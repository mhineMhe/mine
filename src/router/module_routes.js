import AUTH from 'services/auth'
// import { resolve } from 'dns'
let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path
    if (to.meta.tokenRequired === true) {
        if (sessionStorage.getItem("Pass") != null) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        next()

        // if (sessionStorage.getItem("Pass") != null) {
        //     if (to.path === '/' || to.path === '/') {
        //         next({ path: '/login' })
        //     } else if (to.meta.tokenRequired === true) {
        //         next({ path: '/' })
        //     } else {
        //         next()
        //     }
        // } else {
        //     next()
        // }

        // let userID = parseInt(localStorage.getItem('accout_id'))
        // let token = localStorage.getItem('usertoken')
        // if(token !== null && userID > 0){
        //     if(to.path === '/' || to.path === '/'){
        //         next({path: '/templates'})
        //     }else if(to.meta.tokenRequired === true){
        //         next({path: '/'})
        //     }else{
        //         next()
        //     }
        // }
        // next()
    }
}

var devRoutes = []
let app = require('router/app.js')
devRoutes = devRoutes.concat(app.default.routes)
for (let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['modules/basic/Login.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default {
    routes: routes
}