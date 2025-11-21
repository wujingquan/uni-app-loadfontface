<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			this.loadFont();
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			loadFont: function() {
				setTimeout(() => {
					uni.loadFontFace({
							family: 'Overpass',
							global: true,
							source: 'url("http://loadfont.wujingquan.com/Overpass.woff2")',
							success: function (res) {
								console.log('res', res)
								console.log("Overpass Remote Font Load Success")
							},
							fail: function (res) {
								console.log('res', res)
								console.log("Overpass Remote Font Load Failed")
							}
						})
				}, 1000);
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
