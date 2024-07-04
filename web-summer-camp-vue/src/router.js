import { createMemoryHistory, createRouter } from 'vue-router'

import AccessCode  from './features/access-codes/AccessCode.vue'
import ReviewListComponent  from './features/reviews/ReviewListComponent.vue'

const routes = [
  { path: '/reviews', component: ReviewListComponent },
  { path: '/codes', component: AccessCode },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
