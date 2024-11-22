<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Détail personne</h2>
    <div class="card">
      <div class="card-header">
        <router-link
            class="btn btn-outline-info float-right"
            to="/">Voir toutes les personnes
        </router-link>
      </div>
      <div class="card-body">
        <b className="text-muted">Nom:</b>
        <p>{{personne.nom}}</p>
        <b className="text-muted">Prénom:</b>
        <p>{{personne.prenom}}</p>
        <b className="text-muted">Sexe:</b>
        <p>{{personne.sexe}}</p>
        <b className="text-muted">Profession:</b>
        <p>{{personne.profession}}</p>
      </div>
    </div>
  </layout-div>
</template>

<script>
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
import PersonneService from "@/services/PersonneService";

export default {
  name: 'project-show',
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

  },
};
</script>