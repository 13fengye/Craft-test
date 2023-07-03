const path = require('path');

module.exports = {
    mode: 'development',
    entry: './pages/home.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?$/, // 匹配所有JSX文件
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader', // 使用babel-loader处理
                    options: {
                        presets: ['@babel/preset-react'], // 使用React预设
                    },
                },
            },
        ],
    },
    resolve: {
        fallback: {
          fs: false,
          stream: false,
          zlib: false,
        }
    }
};
