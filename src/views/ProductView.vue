<template>
    <h2>單一產品頁</h2>
    {{product}}
    <div class="container">
      
                   <img :src="product.imagesUrl" class="card-img-top" alt="...">

    <router-link :to="`/product/${product.id}`" class="btn btn-primary">查看商品</router-link>
  </div> 
                
</template>
<script>
export default {
    data(){
        return {
            product:[],

        }
    },
    methods: {
        getProduct(){
            console.log(this.$route);
            const {id} =this.$route.param;
            this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`)
            .then(res=>{
                this.products=res.data.products
            })
        }
    },
    mounted(){
        this.getProduct();
    },
        
    }
</script>
