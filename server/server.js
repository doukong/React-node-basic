/**
 * Created by limso_000 on 2016-11-11.
 */
import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';


const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on dev mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/', express.static(__dirname + '/../public'));


app.get('/hello', (req,res) => {
    return res.send ('Hello es6');
});
// 라우트 예제입니다.
import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port,() => {
    console.log('Express working on port',port);
});