<template>
	<view class="content">
		<text class="title overpass">Hello World !</text>
		<text class="title">Hello World !</text>
		<text class="title overpass">Tab1 - 150 - MI</text>
		<text class="title">Tab1 - 150 - MI</text>
		<button @click="goToOne">Go to One</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goToOne() {
				uni.navigateTo({
					url: '/pages/index/one'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		color: #8f8f94;
		font-size: 50px;
		color: #a93361;
		color: #3da414;
	}
	.overpass {
		font-family: "Overpass";
	}
</style>
