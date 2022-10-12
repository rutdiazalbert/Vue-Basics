<template lang="">
    <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="container">
          <router-link class="navbar-brand" to="/">Vue Basics</router-link>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link px-3" to="/costumer">Costumer</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/employee">Employee</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/counter">Counter</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/greeting">Greeting</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/register">Register</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/authuser">Auth User</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-4" to="/userlist">User List</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'navbar-component'
}
</script>
<style lang="">

</style>
