<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3">Consumer</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : {{name}}
                    </li>
                    <li class="list-group-item">
                        Age : {{age}}
                    </li>
                    <li class="list-group-item">
                        Designation : {{designation}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'costumer-component',
  props: {
    name: { type: String },
    age: { type: String },
    designation: { type: String }
  }
}

</script>
<style>
</style>
