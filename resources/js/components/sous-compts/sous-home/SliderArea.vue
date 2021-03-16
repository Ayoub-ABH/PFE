<template>
   <div id="SliderArea">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
         <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div class="carousel-inner">

            <div class="carousel-item active" >
            <img class="d-block w-100" src="" >
            <img class="d-block w-100" src="" >

            </div>
         </div>
         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
         </a>
      </div>
   </div>
</template>

<script>
export default {
   name:"sliderarea",
   data(){
      return {
         posts: {}
      }
   },
   created(){
      axios.get('http://127.0.0.1:8000/')
         .then(response => this.posts = response.data)
         .catch(error => console.log(error));
   },
   mounted(){
      console.log('the component is mounted')
   }
}
</script>

<style>
#SliderArea{
   border: solid 1px black;
   height: 80vh;
}
</style>
