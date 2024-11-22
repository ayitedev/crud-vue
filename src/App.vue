<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">IPNet</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">IT 338</a>
            </li>


          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Rechercher</button>
          </form>


        </div>
      </div>
    </nav>
    <div class="row" >
    <div class="col-2">
      <div class="side-bar">
        <a>
          <router-link to="/" >MENU</router-link>
        </a>
          <a >
            <router-link to="/">Liste personnes</router-link>
          </a>
          <a >
            <router-link to="/create" >Ajouter personne</router-link>
          </a>
      </div>
    </div>
      <div class="col-10">
        <router-view></router-view>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  background-color: cadetblue ;
  padding-bottom: 40rem;
  padding-left: 10px;
  padding-top: 20px;

}

.side-bar a {
  text-decoration: none;
  color: white;
  margin-top: 20px;


}



</style>