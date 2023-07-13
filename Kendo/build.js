import esbuild from 'esbuild'
import externalGlobalPlugin from 'esbuild-plugin-external-global';

async function main() {
    
    try {
        await esbuild.build({
            format: 'esm',
            bundle: true,
            entryPoints: ["wwwroot/Scheduler.tsx"],
            outdir: `wwwroot`,
            target: [
                'es2020'
            ],
            sourcemap: true,
            treeShaking: false,
            minify: false,
            mangleProps: /^_/,
            external: ["react", "react-dom", "@progress/kendo-react-all"],
            plugins: [
                externalGlobalPlugin.externalGlobalPlugin({
                    'react': 'window.React',
                    'react-dom': 'window.ReactDOM',
                    '@progress/kendo-react-all': 'window.KendoReactAll'
                })
            ]
        });
    } catch (err) {
        console.error(`Cannot build : ${err}`);
    }

}

main();