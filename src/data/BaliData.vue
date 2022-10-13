<template>
  <div>
    <h2>BALI</h2>
    <hr>
    <img class="image" src="https://media.tabloidbintang.com/files/thumb/ef936e3bff0895423a9f48fd9b40fb64.jpg/745" alt="" width="100%" height="400">  
    <p>Lapisan masyarakat di dalam perkotaan sangat beragam, begitu juga dengan bangunannya.  Oleh sebab itu, kota dapat dikatakan sebagai suatu <br> wilayah yang di mana bangunan  dan lapisan masyarakatnya sudah menjadi satu kesatuan. <br> Senada dengan pengertian kota di dalam Kamus Besar Bahasa Indonesia (KBBI) kota adalah daerah pemukiman <br> yang terdiri atas bangunan rumah yang merupakan kesatuan tempat tinggal dari berbagai lapisan masyarakat. <br> Kota itu sendiri secara sederhana dapat diartikan sebagai suatu wilayah yang sangat potensial dari segi manapun, mulai <br> dari sektor pekerjaan, sektor kesehatan, sektor pendidikan, dan sebagainya. Maka dari itu, di dalam suatu perkotaan kita pasti mudah <br> menemukan berbagai macam hal  karena fasilitas-fasilitas di perkotaan lebih banyak bila dibandingkan dengan fasilitas-fasilitas pedesaan.</p>
    
     <form @submit.prevent="add">
      <h3>Data Provinsi di Bali :</h3>
          <hr>
        <div class="bali"> 
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
      <tr v-for="user in balis" :key="user.id">
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
    name: "BaliData",
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
        balis: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get(' http://localhost:3000/balis').then(res => {
        this.balis = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/balis/', this.form).then(res => {
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
        return axios.put('http://localhost:3000/balis/' + form.id , 
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
      axios.delete('http://localhost:3000/balis/' + user.id).then(res =>{
          this.load()
          let index = this.jatims.indexOf(
          form.no,
          form.kota,
          form.kecamatan,
          form.kelurahan,
          form.jumlah,
          form.image,
          );
          this.balis.splice(index,1);
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
 /* .bali{
    display: flex;
    gap: 100px;
    padding: 10px;
}  */
/* .bali:hover{
  border: none;
} */
th{
  background-color: black;
  height: 30px;
  color: wheat;
}
.no{
  width: 50px;
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