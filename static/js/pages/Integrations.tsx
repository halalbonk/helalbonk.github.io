import { Integration } from '../models/category-api-response.model';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import '../style/pages/integrations.css';
import { DataContext } from '../contexts/data.context';

function Integrations() {
   const [loading, setLoading] = useState<boolean>(false);
   const [category, setCategory] = useState<string>('DeFi');
   const [featuredIntegrations, setFeaturedIntegrations] = useState<any>();
   const [additionalIntegrations, setAdditionalIntegrations] = useState<any>();
   const { categories } = useContext(DataContext);

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const categoryQueryParam = queryParams.get('category');

   useEffect(() => {
      setLoading(true);
      setCategory(categoryQueryParam || 'DeFi');
      setLoading(false);
   }, [categoryQueryParam]);

   useEffect(() => {
      setFeaturedIntegrations(
         categories
            ?.find((categories) => categories.attributes.name === category)
            ?.attributes.integrations.data.sort((a, b) => a.attributes.sort - b.attributes.sort)
            .filter((integration) => integration.attributes.featured === true && integration.attributes.active === true)
      );
      setAdditionalIntegrations(
         categories
            ?.find((categories) => categories.attributes.name === category)
            ?.attributes.integrations.data.sort((a, b) => a.attributes.sort - b.attributes.sort)
            .filter((integration) => integration.attributes.featured === false && integration.attributes.active === true)
      );
   }, [category, categories]);

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
         <div></div>
         <div className="main-container">
            <div className="itg-info-container">
               <div className="itg-c-title bonk-font-title">Integrations</div>
               <div className="itg-c-description bonk-font-300">With over 100 integrations and counting, Bonk has asserted its place as one of the premier community coins in web3. Use the filters below to check out how you can use your $BONK.</div>
               <div className="itg-i-c-usecase-container bonk-font-600">
                  {categories &&
                     categories.map((item: any) => (
                        <button key={item.id} onClick={() => setCategory(item.attributes.name)}
                         className={category === item.attributes.name ? "itg-i-c-usecase-field2" : "itg-i-c-usecase-field"}>
                           {item.attributes.name} 
                        </button>
                     ))}
               </div>
            </div>
            <div className="itg-fdi-container">
               <div className="itg-c-title bonk-font-title">featured {category} integrations</div>
               <div className="itg-c-description bonk-font-300">Below are some of our featured integrations for you to make the most out of your $BONK.</div>
               <div className="itg-fdi-grid-container">
                  {featuredIntegrations &&
                     featuredIntegrations.map((integration: Integration) => (
                        <a key={integration.id} href={integration.attributes.url} target="_blank" className="no-text-decoration itg-fdi-grid-element">
                           <div className="itg-fdi-grid-element-title bonk-font-600">{integration.attributes.name}</div>
                           <div className="itg-fdi-grid-element-description bonk-font-300">{integration.attributes.description}</div>
                        </a>
                     ))}
               </div>
            </div>
            <div className="itg-adi-container">
               <div className="itg-c-title bonk-font-title">additional {category} integrations</div>
               <div className="itg-c-description bonk-font-300">In addition to those highlighted Bonk boasts more than 100 integration in categories ranging from analytics, payments, social and more! Check them all out below!</div>
               <div className="itg-adi-grid-container">
                  {additionalIntegrations &&
                     additionalIntegrations.map((integration: Integration) => (
                        <div key={integration.id} className="itg-adi-grid-element">
                           <div className="itg-adi-grid-element-title bonk-font-500">{integration.attributes.name}</div>
                           <div className="itg-adi-grid-element-content">
                              <div className="itg-adi-grid-element-content-description bonk-font-300">{integration.attributes.description}</div>
                              <a href={integration.attributes.url} target="_blank" className="itg-adi-grid-element-content-logo" />
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default Integrations;
