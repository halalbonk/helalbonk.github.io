import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/global/header.css';
import '../style/global/text.css';
import '../index.css';

function Header() {
   const navigate = useNavigate();

   const [isHeaderExpanded, setHeaderExpanded] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

   const toggleHeaderExpand = () => {
      setHeaderExpanded(!isHeaderExpanded);
   };

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 991);
      };
      window.addEventListener('resize', handleResize);

      const handleCloseOnClick = (e: any) => {
         if (isHeaderExpanded && !(e.target as any).closest('#expand-button')) {
            setHeaderExpanded(false);
         }
      };

      window.addEventListener('click', handleCloseOnClick);

      return () => {
         window.removeEventListener('resize', handleResize);
         window.removeEventListener('click', handleCloseOnClick);
      };
   }, []);

   return (
      <div className="header-main-container">
         {isMobile ? (
            //mobile view
            <div className="mobile-view">
               <div className="main-area-mobile">
                  <div className="mobile-main-area-top-part">
                     <button className="mobile-title-expand-button bonk-font-900" onClick={toggleHeaderExpand}>
                        <div className="mobile-title-bar-button-container">
                           BONK
                           <div className={`${!isHeaderExpanded ? 'mobile-expand-icon-circle' : 'mobile-expand-icon-circle reverse'}`}>
                              <div className="mobile-expand-icon"></div>
                           </div>
                        </div>
                     </button>
                  </div>
                  <div>
                     <div className={`${!isHeaderExpanded ? 'mobile-expand-container collapsed' : 'mobile-expand-container'}`}>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="/home">
                           HOME
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="/integrations">
                           INTEGRATIONS
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="/about">
                           ABOUT
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="/bonkart">
                           BONK ART
                        </Link>

                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://www.bonkswap.io/" target="_blank">
                           BONKSWAP
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://www.bonkbot.io/" target="_blank">
                           BONKBOT
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://www.portalbridge.com/#/transfer" target="_blank">
                           WORMHOLE
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://buybonk.com/" target="_blank">
                           BUYBONK
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://openbonk.io/" target="_blank">
                           OPENBONK
                        </Link>
                        <Link onClick={toggleHeaderExpand} className="expand-button-mobile bonk-font-400 no-text-decoration" to="https://www.bonkcoin.com/nft" target="_blank">
                           NFT
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            //normal view
            <div className="normal-view">
               {
                  <div className="main-area">
                     <div className="left-container">
                        <button className="button bonk-font-700" onClick={() => navigate('/')}>
                           BONK
                        </button>
                     </div>
                     <div className="right-container">
                        <button className="button bonk-font-400" onClick={() => navigate('/integrations')}>
                           INTEGRATIONS
                        </button>
                        <button className="button bonk-font-400" onClick={() => navigate('/about')}>
                           ABOUT
                        </button>
                        <button className="button bonk-font-400" onClick={() => navigate('/bonkart')}>
                           BONK ART
                        </button>
                        <div>
                           <button id="expand-button" className="button bonk-font-400" onClick={toggleHeaderExpand}>
                              <div className="button-image-container">
                                 <div className="button-arrow-image" />
                                 KEY PROJECTS
                              </div>
                           </button>
                           {isHeaderExpanded && (
                              <div className="header-expand-container">
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="https://www.bonkswap.io/" target="_blank">
                                    BONKSWAP
                                 </Link>
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="https://www.bonkbot.io/" target="_blank">
                                    BONKBOT
                                 </Link>
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="https://www.portalbridge.com/#/transfer" target="_blank">
                                    WORMHOLE
                                 </Link>
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="https://buybonk.com/" target="_blank">
                                    BUYBONK
                                 </Link>
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="https://openbonk.io/" target="_blank">
                                    OPENBONK
                                 </Link>
                                 <Link className="button expand-field bonk-font-400 no-text-decoration" to="/nft">
                                    NFT
                                 </Link>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               }
            </div>
         )}
      </div>
   );
}

export default Header;
