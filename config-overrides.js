const webpack = require('webpack');
// The env field is good practice even if it is actually not being used currently. Eventually we will want to use .env but once we've scaled up to a point where we need to use it. 
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        timers: require.resolve('timers-browserify'),
        path: require.resolve('path-browserify'),
        fs: false,
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}