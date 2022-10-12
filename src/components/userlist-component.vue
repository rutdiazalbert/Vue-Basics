<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div v-if="loading">
        <SpinnerComponent />
      </div>
      <div v-if="errorMessage">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
      <div class="row" v-if="!loading && users.length > 0">
        <div class="col">
          <table class="table table-hover table-center table-striped">
            <thead class="bg-success text-white">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                  <router-link :to="'/userlist/' + user.id" class="text-decoration-none fw-bold text-success">{{ user.name }}</router-link></td>
                <td>{{ user.email }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>{{ user.address.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { usersService } from '../services/UserServices.js'
import SpinnerComponent from './spinner-component.vue'

export default {
  name: 'userlist-component',
  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null
    }
  },
  created: async function () {
    try {
      this.loading = true
      const response = await usersService()
      this.loading = false
      this.users = response.data
    } catch (error) {
      this.loading = false
      this.errorMessage = error
    }
  },
  components: { SpinnerComponent }
}
</script>
<style lang=""></style>
