<template>
    <div class="all">
     
        <div>
            <router-link to="/">JAKARTA</router-link>
            <!-- <a href="/">Home</a> -->
        </div>
        <br>
        <div>
            <router-link to="jabar">JAWA BARAT</router-link>
            <!-- <a href="/about">About</a> -->
        </div>
        <br>
        <div>
            <router-link to="jateng">JAWA TENGAH</router-link>
            <!-- <a href="/contact">Chontact</a> -->
        </div>
        <br>
        <div>
            <router-link to="jatim">JAWA TIMUR</router-link>
            <!-- <a href="/produk">Produk</a> -->
        </div>
        <br>
        <div>
            <router-link to="bali">BALI</router-link>
            <!-- <a href="/detail">Detail</a> -->
        </div>
    </div>
</template>

<script>
export default {
    nama: "DataProvinsi",
};
</script>

<style scoped>
.all{
    background-color: tan;
    border-radius: 10px;
}
a{
    display: block;
     padding: 16px 18px; 
    text-decoration: none;
     /* font-family: cursive;  */
}
a:hover{
    color: red;
}
</style>
