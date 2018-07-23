// razni utils pluginovi koji dolaze za webpackom,
// npr. za progress
const webpack = require('webpack');

// Ovaj plugin nam kreira index.html i injectuje u njega
// sve sto je output-ovano iz webpacka (bundle.js, css...)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const loadPresets = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({mode, presets} = {mode: 'production', presets: []}) =>
webpackMerge(
	{
		mode,
		output: {
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin(),
			new webpack.ProgressPlugin()
		]
	},
	modeConfig(mode),
	loadPresets({mode, presets})
)
