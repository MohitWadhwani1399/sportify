import cricketinfo from './assets/components/cricketInfo.vue'
import footballinfo from './assets/components/footballInfo.vue'
import esportsinfo from './assets/components/esportsInfo.vue'
import sports from './assets/components/sports.vue'
export default [
  {path:'/',component:sports},
  {path:'/cricket',component:cricketinfo},
  {path:'/football',component:footballinfo},
  {path:'/esports',component:esportsinfo}
]
