import Home from './Home'
import Login from './Login'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
