// razni utils pluginovi koji dolaze za webpackom,
// npr. za progress
const webpack = require('webpack');

// Ovaj plugin nam kreira index.html i injectuje u njega
// sve sto je output-ovano iz webpacka (bundle.js, css...)
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
	console.log(mode);
	return {
		mode,
		output: {
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin(),
			new webpack.ProgressPlugin()
		]
	}
}
