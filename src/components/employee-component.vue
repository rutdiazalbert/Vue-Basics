<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3">Employee</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : {{this.employee.name}}
                    </li>
                    <li class="list-group-item">
                        Age : {{this.employee.age}}
                    </li>
                    <li class="list-group-item">
                        Designation : {{this.employee.designation}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'employee-component',
  data: function () {
    return {
      employee: {
        name: 'Rut',
        age: '23',
        designation: 'Full Stack Developer'
      }
    }
  }
}
</script>
<style></style>
