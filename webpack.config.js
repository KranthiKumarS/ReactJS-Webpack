var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/client.js",
  module: {
    loaders: [
      // transpile ES6/7 to ES5 via babel
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      // bundle LESS and CSS into a single CSS file, auto-generating -vendor-prefixes
			// {
			// 	test: /\.(less|css)$/,
			// 	exclude: /\b(some\-css\-framework|whatever)\b/i,
			// 	loader: ExtractTextPlugin.extract("style?sourceMap", "css?sourceMap!autoprefixer?browsers=last 2 version!less")
			// 	//loader: ExtractTextPlugin.extract("style-loader", "css!less?indentedSyntax=true&sourceMap=true")
			// }
      { test: /\.less$/, use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				},
				publicPath: "/src"
			}) }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ] : [
    // Avoid publishing files when compilation failed:
		new webpack.NoErrorsPlugin(),
    // Aggressively remove duplicate modules:
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // Write out CSS bundle to its own file:
		new ExtractTextPlugin('style.css', { allChunks: true }),
    //ExtractTextPlugin.extract('style-loader', 'css-loader')
  ],
  // Pretty terminal output
	stats: { colors: true },
  // Generate external sourcemaps for the JS & CSS bundles
	devtool: 'source-map',

	// `webpack-dev-server` spawns a live-reloading HTTP server for your project.
	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './src',
		historyApiFallback: true
	}
};
