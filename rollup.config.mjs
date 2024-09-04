import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
    input: "src/index.ts",
    output: {
        sourcemap: true,
        file: 'bundle/lib.js',
        format: 'cjs'
    },
    treeshake: false,
    plugins: [typescript({ compilerOptions: { module: 'esnext' }, sourceMap: true })]
});
