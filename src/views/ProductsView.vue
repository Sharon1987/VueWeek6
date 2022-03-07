<template>
    <div class="container">
        <h2>產品頁</h2>
    <!--{{products}}測試看有沒有撈到資料-->
        <div class="row row-cols-1 row-cols-lg-5 g-2"><!--row決定內層數量-->
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card h-100">
                   <img :src="product.imageUrl" class="card-img-top" alt="...">
                   <div class="card-body">
                       <h5 class="card-title">{{ product.title}}</h5>
                       <p class="card-text">{{ product.description}}</p>
                       <a href="#" class="btn btn-primary">查看細節</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            products:[],

        }
    },
    methods: {
        getProducts(){
            this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
            .then(res=>{
                this.products=res.data.products
            })
        }
    },
    mounted(){
        this.getProducts();
    },
        
    }
</script>
