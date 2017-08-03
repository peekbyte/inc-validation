import {join} from 'path';

const include = join(__dirname, 'src');

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'build'),
        libraryTarget: 'umd',
        library: 'incValidation'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', include },
            { test: /\.json$/, loader: 'json-loader', include }
        ]
    }
}
