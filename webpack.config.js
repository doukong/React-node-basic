/**
 * Created by limso_000 on 2016-11-11.
 */
module.exports = {
    // 가장 처음 읽을 스크림트 파일
    // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
    entry: './src/index.js',

    //파일을 합치고 ./public/bundle.js. 에 저장한다.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        roote:path.resolve('./src')
    },

    //ES6 문법과 JSX문법을 사용한다.
    module: {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
