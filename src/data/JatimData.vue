<template>
  <div>
    <h2>JAWA TIMUR</h2>
    <hr>
    <div class="jawa">
      <img src="https://tumoutounews.com/wp-content/uploads/2017/11/PETA-JAWA-TIMUR.png" alt=""  width="450px" height="250px">
      <p>Jawa Timur atau disingkat Jatim, merupakan salah satu provinsi di Indonesia yang <br> terletak di pulau Jawa bagian ujung timur. Ibukotanya <br> berada di kota Surabaya yang juga dianggap sebagai kota terbesar <br> kedua di Indonesia setelah ibukota Indonesia DKI Jakarta.Sedangkan jumlah <br> penduduk Jawa Timur  adalah mencapai 42.030.633 jiwa. <br> Provinsi Jawa Timur juga memiliki wilayah terluas di antara 6 provinsi di <br> Pulau Jawa, dan memiliki populasi jumlah penduduk terbanyak kedua di <br> Indonesia setelah Jawa Barat.</p>
       </div>
     <form @submit.prevent="add">
      <h3>Data Provinsi di Jawa Timur :</h3>
      <hr>
        <div class="jatim">
             <table class="tablee">     
             <div class="label">
              <tr>
        <label for="">Kota Administrasi</label> </tr> 
        <br >
        <tr>
        <label for="">Kecamatan</label></tr>
        <br >       <tr>
        <label for="">Kelurahan</label>  </tr>
        <br >     <tr>
        <label for="">Jumlah Penduduk</label>
        </tr>
        </div>
        <div class="input">
        <input type="hidden" v-model="form.id" required />
        <tr><td>
        <input type="text" v-model="form.Kota" required /></td></tr><br>
        <tr><td>
        <input type="text" v-model="form.kecamatan" required /></td></tr><br>
        <tr><td>
         <input type="text" v-model="form.kelurahan" required /></td></tr><br>
         <tr><td>
         <input type="text" v-model="form.jumlah" required /></td></tr><br>
          <button class="klik" type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
          
          </div>
         </table>
        
       </div>
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <br>
    <table>
      <tr>
        <th>Kota Administrasi</th>
        <th>Kecamatan</th>
        <th>Kelurahan</th>
        <th>Jumlah Penduduk</th>
        <th>Image</th>
        <th>Action</th> 
      </tr>
      <tr v-for="user in jatims" :key="user.id">
        <td>{{user.kota}}</td>
        <td>{{user.kecamatan}} Kecamatan</td>
        <td>{{user.kelurahan}} Kelurahan</td>
        <td>{{user.jumlah}}</td>
         <td><img :src="user.image" alt="" width="150" height="150"></td>
        <td style="text-align: center"><button class="edit" @click="edit(user)">Edit</button> ||  
        <button class="delete" @click="del(user)">Delete</button>
        </td>
       
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
    name: "JatimData",
 data(){
    return{
        form: {
          id: '',
          no: '',
          kota: '',
          kecamatan: '',
          kelurahan: '',
          jumlah: '',
          image: '',
        },
        jatims: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get(' http://localhost:3000/jatims').then(res => {
        this.jatims = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/jatims/', this.form).then(res => {
          this.load()
          this.form.no = '';
           this.form.kota = '';
          this.form.kecamatan = '';
          this.form.kelurahan = '';
          this.form.jumlah = '';
          this.form.image = '';
      })
 },
 edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
         this.form.no = user.no
        this.form.kota = user.kota 
        this.form.kecamatan = user.kecamatan
        this.form.kelurahan = user.kelurahan
        this.form.jumlah = user.jumlah
        this.form.image = user.image
 },
  update(form){
        return axios.put('http://localhost:3000/jatims/' + form.id , 
        {no: this.form.no,
        kota: this.form.kota,
        kecamatan : this.form.kecamatan,
         kelurahan: this.form.kelurahan,
         jumlah: this.form.jumlah,
         image: this.form.image,
         },
         ).then(res => {
        this.load()
        this.form.id = ''
         this.form.no = ''
        this.form.kota = ''
        this.form.kecamatan = ''
        this.form.kelurahan = ''
        this.form.jumlah = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      });
    },
    del(user){
      axios.delete('http://localhost:3000/jatims/' + user.id).then(res =>{
          this.load()
          let index = this.jatims.indexOf(
             form.no,
          form.kota,
          form.kecamatan,
          form.kelurahan,
          form.jumlah,
          form.image,
          );
          this.jatims.splice(index,1);
      });
   },
  },
};
</script>

<style scoped>
table, th, td {
  border: 1px solid;
  width: 150px;
}
table {
  width: 100%;
}
.jatim{
    display: flex;
    gap: 15px;
}
th{
  background-color: black;
  height: 30px;
  color: wheat;
}
td{
  background-color: lightseagreen;
  color: black;
}
.tablee{
  display: flex;
  padding: 10px;
  gap: 100px;
   width: 500px; 
 text-align: center;
  background-color: lightseagreen;
}
.klik{
  background-color: red;
  color: wheat;
  border-radius: 3px;
  width: 50px;
}
.klik:hover{
  background-color: black;
}
p{
 text-align: justify;
  font-family: cursive;
}
.jawa{
  display: flex;
  gap: 15px; 
}
.edit{
  background-color: red;
  color: wheat;
  width: 50px;
  height: 30px;
  border-radius: 3px;
}
.edit:hover{
  background-color: black;
}
.delete{
  background-color: red;
  color: wheat;
  width: 60px;
  height: 30px;
  border-radius: 3px;
}
.delete:hover{
  background-color: black;
}
</style>