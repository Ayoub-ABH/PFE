<template>
<div>
   <div id="app-web">
      <upper-bar></upper-bar>
      <nav-bar></nav-bar>
      <Home></Home>
   </div>
</div>
</template>

<script>

import UpperBar from './partials/UpperBar';
import NavBar from './partials/NavBar';
import Home from './pages/Home';


export default {
   name: "home",
   components:{
      UpperBar,
      NavBar,
      Home
   }
};
</script>
