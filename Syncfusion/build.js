import esbuild from 'esbuild'

async function main() {

    try {
        await esbuild.build({
            format: 'esm',
            bundle: true,
            entryPoints: ["wwwroot/Grid.tsx"],
            outdir: `wwwroot`,
            target: [
                'es2020'
            ],
            sourcemap: true,
            treeShaking: true,
            minify: true
        });
    } catch (err) {
        console.error(`Cannot build : ${err}`);
    }

}

main();