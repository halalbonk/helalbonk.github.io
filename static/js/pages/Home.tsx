import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/pages/home.css';
import '../style/global/layout.css';
import BonkLogo from '../assets/images/bonkog_200.png';
import { DataContext } from '../contexts/data.context';


function Home() {
   const navigate = useNavigate();
   const { categories, integrationsCount } = useContext(DataContext);
   const [isMCExpanded, setMCExpanded] = useState(false);

   const toggleMCExpand = () => {
      setMCExpanded(!isMCExpanded);
   };

   return (
      <>
         <div className='flex row items-center center gap-40 pb-5 pt-5 logo-container'>
            <div><img src={BonkLogo} alt='Logo' /> </div>
            <div className='home-ic-title bonk-font-title'><span>BONK</span></div>
         </div>

         <div className='flex column items-center'>
            <div className='home-ic-subtitle bonk-font-title'>the dog coin of the people</div>
            <div className='home-ic-description bonk-font-300'>Initially launched as a free airdrop to the Solana community on Christmas Day 2022, BONK's adoption has since grown parabolically to emerge as the true community coin of web3</div>
            <div className='flex row gap-40 pt-5 stats-container'>
               <div className='flex column items-center badge '>
                  <div className='home-ic-subtitle bonk-font-title'>649k+</div>
                  <div className='badge-title'>HOLDERS</div>
               </div>
               <div className='flex column items-center badge'>
                  <div className='home-ic-subtitle bonk-font-title'>{integrationsCount}</div>
                  <div className='badge-title'>INTEGRATIONS</div>
               </div>
               <div className='flex column items-center badge'>
                  <div className='home-ic-subtitle bonk-font-title'>10</div>
                  <div className='badge-title'>CHAINS</div>
               </div>
               
            </div>
         </div>

         <div className="home-mission-container">
            <div className="home-m-title bonk-font-title">our mission</div>
            <div className="home-m-description bonk-font-300">
               To become the #1 community coin in web3
               <br />
               We aim on achieving this through expanding our growing list of integrations across{' '}
            </div>
            <div className="home-m-button-grid">
               <div className="home-m-button-mc-container">
                  <button className="home-m-button bonk-font-500" onClick={toggleMCExpand}>
                     <div className="home-m-button-expand-container">
                        <div className="home-m-button-expand-image"></div>
                        multi chain
                     </div>
                  </button>
                  {isMCExpanded && (
                     <div className="home-m-expand-tab-container">
                        <Link className="button expand-button bonk-font-400 mc-button no-text-decoration" target="_blank" to={'https://www.portalbridge.com/#/transfer'}>
                           wormhole
                        </Link>
                        <Link className="button expand-button bonk-font-400 mc-button no-text-decoration" target="_blank" to={'https://buybonk.com/'}>
                           <button className="button expand-button bonk-font-400 mc-button no-text-decoration">buybonk</button>
                        </Link>
                     </div>
                  )}
               </div>
               <button className="home-m-button bonk-font-500" onClick={() => navigate('/integrations?category=DeFi')}>
                  defi
               </button>
               <button className="home-m-button bonk-font-500" onClick={() => navigate('/integrations?category=Gaming')}>
                  gaming
               </button>
            </div>
         </div>

         <div className="home-ubgb-container">
            <div className="home-ub-container">
               <div className="home-ub-container-title bonk-font-title">use bonk</div>
               <div className="home-ub-container-description bonk-font-400">BONK BOASTS {integrationsCount} INTEGRATIONS across the following categories</div>

               <table className="home-ub-table">
                  <tbody>
                     {categories &&
                        categories.map((category) => (
                           <tr onClick={() => navigate(`/integrations?category=${category.attributes.name}`)} key={category.id} className="cursor-pointer">
                              <td className="home-ub-td bonk-font-400">{category.attributes.integrations.data.filter((o) => o.attributes.active === true).length}</td>
                              <td className="home-ub-td align-right bonk-font-400">{category.attributes.name}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
               <button className="button-red expand-button bonk-font-500 ub-button" onClick={() => navigate('/integrations')}>
                  read more
               </button>
            </div>
            <div className="home-gb-container">
               <div className="home-ub-container-title bonk-font-title">get bonk</div>
               <div className="home-ub-container-description bonk-font-400">
                  bonk IS LISTED on over &nbsp;{categories && categories.find((o) => o.attributes.name === 'Exchange')?.attributes.integrations.data.filter((o) => o.attributes.active === true).length}&nbsp; different dexs & CEXs, BUY BONK TODAY!
               </div>
               <table className="home-ub-table">
                  <tbody>
                     {categories &&
                        categories
                           .find((o) => o.attributes.name === 'Exchange')
                           ?.attributes.integrations.data.filter((o) => o.attributes.active === true && o.attributes.featured === true)
                           .sort((a, b) => a.attributes.sort - b.attributes.sort)
                           .map((integration) => (
                              <tr key={integration.id} className="cursor-pointer">
                                 <td className="home-ub-td bonk-font-400">
                                    <Link className="no-text-decoration white uppercase" target="_blank" to={integration.attributes.url}>
                                       {integration.attributes.name}
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                     <tr onClick={() => navigate(`/integrations?category=Exchange`)} className="cursor-pointer">
                        <td className="home-ub-td bonk-font-400">AND MANY MORE</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}

export default Home;
