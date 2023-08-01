import esbuild from 'esbuild'

async function main() {

    try {
        await esbuild.build({
            format: 'esm',
            bundle: true,
            entryPoints: ["wwwroot/PieChart.tsx"],
            outdir: `wwwroot`,
            target: [
                'es2020'
            ],
            sourcemap: true,
            treeShaking: false,
            minify: false,
            mangleProps: /^_/
        });
    } catch (err) {
        console.error(`Cannot build : ${err}`);
    }

}

main();