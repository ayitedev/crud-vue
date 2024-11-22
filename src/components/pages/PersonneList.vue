
<template>
  <layout-div>
    <div class="container">
      <h2 class="text-center mt-5 mb-3">Liste des personnes</h2>
      <div class="card">
        <div class="card-header">
          <router-link to="/create"
                       class="btn btn-outline-primary"
          >Nouvelle personne
          </router-link>
        </div>
        <div class="card-body">

          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Nom</th>
              <th>Prénoms</th>
              <th>Sexe</th>
              <th>Profession</th>
              <th width="240px">Actions</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="personne in personnes" :key="personne.id">
              <td>{{personne.nom}}</td>
              <td>{{personne.prenom}}</td>
              <td>{{personne.sexe}}</td>
              <td>{{personne.profession}}</td>
              <td>
                <router-link :to="`/show/${personne.id}`" class="btn btn-outline-info mx-1">Détails</router-link>
                <router-link :to="`/edit/${personne.id}`" class="btn btn-outline-success mx-1">Editer</router-link>
                <button
                    @click="handleDelete(personne.id)"
                    className="btn btn-outline-danger mx-1">
                  Supprimer
                </button>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
import PersonneService from "@/services/PersonneService.js";

export default {
  name: 'personne-list',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      personnes:[]
    };
  },
  created() {
    this.fetchProjectList();
  },
  methods: {
    fetchProjectList() {
      PersonneService.getAll()
          .then(response =>{
            this.personnes = response.data;
            console.log(response.data);
          })
          .catch(error => {
            return error
          });
    },
    handleDelete(id){
      Swal.fire({
        title: 'Etes vous sur?',
        text: "Cette personne sera suprimée pour toujours!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer  le!'
      }).then((result) => {
        if (result.isConfirmed) {
          PersonneService.delete(id)
              .then( response => {
                Swal.fire({
                  icon: 'success',
                  title: 'Personne supprimée avec  succèsy!',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.fetchProjectList();
                return response
              })
              .catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: 'An Error Occured!',
                  showConfirmButton: false,
                  timer: 1500
                })
                return error
              });
        }
      })
    }
  },
  mounted() {
    this.fetchProjectList();
  }
};
</script>


<style scoped>
.btn {
  padding: 5px;
  border-radius: 5px;

}

.side-bar a {
  text-decoration: none;
  color: white;
  margin-top: 20px;

}



</style>