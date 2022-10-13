<template>
  <div>
    <h2>JAWA BARAT</h2>
    <hr>
    <div class="jawa">
      <img src="https://i1.wp.com/www.abundancethebook.com/wp-content/uploads/2019/10/peta-jawa-barat.png?ssl=1" alt="" width="450px" height="250px">
    <p>Provinsi Jawa Barat terdiri atas 18 kabupaten dan 9 kota. <br> Ibu kotanya adalah Kota Bandung. 
       Pada tanggal 17 Oktober 2000, <br> sebagian wilayah Jawa Barat dibentuk sebuah provinsi tersendiri, <br>
       yaitu Provinsi Banten. Berikut adalah daftar kabupaten dan kota di Jawa Barat, <br> beserta pusat 
       pemerintahan kabupaten.[1]</p>    
    </div>
    <br>
     <form @submit.prevent="add">
      <h3>Data Provinsi di Jawa Barat :</h3>
      <hr>
         <div class="jabar">
              <table class="tablee">
             <div class="label">
         <tr>
        <label for="">Kota Administrasi</label> 
       </tr><br>
        <tr>
        <label for="">Kecamatan</label></tr><br>
         <tr>     
        <label for="">Kelurahan</label>  </tr> <br>
        <tr>
        <label for="">Jumlah Penduduk</label></tr>
        </div>
      
        <div class="input">

        <input type="hidden" v-model="form.id" required />
      
        <tr><td>
        <input type="text" v-model="form.Kota" required />
        </td></tr><br>
        <tr>
        <td><input type="text" v-model="form.kecamatan" required />
        </td></tr><br>
        <tr>
        <td> <input type="text" v-model="form.kelurahan" required />
        </td></tr><br>
        <tr>
         <td> <input type="text" v-model="form.jumlah" required /></td></tr>
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
      <tr v-for="user in jabars" :key="user.id">
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
    name: "JabarData",
 data(){
    return{
        form: {
          id: '',
          no: '',
          kota: '',
           jumlah: '',
          kecamatan: '',
          kelurahan: '',        
          image: '',
        },
        jabars: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get(' http://localhost:3000/jabars').then(res => {
        this.jabars = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/jabars/', this.form).then(res => {
          this.load()
          this.form.no = '';
           this.form.kota = '';
           this.form.jumlah = '';
          this.form.kecamatan = '';
          this.form.kelurahan = ''; 
          this.form.image = '';
      })
 },
 edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
         this.form.no = user.no
        this.form.kota = user.kota 
         this.form.jumlah = user.jumlah
        this.form.kecamatan = user.kecamatan
        this.form.kelurahan = user.kelurahan
        this.form.image = user.image
 },
  update(form){
        return axios.put('http://localhost:3000/jabars/' + form.id , 
        {no: this.form.no,
        kota: this.form.kota,
          jumlah: this.form.jumlah,
        kecamatan : this.form.kecamatan,
         kelurahan: this.form.kelurahan,
         image: this.form.image,
         },
         ).then(res => {
        this.load()
        this.form.id = ''
         this.form.no = ''
        this.form.kota = ''
          this.form.jumlah = ''
        this.form.kecamatan = ''
        this.form.kelurahan = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      });
    },
    del(user){
      axios.delete('http://localhost:3000/jabars/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(
            form.no,
          form.kota,
          form.jumlah,
          form.kecamatan,
          form.kelurahan,
          form.image,
          );
          this.jabars.splice(index,1);
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
.jabar{
    display: flex;
    gap: 15px;
}
th{
  background-color: black;
  height: 30px;
  color: wheat;
}
.no{
  width: 50px;
}
.jawa{
  display: flex;
  gap: 15px; 
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
  justify-content: center;
  font-family: cursive;
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
td{
  background-color: lightseagreen;
  color: black;
}
</style>