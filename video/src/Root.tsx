import {Composition} from 'remotion';
import sample from '../data/sample-product.json';
import {BeautyProduct15} from './BeautyProduct15';
import {productSchema} from './schema';
export const Root = () => <Composition id="BeautyProduct15" component={BeautyProduct15}
  width={1080} height={1920} fps={30} durationInFrames={450}
  schema={productSchema} defaultProps={productSchema.parse(sample)}
  calculateMetadata={({props}) => ({props: productSchema.parse(props)})}/>;
