import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import type {ProductProps} from './schema';

export const BeautyProduct15 = ({productName, productImage, intro, points, cta}: ProductProps) => {
  const displayProductName = productName.replace(/^\s*(?:(?:No\.?|Ｎｏ\.?|番号)\s*[0-9０-９]+|[0-9０-９]+\s*番)\s*[.．。、:：\-－]?\s*/i, '');
  const frame = useCurrentFrame();
  const scene = Math.min(4, Math.floor(frame / 90));
  const local = frame % 90;
  const opacity = interpolate(local, [0, 10, 80, 89], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const y = interpolate(local, [0, 15], [25, 0], {extrapolateRight: 'clamp'});
  const image = /^(https?:|data:)/.test(productImage) ? productImage : staticFile(productImage);
  const content = scene === 0 ? intro : scene === 4 ? cta : points[scene - 1];
  return <AbsoluteFill style={{background: '#fffaf7', color: '#3d3937', fontFamily: '"Noto Sans CJK JP", "Yu Gothic", sans-serif', padding: '210px 100px 330px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 30, letterSpacing: 3}}>
      <span>ゆる美容ノート</span><span style={{background: '#6f8b79', color: '#fff', borderRadius: 30, padding: '12px 24px'}}>PR</span>
    </div>
    <div style={{position: 'absolute', top: 420, left: 170, width: 740, height: 660, borderRadius: 64, background: '#f1eee7', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
      <Img src={image} style={{width: '85%', height: '85%', objectFit: 'contain', transform: `scale(${interpolate(frame, [0, 449], [1, 1.05])})`}}/>
    </div>
    <div style={{position: 'absolute', top: 1120, left: 100, right: 100, textAlign: 'center', fontSize: 48, fontWeight: 700, lineHeight: 1.35, overflowWrap: 'anywhere'}}>{displayProductName}</div>
    <div style={{position: 'absolute', top: 1300, left: 100, right: 100, opacity, transform: `translateY(${y}px)`, textAlign: 'center'}}>
      <div style={{fontSize: 25, letterSpacing: 4, color: '#6f8b79', marginBottom: 22}}>{scene === 0 ? 'YOUR DAILY CARE' : scene === 4 ? 'CHECK IT OUT' : `POINT 0${scene}`}</div>
      <div style={{fontSize: 48, fontWeight: 600, lineHeight: 1.5, overflowWrap: 'anywhere'}}>{content}</div>
    </div>
    <div style={{position: 'absolute', bottom: 280, left: 100, right: 100, display: 'flex', gap: 10}}>{[0,1,2,3,4].map(i => <div key={i} style={{height: 5, flex: 1, background: i <= scene ? '#6f8b79' : '#dedbd4'}}/>)}</div>
  </AbsoluteFill>;
};
