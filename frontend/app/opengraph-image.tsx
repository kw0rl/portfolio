import { ImageResponse } from 'next/og';
export const alt = 'Azrul Mustaqqim — Useful by design. Thoughtful by detail.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#F8F8F8', color: '#242720', padding: '64px 76px' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}><span style={{ fontSize: 40, fontWeight: 700 }}>azrul.</span><span>Frontend developer / Malaysia</span></div><div style={{ display: 'flex', flexDirection: 'column', marginTop: 80, fontSize: 76, letterSpacing: '-4px', lineHeight: 1.1 }}><span>Useful by design.</span><span style={{ color: '#748873' }}>Thoughtful by detail.</span></div><div style={{ display: 'flex', marginTop: 'auto', paddingTop: 25, borderTop: '1px solid #D1A980', justifyContent: 'space-between', fontSize: 20 }}><span>Azrul Mustaqqim</span><span>azrulism.my</span></div></div>, size);
}
