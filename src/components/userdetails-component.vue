<template lang="">
    <div class="container mt-3">
        <div v-if="loading">
            <SpinnerComponent />
        </div>
       <div class="row" v-if="!loading && Object.keys(user).length > 0">
        <div class="col">
            <pre>{{ user }}</pre>
        </div>
       </div>
       <div class="row">
        <div class="col">
            <router-link to="/userlist" class="btn btn-success ms-3">Back</router-link>
        </div>
       </div>
    </div>
</template>
<script>
import SpinnerComponent from './spinner-component.vue'
import { userService } from '../services/UserServices.js'
export default {
  name: 'userdetails-component',
  data: function () {
    return {
      user: {},
      loading: false,
      errorMessage: null

    }
  },
  created: async function () {
    const userId = this.$route.params.userId
    try {
      this.loading = true
      const response = await userService(userId)
      this.loading = false
      this.user = response.data
    } catch (e) {
      this.loading = false
      this.errorMessage = e
    }
  },
  components: { SpinnerComponent }
}
</script>
<style scoped>

</style>
