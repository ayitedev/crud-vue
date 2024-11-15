import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from "@/components/pages/PersonneList.vue";
import ProjectCreate from "@/components/pages/PersonneCreate.vue";
import ProjectEdit from "@/components/pages/PersonneEdit.vue";
import ProjectShow from "@/components/pages/PersonneShow.vue";



  const  routes = [
    { path: '/', component: ProjectList },
    { path: '/create', component: ProjectCreate },
    { path: '/edit/:id', component: ProjectEdit },
    { path: '/show/:id', component: ProjectShow },
  ];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;