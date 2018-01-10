import * as path 				from 'path'
import * as webpack 			from 'webpack'
import * as HtmlWebpackPlugin	from 'html-webpack-plugin'

const OpenBrowserPlugin = require('open-browser-webpack-plugin')

export default <any>{
	entry: {

		app: [
			'webpack-hot-middleware/client?reload=true',
			path.join(__dirname, '../index.ts')
		],
		
	},
	output: {

		path: path.join(__dirname, '../../public'),
		publicPath: 'http://localhost:3000/',
		filename: '[name].js',

	},
	module: {

		rules: [
			{
				test: /\.(tsx|ts)?$/,
				use: [ 'awesome-typescript-loader' ]
			},
			{
				test: /\.js$/,
				use: [ 'source-map-loader' ],
				enforce: 'pre'
			},		
			{
				test: /\.styl$/,
				use: [
					'to-string-loader',
					{ 
						loader: 'css-loader', 
						options: { importLoaders: 1 }
					},
					'stylus-loader'
				]
			},	
			{
				include: /\.pug/,
				use: [ 'pug-loader' ]
			},
			{
				test: /\.(png|jpe?g|gif|ico|svg)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]

	},
	devtool: "source-map",
	resolve: {

		extensions: [ '.js', '.ts', '.tsx', '.pug', '.styl' ]

	},
	plugins: [

		new HtmlWebpackPlugin({
			template: path.join(__dirname, "../express/views/template.pug"),
			filename: 'index.html',
			inject: true
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()

	]
}