module.exports = {
	productionSourceMap: false,
	publicPath: './',
	assetsDir: 'assets',
	configureWebpack: {
		optimization: {
			splitChunks: {
				cacheGroups: {
					data: {
						test: /[\\/]src[\\/]data[\\/]/,
						name: 'data',
						chunks: 'all',
						enforce: true
					}
				}
			}
		},
		externals: {
			lodash: '_',
			vue: 'Vue',
			'vue-router': 'VueRouter',
			mdui: 'mdui'
		}
	},
	pwa: {
		workboxPluginMode: 'GenerateSW',
		workboxOptions: {
			exclude: [/\.map$/, /^manifest.*\.js$/, /icons[\\/].*\.(png|svg)$/],
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: new RegExp('^https://cdn\\.bootcss\\.com/'),
					handler: 'cacheFirst',
					options: {
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}
			]
		},
		name: '明日方舟工具箱',
		themeColor: '#212121',
		msTileColor: '#212121',
		appleMobileWebAppStatusBarStyle: '#212121',
		iconPaths: {
			favicon32: 'assets/icons/favicon-32x32.png',
			favicon16: 'assets/icons/favicon-16x16.png',
			appleTouchIcon: 'assets/icons/apple-touch-icon.png',
			msTileImage: 'assets/icons/msapplication-icon-144x144.png',
			maskIcon: 'assets/icons/mask-icon.svg'
		}
	}
};
