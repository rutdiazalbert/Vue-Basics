<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p class="h3 fw-bold text-success">Welcome User</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div v-if="!isLoggedIn">
                            <p class="h3 fw-bold text-danger">Thank You!!</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <button v-if="!isLoggedIn" class="btn btn-success btn-sm m-1" @click="login()">LogIn</button>
                            <button v-if="isLoggedIn" class="btn btn-danger btn-sm m-1" @click="loggout()">LogUout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'authuser-component',
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login: function () {
      this.isLoggedIn = true
    },
    loggout: function () {
      this.isLoggedIn = false
    }
  }
}
</script>
<style>

</style>
