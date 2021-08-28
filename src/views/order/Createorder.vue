<template>
	<div class="create-order">
		<nav-bar>
			<template v-slot:default>订单预览</template>
		</nav-bar>
		
		<div class="address-wrap">
			<div class="name" @click="goTo">
				<span>姓名</span>
				<span>电话</span>
			</div>
			<div class="address">
				详细地址信息
			</div>
			<van-icon name="arrow"/>
		</div>
		
		<div class="good">
			<div class="good-item">
				<div class="good-img">
					<img src="~assets/image/shuji.png" >
				</div>
				<div class="good-desc">
					<div class="good-title">
						<span>细说PHP</span>
						<span>x100</span>
					</div>
					<div class="good-btn">
						<div class="price">￥100</div>
					</div>
				</div>
			</div>
		</div>
		
		<van-submit-bar
		    class="submit-all"
		    :price="3050" 
		    button-text="生成订单" 
		    @submit="onSubmit" 
		>
		   商品金额
		</van-submit-bar>  
	</div>
</template>

<script>
	import NavBar from 'components/nav-bar/NavBar.vue';
	import { Toast } from 'vant';
	import {reactive, toRefs, onMounted, computed} from 'vue';
	import {useRouter, useRoute} from 'vue-router';
	import {creatOrder, getOrderPreview, payOrder, orderStatus} from 'network/order.js'
	
	export default {
		name:'Createorder',
		components:{
			NavBar
		},
		setup() {
			const router = useRouter()
			const route = useRoute()
			const state = reactive({
				cartList:[],
				address:{}
			})
			
			const init = () =>{
				Toast.loading({message: '加载中...',forbidClick: true,})
				
				getOrderPreview().then(res =>{
					console.log(res)
				})
			}
			onMounted(() => {
				init();
			})
			
			const goTo = () =>{
				router.push({path:'/address'})
			}
			
			const onSubmit = () =>{
				
			}
			
			return {
				...toRefs(state),
				onSubmit,
				goTo,
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.create-order {
		background: #f9f9f9;
		.address-wrap {
			text-align: left;
			margin-bottom: 20px;
			background: #fff;
			position: relative;
			margin-top: 45px;
			padding: 15px;
			font-size: 14px;
			color:#222333;
			.name {
				margin: 20px 0
			}
			.address {
				margin: 20px 0
			}
			.van-icon {
				position: absolute;
				top: 50%;
				right: 10px;
				transform: translateY(-50%);
				font-size: 20px;
			}
			&::before{
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 2px;
				background: -webkit-repeating-linear-gradient(134deg, #ff6c6c 0, #ff6c6c 20%, transparent 25%);
				background-size: 120px;
				content: '';
			}
		}
		.good{
			margin-bottom: 120px;
			.good-item{
				padding: 10px;
				background: #fff;
				display: flex;
				
				.good-img{
					img {
						width: 100px;
						height: auto;
					}
				}
				.good-desc{
					display: flex;
					flex-direction: column;
					flex:1;
					justify-content: space-between;
					padding: 20px;
					.good-title{
						display: flex;
						justify-content: space-between;			
					}
					.good-btn{
						display: flex;
						justify-content: space-between;
						.price{
							color: red;
							font-size: 16px;
							font-weight: bold ;
						}
					}
				}
			}
		}
		.submit-all{
			margin-bottom: 60px;
			z-index:9 !important
		}
	}
</style>
