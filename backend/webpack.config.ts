import path from 'path';
import { Configuration } from 'webpack';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import DotenvWebpack from 'dotenv-webpack';

const getConfig = (env: { [key: string]: string }, argv: { [key: string]: string }): Configuration => {
    const { outputPath } = argv;

    return {
        target: 'node',
        mode: argv.mode === 'production' ? 'production' : 'development',
        plugins: [
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: [`rimraf ${outputPath}`],
                    blocking: true,
                    parallel: false,
                },
            }),
            new DotenvWebpack(),
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    loader: 'ts-loader',
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
            filename: 'index.js',
            libraryTarget: 'commonjs',
        },
        optimization: {
            minimize: true,
        },
    };
};

export default getConfig;
