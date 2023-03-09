import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { Configuration, DefinePlugin } from 'webpack';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const getConfig = (env: { [key: string]: string }, argv: { [key: string]: string }): Configuration => {
    require('dotenv').config();

    const { outputPath } = argv;
    console.log(env, argv);

    return {
        target: 'node',
        mode: argv.mode === 'production' ? 'production' : 'development',
        externals: [nodeExternals()],
        plugins: [
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: [`rimraf ${outputPath}`],
                    blocking: true,
                    parallel: false,
                },
            }),
            new DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    loader: 'ts-loader',
                    options: {},
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                src: path.resolve(__dirname, 'src'),
            },
            plugins: [new TsconfigPathsPlugin()],
        },
        output: {
            path: path.join(__dirname, '.dist'),
        },
        optimization: {
            moduleIds: 'deterministic',
            splitChunks: {
                chunks: 'all',
            },
        },
    };
};

export default getConfig;