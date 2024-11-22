
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
            <label htmlFor="prenom">Prénoms</label>
            <input
                v-model="personne.prenom"
                class="form-control"
                id="prenom"
                rows="3"
                name="prenom">
          </div>
          <div class="form-group">
            <label for="fruit">Sexe</label>
            <select v-model="personne.sexe" id="sexe"  class="form-select">
              <option v-for="sexe in sexes" :key="sexe" :value="sexe">
                {{ sexe }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="profession">Profession</label>
            <textarea
                v-model="personne.profession"
                class="form-control"
                id="profession"
                rows="3"
                name="profession"></textarea>
          </div>
          <button
              @click="handleSave()"
              :disabled="isSaving"
              type="button"
              class="btn btn-outline-primary mt-3">
            Modifier personne
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
        sexe: '',
        profession: '',
      },
      isSaving:false,
      sexes: ['Masculin', 'Féminin']
    };
  },
  created() {
    const id = this.$route.params.id;
    PersonneService.get(id)
        .then(response => {
          let personneInfo = response.data
          this.personne.nom = personneInfo.nom
          this.personne.prenom = personneInfo.prenom
          this.personne.sexe = personneInfo.sexe
          this.personne.profession = personneInfo.profession
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
            this.personne.nom = ""
            this.personne.prenom = ""
            this.personne.sexe = ""
            this.personne.profession = ""
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