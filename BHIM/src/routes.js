import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Inventory from './components/Inventory.vue'
import RequestDevice from './components/RequestDevice.vue'
import PendingApprovals from './components/PendingApprovals.vue'

export const routes=[
{path:'/',component:Login},
{path:'/home',component:Home},
{path:'/inventory',component:Inventory},
{path:'/requestDevice',component:RequestDevice},
{path:'/pendingApprovals',component:PendingApprovals}
];