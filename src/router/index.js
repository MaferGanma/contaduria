import { createRouter, createWebHistory } from 'vue-router'
// const array = require('./../pages')

// let res = await this.axios.get("/api/cursosAll/" + this.id_carrera);
const routes = [
  {
    path: '/',
    name: 'appWrapper',
    component: () => import('@/pages/AppWrapper.vue'),
    children: [
      {
        path: '/',
        name: 'homeApp',
        component: () => import('@/views/HomeCustom.vue')
      },
      {
        path: '/convocatorias/:tipo_conv',
        name: 'convocatorias',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path: '/detalleConvocatoria/:idConv',
        name: 'detalleConvocatoria',
        component: () => import('@/views/Convocatorias/DetalleConvocatoria.vue')
      },
      {
        path: '/cursos/:tipo_cur',
        name: 'cursos',
        component: () => import('@/views/Cursos/CursosView.vue')
      },
      {
        path: '/detalleCurso/:idCur',
        name: 'detalleCurso',
        component: () => import('@/views/Cursos/DetalleCurso.vue')
      },
      {
        path: '/servicios',
        name: 'servicios',
        component: () => import('@/views/Servicios/ServiciosView.vue')
      },
      {
        path: '/DetalleServicio/:idServ',
        name: 'detalleServicio',
        component: () => import('@/views/Servicios/DetalleServicio.vue')
      },
      {
        path: '/ofertas',
        name: 'ofertas',
        component: () => import('@/views/Ofertas/OfertasView.vue')
      },
      {
        path: '/detalleOferta/:idOfer',
        name: 'detalleOfeta',
        component: () => import('@/views/Ofertas/DetalleOferta.vue')
      },
      {
        path: '/publicaciones',
        name: 'publicacionesView',
        component: () => import('@/views/Publicaciones/PublicacionesView.vue')
      },
      {
        path: '/detallePublicacion/:idPub',
        name: 'detallePublicacion',
        component: () => import('@/views/Publicaciones/DetallePublicacion.vue')
      },
      {
        path: '/gaceta',
        name: 'GacetaView',
        component: () => import('@/views/Gaceta/GacetaView.vue')
      },
      {
        path: '/DetalleGaceta/:idGac',
        name: 'detalleGaceta',
        component: () => import('@/views/Gaceta/DetalleGaceta.vue')
      },
      {
        path: '/eventos',
        name: 'eventosView',
        component: () => import('@/views/Eventos/EventosView.vue')
      },
      {
        path: '/detalleEvento/:idEv',
        name: 'detalleEvento',
        component: () => import('@/views/Eventos/DetalleEvento.vue')
      },
      {
        path: '/videos',
        name: 'videosView',
        component: () => import('@/views/Videos/VideosView.vue')
      },
      {
        path: '/detalleVideo/:idVid',
        name: 'detalleVideo',
        component: () => import('@/views/Videos/DetalleVideo.vue')
      },
      {
        path: '/investigacion',
        name: 'investigacionView',
        component: () => import('@/views/Investigacion/InvestigacionView.vue')
      },
      {
        path: '/DetalleGaceta/:idGac',
        name: 'detalleGaceta',
        component: () => import('@/views/Gaceta/DetalleGaceta.vue')
      },
      {
        path: '/about',
        name: 'aboutView',
        component: () => import('@/views/AboutView.vue')
      },
      // {
      //   path: '/about',
      //   name: 'nosotros',
      //   component: () => import('@/views/AboutView')
      // },
      // {
      //   path: '/about/mision',
      //   name: 'mision',
      //   component: () => import('@/views/AboutView.vue#mision')
      // },
     
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('@/pages/404Page.vue')
  },
  {
    path: '/error_network',
    name: 'error_network',
    component: () => import('@/pages/ErrorNetwork.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
