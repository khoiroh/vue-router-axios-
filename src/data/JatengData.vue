<template>
  <div>
    <h2>JAWA TENGAH</h2>
    <hr>
    <div class="jawa">
      <img src="https://sindunesia.com/wp-content/uploads/2020/08/Peta-Jawa-Tengah-Kebumen.png" alt=""  width="450px" height="250px">
      <p>Provinsi Jawa Tengah (Jateng) adalah salah satu provinsi yang terletak <br> di pulau Jawa.  Ibukota Jawa Tengah adalah Semarang. Luas wilayahnya <br> 32.548 km²  atau sekitar 28,94% dari luas pulau Jawa. Secara administratif, <br> Jumlah kabupaten di Jawa Tengah adalah sebanyak 29 kabupaten, sedangkan kota <br> di Jawa
      Tengah adalah sebanyak 6 kota.  Sehingga total kabupaten dan kota di <br> Jawa Tengah adalah berjumlah 35. Administrasi pemerintahan <br> kabupaten dan kota ini terdiri atas 545 kecamatan dan 8.490 desa/kelurahan.</p>
    </div>
    <br>
     <form @submit.prevent="add">
      <h3>Data Provinsi di Jawa Tengah :</h3>
      <hr>
         <div class="jateng">
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
        <th>Logo</th>
        <th>Action</th> 
      </tr>
      <tr v-for="user in jatengs" :key="user.id">
        <td>{{user.kota}}</td>
        <td>{{user.kecamatan}} Kecamatan</td>
        <td>{{user.kelurahan}} Kelurahan</td>
        <td>{{user.jumlah}}</td>
         <td style=" text-align: center"><img :src="user.image" alt="" width="130" height="150"></td>
        <td style=" text-align: center"><button class="edit" @click="edit(user)">Edit</button> ||  
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
    name: "JatengData",
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
        jatengs: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get(' http://localhost:3000/jatengs').then(res => {
        this.jatengs = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/jatengs/', this.form).then(res => {
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
//  Fungsi Mengupdate data
  update(form){
        return axios.put('http://localhost:3000/jatengs/' + form.id , 
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
    // Fungsi mendelete data
    del(user){
      axios.delete('http://localhost:3000/jatengs/' + user.id).then(res =>{
          this.load()
          let index = this.jatengs.indexOf(
          form.no,
          form.kota,
          form.kecamatan,
          form.kelurahan,
          form.jumlah,
          form.image,
          );
          this.jatengs.splice(index,1);
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
.jateng{
    display: flex;
    gap: 15px;
}
.no{
  width: 50px;
}
th{
  background-color: black;
  height: 30px;
  color: wheat;
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
 text-align: justify;
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