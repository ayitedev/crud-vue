
<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Editer personne</h2>
    <div class="card">
      <div class="card-header">
        <router-link
            class="btn btn-outline-info float-right"
            to="/">Voir toutes les personnes
        </router-link>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label htmlFor="nom">Nom</label>
            <input
                v-model="personne.nom"
                type="text"
                class="form-control"
                id="nom"
                name="nom"/>
          </div>
          <div class="form-group">
            <label htmlFor="prenom">Prénom</label>
            <textarea
                v-model="personne.prenom"
                class="form-control"
                id="prenom"
                rows="3"
                name="prenom"></textarea>
          </div>
          <button
              @click="handleSave()"
              :disabled="isSaving"
              type="button"
              class="btn btn-outline-primary mt-3">
            Enregistrer personne
          </button>
        </form>
      </div>
    </div>
  </layout-div>
</template>

<script>
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
import PersonneService from "@/services/PersonneService";

export default {
  name: 'personne-edit',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      personne: {
        nom: '',
        prenom: '',
      },
      isSaving:false,
    };
  },
  created() {
    const id = this.$route.params.id;
    PersonneService.get(id)
        .then(response => {
          let personneInfo = response.data
          this.personne.nom = personneInfo.nom
          this.personne.prenom = personneInfo.prenom
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
        })
  },
  methods: {
    handleSave() {
      this.isSaving = true
      const id = this.$route.params.id;
      PersonneService.update(id, this.personne)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Personne modifiée avec succès!',
              showConfirmButton: false,
              timer: 1500
            })
            this.isSaving = false
            this.project.name = ""
            this.project.description = ""
            return response
          })
          .catch(error => {
            this.isSaving = false
            Swal.fire({
              icon: 'error',
              title: 'An Error Occured!',
              showConfirmButton: false,
              timer: 1500
            })
            return error
          });
    },
  },
};
</script>