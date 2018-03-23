module.exports = {
	entry: './src/client/index.js',
	output: {
	  filename: './src/server/public/js/index.js',
	},
	module: {
	  rules: [
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',				
			    options: {
			       presets: ['es2015', 'react']
			    }
			}
		}, 
		{
			test: /\.s[a|c]ss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}
	  ]
	}
}