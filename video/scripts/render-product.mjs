import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
const props = process.argv[2] ?? 'data/sample-product.json';
const output = process.argv[3] ?? `out/beauty-${Date.now()}.mp4`;
mkdirSync('out', {recursive: true});
const result = spawnSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['remotion', 'render', 'src/index.ts', 'BeautyProduct15', output, '--props', props, '--overwrite=false'], {stdio: 'inherit', shell: process.platform === 'win32'});
process.exit(result.status ?? 1);
