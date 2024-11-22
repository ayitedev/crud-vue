<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Nouvelle personne</h2>
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
            Enregistrer
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
  name: 'personne-create',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      personne: {
        nom: '',
        prenom: '',
        profession: '',
        sexe: '',
      },
      isSaving:false,
      sexes: ['Masculin', 'Féminin']

    };
  },
  methods: {
    handleSave() {
      var personne = {
        nom: this.personne.nom,
        prenom: this.personne.prenom,
        sexe: this.personne.sexe,
        profession: this.personne.profession
      };
      this.isSaving = true
      PersonneService.create(personne)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Personne enregistrée avec succès!',
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