const webpack = require("webpack");





module.exports = {

    publicPath:"./",

    configureWebpack: {

        plugins: [

            new webpack.ProvidePlugin({

                $: 'jquery',

                jQuery: 'jquery',

                'window.jQuery': 'jquery',

                Popper: ['popper.js', 'default']

            })

        ]

    },
    devServer: {
        host: '127.0.0.1',
        port: 9908,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:9908',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },


}