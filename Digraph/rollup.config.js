import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import ts from 'typescript'
//import livereload from '@rollup/plugin-livereload';
import { terser } from 'rollup-plugin-terser';
const production = false; // !process.env.ROLLUP_WATCH;

export default [{
    input: './app.tsx',
    output: {
        format: 'esm',
        file: './build/react-app.js',
        sourcemap: !production
    },
    plugins: [
        resolve({ browser: true }),
        commonjs({
            include: 'node_modules/**'
        }),
        typescript({ typescript: ts }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        production ? terser() : null
    ]
}]

