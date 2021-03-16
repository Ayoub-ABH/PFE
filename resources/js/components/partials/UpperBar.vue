<template>
   <div class="Upper-bar">
      <div class="container">
         <div class="row">
            <div class="col-sm text-left" id="contact">
               THE SAVE HOTELS RESERVATION
            </div>
            <div class="col-sm text-right">
               <button class="btn">
                  log-in
               </button>
               <button class="btn">
                  sign-up
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name:"upperbar"
}
</script>

<style scoped>
.Upper-bar{
   background-color: rgb(42, 42, 214);
   padding:5px;
   color: white;
}
button{
   color:white;
   background-color:tomato;
}
#contact{
   padding-top: 5px;
}
</style>
