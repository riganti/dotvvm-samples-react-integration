import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;
export default {
    input: './wwwroot/ReactAppModule.tsx',
    output: {
        format: 'esm',
        file: './wwwroot/ReactAppModule.js',
        sourcemap: !production
    },
    treeshake: false,
    plugins: [
        typescript({
            tsconfig: "tsconfig.json"
        }),
        resolve({ browser: true }),
        commonjs({
            include: 'node_modules/**',
            sourceMap: false
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}

