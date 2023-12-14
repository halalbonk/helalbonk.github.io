import { useEffect } from 'react';

function Nft() {
   useEffect(() => {
      const d = document,
         t = 'script',
         o = d.createElement(t),
         s = d.getElementsByTagName(t)[0];
      o.src = 'https://sdk.bandit.network/sdk/index.js';
      o.type = 'module';
      o.addEventListener(
         'load',
         () => {
            if (typeof (window as any).renderStats === 'function') {
               (window as any).renderStats();
            } else {
               console.error('renderStats function not found');
            }
         },
         false
      );
      (s.parentNode as any).insertBefore(o, s);
   }, []);

   return <div data-access-key="c8dac1e143fb4d21a501c853ab6ea923" id="bad-stats"></div>;
}

export default Nft;
