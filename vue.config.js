const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    configureWebpack: () => {
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/,
                    threshold: 1024,
                    deleteOriginalAssets: false
                })]
            }
        }
    }
}