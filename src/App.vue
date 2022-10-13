<template>
<div class="Navbar">
<div class="navbar">
    <h1>Data Provinsi di Pulau Jawa</h1>
</div>
<br>
 <div class="vue"> 
  <DataProvinsi />
<router-view />
</div> 
</div>
</template>

<script>
import DataProvinsi from './components/DataProv.vue'
export default {
  name: 'App',
  components: {
   DataProvinsi,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar{
  text-align: center; 
   font-family: Arial, Helvetica, sans-serif;
  /* margin-top: 30px; */
   color: #2c3e50;
    /* border: 1px solid;  */
    background-color: wheat; 
   position: fixed;
   width: 100%;
}
.vue{
  display: flex;
  gap: 100px;
  margin-top: 100px;
}
.Navbar{
  background-image: url("https://lh4.googleusercontent.com/proxy/RVO1MmscdlUtISjq6BPEIPDw1Y3d-yMIafH1tD-TTWy47rnDNwwlbXfjhSwPoCnC1Ps6z1eECMgdofudO4mKeOWCgobY47EFVA0tUqHhYzeAzu27pV1P8kfNQAVHFfgttTYpmVh_-k-M_whSxhEZYhLqXgBWwBpbwnIaS6MzhQTEHZCtqgKmLPm3reQ3WQWzK7M=s0-d");
}
</style>
