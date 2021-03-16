<template>
<div id="NavBar">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
         <router-link to="/" class="navbar-brand">
         <span>Hotel</span>
         <span>Ligne</span>
         </router-link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul class="navbar-nav ml-auto">
               <li class="nav-item active">
                  <router-link class="nav-link" to="/" >HOME <span class="sr-only">(current)</span></router-link>
               </li>
               <li class="nav-item ">
                  <router-link class="nav-link" to="/Hotel">HOTEL</router-link>
               </li>
               <li class="nav-item ">
                  <router-link class="nav-link " to="/Contact">CONTACT</router-link>
               </li>
               <li class="nav-item ">
                  <router-link class="nav-link " to="/About">ABOUT</router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
      <router-view/>
</div>
</template>

<script>
export default {
   name:"navbar"
}
</script>

<style scoped>
.navbar-brand span:first-child{
   font-weight: bold;
   font-size: 40px;
   color: red;
}
.navbar-brand span:last-child{
   font-size: 40px;
   color:blue;
}
.nav-item{
   font-weight: bold;
   font-size: 15px;
}
</style>
