<script>
export default {
  name: "SiteHeader",
  components: {},
};
</script>

<template>
  <header id="app_header">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow px-5">
      <a class="navbar-brand" href="{{ url('/') }}">
        <img height="35" src="./../assets/image/cyberfolk-logo.png" alt="Personal Logo" class="pt-1">
      </a>
      <h1 class="text-center flex-grow-1 text-warning m-0"> Hex-Grid</h1>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="visible = !visible">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="ps-4 navbar-collapse collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item" style="width: 80px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item" style="width: 135px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'quad' }">Quadrant</router-link>
          </li>
          <li class="nav-item" style="width: 130px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'hex' }">Hexagon</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar-collapse -->
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#app_header {
  height: $H_header;
}

.nav-item {
  text-align: center;

  .nav-link {
    font-size: larger;
  }

  .nav-link:hover {
    color: $primary !important;
  }

  .active {
    font-size: larger;
    animation: activate 0.05s linear;
  }

  @keyframes activate {
    0% {
      rotate: deg(0);
      font-size: medium;
    }

    100% {
      rotate: deg(-2);
      font-size: larger;
    }
  }
}
</style>
