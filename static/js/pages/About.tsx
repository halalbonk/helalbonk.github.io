import { useState } from 'react';
import '../style/pages/about.css';

function About() {
   const [isUtilityExpanded, setUtilityExpanded] = useState(false);
   const [isDistributionExpanded, setDistributionExpanded] = useState(false);
   const toggleUtilityExpand = () => {
      setUtilityExpanded(!isUtilityExpanded);
   };
   const toggleDistributionExpand = () => {
      setDistributionExpanded(!isDistributionExpanded);
   };

   const arrayBottomBar = Array(100).fill(false); //change amount individually when more then 100 elements
   const [isBottomBarExpanded, setBottomBarExpanded] = useState(arrayBottomBar);
   const toggleBottomBarExpand = (index: number) => {
      /* alternative code (open one element at a time): const newArray = [...arrayBottomBar]; */
      const newArray = [...isBottomBarExpanded]; //copy array
      newArray[index] = !newArray[index]; //edit array (true or false - on every button click)
      setBottomBarExpanded(newArray); //replace array with new one
   };

   return (
      <>
         <div className="about-top-container">
            <div className="about-title bonk-font-title">bonk - a brief history</div>
            <div className="about-video-container">
               <iframe className="about-video" src="https://www.youtube.com/embed/l-G5tn6HRco"></iframe>
            </div>
         </div>
         <div className="about-utidist-container about-utidist-container-left margin-top-50">
            <div className="about-ud-title-container">
               <div className="about-ud-title bonk-font-title">utility</div>
               <div className={`${!isUtilityExpanded ? 'about-ud-image' : 'about-ud-image reverse'}`} onClick={toggleUtilityExpand} />
            </div>
            <div className="bonk-font-300 about-ud-text">
               As the true community coin of web3, $BONK's utility comes in the form of its strong community and thriving ecosystem of integrations. To-date $BONK boasts over 131 integrations across 9 separate chains, its adoption continues to grow rapidly having reached over 400,000 holders and
               listings across 25 different centralized and decentralized exchanges.
            </div>
            <div className={`bonk-font-300 ${!isUtilityExpanded ? 'about-ud-text-expand collapsed' : 'about-ud-text-expand'}`}>
               While $BONK's growth to date has been admirable, this promises to be just the beginning for the $BONK community. Concentrated efforts to expand the ecosystem are ongoing and focus on three core pillars each selected to help $BONK in its mission to become the premier community coin in
               web3.
               <br />
               <br />
               These pillars are:
               <br />
               <br />
               <p className="p-title-formatter bonk-font-500">MULTICHAIN</p>$BONK was not designed to be enjoyed by only one chain, therefore continuous efforts are in place to allow holders to buy, bridge, use and enjoy their $BONK regardless of their chain of choice!
               <br />
               <br />
               <p className="p-title-formatter bonk-font-500">DEFI</p>$BONK strives to simplify DeFi for holder and in doing so help them grow their $BONK holdings.
               <br />
               <br />
               <p className="p-title-formatter bonk-font-500">GAMING</p>With over 25 active integrations, $BONK continues to expand its adoption as a preferred in-game currency across blockchain gaming.
            </div>
         </div>
         <div className="about-utidist-container-secondary margin-top-50">
            <div className="about-utidist-animation" />
            <div className="about-utidist-container">
               <div className="about-ud-title-container">
                  <div className="about-ud-title bonk-font-title">distribution</div>
                  <div className={`${!isDistributionExpanded ? 'about-ud-image' : 'about-ud-image reverse'}`} onClick={toggleDistributionExpand} />
               </div>
               <div className="bonk-font-300 about-ud-text">
                  $BONK’s distribution strategy is completely centered around giving back to the community and has primarily focused on two core objectives
                  <br />
                  <br />
                  The first objective was to reward the downtrodden Solana community after an extremely difficult year in 2022.
               </div>
               <div className={`bonk-font-300 ${!isDistributionExpanded ? 'about-ud-text-expand collapsed' : 'about-ud-text-expand'}`}>
                  At the end of 2022, Solana needed some fun and excitement back to be injected back into the network, and what’s more fun than a free community airdrop!
                  <br />
                  <br />
                  So on Christmas Day 2022, 50% of the $BONK supply was airdropped to all the community members that make Solana the thriving community it is today. From NFT degens and DeFi enjoyers to giga brain developers and promising 1/1 artists, everyone in the community woke up on Christmas
                  day to the arrival of this fun community coin in their wallets.
                  <br />
                  <br />
                  In addition to successfully revitalising the Solana community, BONK’s second objective with its distribution strategy has been to align incentives and ensure that the BONK ecosystem continues to thrive well into the future.
                  <br />
                  <br />
                  To achieve this objective, a significant amount of tokens have been earmarked for the BONKDAO to allow community members to form and fund initiatives that light their fire as well as for marketing endeavours, development activities, grants and other activities that further drive
                  BONK’s growth.
                  <br />
                  <br />
                  Finally, propelling the BONK vision forward are it’s early contributors, each dedicated to the long-term success of web3’s true community coin. To prove their loyalty this thriving ecosystem, each contributor is subject to 3 year-long linear vesting schedules ensuring all
                  incentives are aligned for BONK’s long-term success.
               </div>
            </div>
         </div>
         <div className="about-info-container margin-top-50">
            {/* change array index when adding elements on isBottomBarExpanded and toggleBottomBarExpand (max 100) */}
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(0)}>
                  <div className="about-info-container-element-title bonk-font-300">40 solana nft projects</div>
                  <div className={`${!isBottomBarExpanded[0] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[0] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  21% of the coin is being distributed amongst 40 active Solana NFT Projects, representing more than 296,000 individual NFTs. These are spread between high, middle and low cap collections, to prevent the potential accrual of all tokens towards owners of expensive NFTs. This will be
                  based on a snapshot of delisted NFTs, and airdropped via the Famous Fox Federation Tools.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(1)}>
                  <div className="about-info-container-element-title bonk-font-300">solana market participants and defi users</div>
                  <div className={`${!isBottomBarExpanded[1] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[1] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>15.8% of the Supply is going towards Solana market participants and DeFi users.</div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(2)}>
                  <div className="about-info-container-element-title bonk-font-300">solana artist and collectors</div>
                  <div className={`${!isBottomBarExpanded[2] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[2] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  10.5% of the Supply is going towards the Artists and Collectors of 1/1 art, using a snapshot of activity from the Collector.sh team. This will not be proportional to volume traded, but there will be a minimal cutoff.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(3)}>
                  <div className="about-info-container-element-title bonk-font-300">solana developers</div>
                  <div className={`${!isBottomBarExpanded[3] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[3] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  5.3% of the Supply is going towards Developers on the Solana Chain. It's vital to continue rewarding those who build the programs we need to create things like BONK, and will hopefully be the first of many airdrops towards Solana Developers going forward. This is being facilitated
                  by LamportDAO.
                  <br />
                  <br />
                  BONK is a community coin which may be integrated into Solana dApps across the entire network and serve as a unit of account and user participation reward.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(4)}>
                  <div className="about-info-container-element-title bonk-font-300">early contributors</div>
                  <div className={`${!isBottomBarExpanded[4] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[4] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  21% is allocated to the early contributors who helped launch, and continue to advance BONK since its inception. There are 22 individuals included in this allocation, each of whom has provided early support in the form of artwork, token design, marketing, integrations, web
                  development, business development, and provision of early liquidity.
                  <br />
                  <br />
                  Each individual remains dedicated to driving Bonk’s long-term success, and this will be reflected with a 3-year linear token vesting period beginning from January 1st, 2023.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(5)}>
                  <div className="about-info-container-element-title bonk-font-300">bonkdao</div>
                  <div className={`${!isBottomBarExpanded[5] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[5] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  15.8% will go towards a BONK DAO to be used for initiatives conceived by the wider BONK community. A Realms Instance will be established that will then control further Distribution and allocation of BONK for these initiatives. Program authority over the Token will be delegated to
                  the Realms Instance and guided by token holders going forward.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(6)}>
                  <div className="about-info-container-element-title bonk-font-300">initial liquidity</div>
                  <div className={`${!isBottomBarExpanded[6] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[6] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>
                  5.3% has been allocated towards Initial Liquidity Distribution, this is being used in Raydium, Orca, and Solend, alongside other platforms like FFFlip, Monaco Protocol, and the BoiBook. Any rewards earned via this distribution will be returned to the BONKDAO.
               </div>
            </div>
            <div className="about-info-container-element">
               <div className="about-info-container-top-bar" onClick={() => toggleBottomBarExpand(7)}>
                  <div className="about-info-container-element-title bonk-font-300">marketing</div>
                  <div className={`${!isBottomBarExpanded[7] ? 'about-info-container-element-plus' : 'about-info-container-element-plus reverse'}`} />
               </div>
               <div className={`bonk-font-300 ${!isBottomBarExpanded[7] ? 'about-info-container-bottom collapsed' : 'about-info-container-bottom'}`}>5.3% will be used for marketing promotions with teams like AssetDash, and further giveaways and incentives for the promotion of BONK.</div>
            </div>
         </div>
         <div className="about-line-container">
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  21%
                  <br />
                  sol nft projects
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  15.8%
                  <br />
                  market participants and defi users
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  10.5%
                  <br />
                  artists & collectors
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  5.3%
                  <br />
                  solana devs
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  21%
                  <br />
                  early contributors
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  15.8%
                  <br />
                  bonk dao
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline" />
               <div className="about-l-block-text bonk-font-500">
                  5.3%
                  <br />
                  initial liquidity
               </div>
            </div>
            <div className="about-l-block-container">
               <div className="about-l-block-topline last" />
               <div className="about-l-block-text bonk-font-500">
                  5.3%
                  <br />
                  marketing
               </div>
            </div>
         </div>
      </>
   );
}

export default About;
