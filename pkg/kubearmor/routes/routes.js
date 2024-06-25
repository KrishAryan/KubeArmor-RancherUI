import Dashboard from '../pages/c/_cluster/kubearmor/index.vue'

const routes = [
  {
    name: `c-cluster-kubearmor`,
    path: `c/:cluster/kubearmor`,
    component: Dashboard,
    meta: { product: 'kubearmor', pkg: 'kubearmor'  }
  },
]

export default routes