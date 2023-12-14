import { useEffect, useState } from 'react';
import '../style/global/footer.css';
import '../style/global/text.css';
import '../index.css';

function Footer() {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 991);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <>
         <div className="flex row center gap-50 pt-4 mobile-footer">
            <div>
               <a href="https://twitter.com/bonk_inu" target="_blank" className="footer-button cursor-pointer">
                  twitter
               </a>
            </div>
            <div>
               <a href="https://medium.com/@bonk_inu" target="_blank" className="footer-button cursor-pointer">
                  medium
               </a>
            </div>
            <div>
               <a href="https://discord.com/invite/qaQa6M6mN2" target="_blank" className="footer-button cursor-pointer">
                  discord
               </a>
            </div>
            <div>
               <a href="https://t.me/Official_Bonk_Inu" target="_blank" className="footer-button cursor-pointer">
                  telegram
               </a>
            </div>
            <div>
               <a href="https://www.instagram.com/official_bonk_inu" target="_blank" className="footer-button cursor-pointer">
                  instagram
               </a>
            </div>
            <div>
               <a href="https://www.youtube.com/@bonk_inu" target="_blank" className="footer-button cursor-pointer">
                  youtube
               </a>
            </div>
            <div>
               <a href="https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263" target="_blank" className="footer-button cursor-pointer">
                  solscan
               </a>
            </div>
            <div>
               <a href="https://coinmarketcap.com/currencies/bonk1/" target="_blank" className="footer-button cursor-pointer">
                  coinmarketcap
               </a>
            </div>
            <div>
               <a href="https://assets-global.website-files.com/63d9862f53dc8e65d16eb0e0/63de6fb910d0b94a933c4a2f_BONK-PAPER-040223.pdf" target="_blank" className="footer-button cursor-pointer">
                  white paper
               </a>
            </div>
            <div>
               <a href="https://bonkcoin.myshopify.com/collections/all" target="_blank" className="footer-button cursor-pointer">
                  merch
               </a>
            </div>
         </div>

         <div className="flex row center gap-50 pt-4 mobile-footer footer-text">
            All Rights Reserved © 2023 Bonk Inu
         </div>
      </>
   );
}

export default Footer;
