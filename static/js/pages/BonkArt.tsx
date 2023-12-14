import { fetchBonkDataBonkart as fetchBonkDataBonkArt } from '../services/strapi.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArtworkApiResponseModel } from '../models/artworks-api-response.modal';
import '../style/pages/bonkart.css';

function BonkArt() {
   const [loading, setLoading] = useState<boolean>(false);
   const [data, setData] = useState<ArtworkApiResponseModel | undefined>(undefined);
   
   async function fetchData() {
      const responseData = await fetchBonkDataBonkArt();
      if (responseData) {
         setData(responseData || undefined);
      }
   }

   useEffect(() => {
      setLoading(true);
      fetchData();
      setLoading(false);
   }, []);

   return loading ? (
      <div className="lds-container">
         <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   ) : (
      <>
         <div className="bonkart-info-container">
            <div className="bonkart-i-left-container">
               <div className="bonkart-i-l-logo-container">
                  <div className="bonkart-i-l-logo" />
               </div>
               <div className="bonkart-i-l-text bonk-font-title">
                  bonk
                  <br />
                  art
                  <br />
                  master
               </div>
            </div>
            <div className="bonkart-i-right-container">
               <div className="bonkart-i-r-text bonk-font-400">BONK Art Master features our iconic BONK shiba inu through the eyes of talented artists onchain. Each artist interpretation is unique. Collectable pieces loved by the BONK community, made for the BONK community.</div>
            </div>
         </div>
         <div className="bonkart-talents-container">
            <div className="bonkart-talents-title bonk-font-title">check out our talented bonk artists</div>
            <div className="bonkart-talents-list-container">
               {data?.data.map(
                  (
                     item 
                  ) => (
                     <div key={item.id} className="bonkart-talent-card-container">
                        <div className="bonkart-talent-card">
                           <div style={{ backgroundImage: `url("${item.attributes.imageUrl}")` }} className="bonkart-talent-image" />
                           <div className="bonkart-talent-info">
                              <div className="bonkart-talent-text bonk-font-400">{item.attributes.name}</div>
                              <Link to={item.attributes.url} target="_blank">
                                 <div className="bonkart-talent-button" />
                              </Link>
                           </div>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </>
   );
}

export default BonkArt;
