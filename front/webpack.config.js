const path = require('path')

module.exports = {
    name: 'react-projec',
    mode: 'development',
    resolve:{   
        extensions:['.js','.jsx','.css']
    },
    entry:{
        app:['./src/index']
    },

    module:{
        rules:[{                        
            test:/\.jsx?/,
            loader:'babel-loader', //webpack과 babel을 연결해주는 babel 라이브러리
            options:{
                presets:[
                    '@babel/preset-env', //옛날 브라우저에서도 환경에 맞게 실행해주는 애
                    '@babel/preset-react' //JSX를 사용하기 위해
                ]
            }
        },
        {
        	test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        }
    ]        
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'public'),
        },
        compress:true,
        port:4000, 
        hot:true, 
        historyApiFallback:true,
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}