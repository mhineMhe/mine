<template>
  <sidebar-menu :menu="menu"/>
</template>
<style scoped>
.v-sidebar-menu{
    height: 93%;
    margin-top: 56px;
}
</style>
 
 <script>
 import AUTH from 'services/auth'
    export default {
        data() {
            return {
                auth: AUTH,
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true,
                   
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/personalinformation',
                        title: 'Personal Information',
                        icon: 'fa fa-user',
                        child: [
                            {
                                href: '/edit',
                                title: 'Edit Profile'
                            }
                        ]
                    },
                    {
                        href: '/courses',
                        title: 'Add Course & Subjects',
                        icon: 'fa fa-book',
                    },
                    {
                        href: '/confirmLogout',
                        title: 'Log Out',
                        icon: 'fa fa-user',
                    }
                ]
            }
        }
    }
</script>


<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>