<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
     <router-link class="nav-link" to="/">首頁</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="admin_products">後台產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="admin_coupon">優惠券</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view></router-view>
</template>

