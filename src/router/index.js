import { createRouter, createWebHistory } from 'vue-router';
import { Notify} from 'vant';
import store from '../store'

const Home = () => import  ('../views/home/Home.vue')
const Cartgory = () => import  ('../views/cartgory/Cartgory.vue')
const Detail = () => import  ('../views/detail/Detail.vue')
const Cartshop = () => import  ('../views/cartshop/Cartshop.vue')
const Profile = () => import  ('../views/profile/Profile.vue')
const Register = () => import ('../views/profile/Register.vue')
const Login = () => import ('../views/profile/Login.vue')
const Createorder = () => import ('../views/order/Createorder.vue')
const Address = () => import ('../views/profile/Address.vue')
const Addresslist = () => import ('../views/profile/Addresslist.vue')

const routes = [
	{
	  path: '/',
	  name: 'Defaultome',
	  component: Home,
	  meta:{
		  title:'图书兄弟'
	  }
	},
  {
    path: '/home',
    name: 'Home',
    component: Home,
	meta:{
			  title:'图书兄弟'
	}
  },
  {
    path: '/cartgory',
    name: 'Cartgory',
    component: Cartgory,
	meta:{
			  title:'图书兄弟-商品分类'
	}
  },
  {
    path: '/cartshop',
    name: 'Cartshop',
    component: Cartshop,
	meta:{
			  title:'图书兄弟-购物车',
			  isAuthRequired:true
	}
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
	meta:{
			  title:'图书兄弟-详情页'
	}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
	meta:{
			  title:'图书兄弟-个人中心',
			  isAuthRequired:true
	}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  	meta:{
  			  title:'用户注册'
  	}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  	meta:{
  			  title:'登录'
  	}
  },
  {
    path: '/createorder',
    name: 'Createorder',
    component: Createorder,
  	meta:{
  			  title:'订单'
  	}
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
  	meta:{
  			  title:'地址管理',
			  isAuthRequired:true
  	}
  },
  {
    path: '/addresslist',
    name: 'Addresslist',
    component: Addresslist,
  	meta:{
  			  title:'地址编辑',
			  isAuthRequired:true
  	}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
//导航守卫 
router.beforeEach((to,from,next) => {
	if(to.meta.isAuthRequired && store.state.user.isLogin === false){
		Notify('您还没有登录，请先登录')
		return next('/login')
	}else{
		next()
	}
	
	document.title = to.meta.title
})

export default router
