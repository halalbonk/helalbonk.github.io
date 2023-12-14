import React, { useEffect, useState } from 'react';
import { CategoryApiResponseModel, CategoryDataModel } from '../models/category-api-response.model';
import { fetchBonkDataIntegrations } from '../services/strapi.service';
import CategoryJson from '../assets/categories.json';

type DataProviderProps = {
   categories: CategoryDataModel[] | undefined;
   integrationsCount: number;
};

export const DataContext = React.createContext({} as DataProviderProps);

export const DataProvider = ({ children }: any) => {
   const [categories, setCategories] = useState<CategoryDataModel[]>();
   const [integrationsCount, setIntegrationsCount] = useState<number>(0);

   async function fetchData() {
      let data: CategoryApiResponseModel | undefined = await fetchBonkDataIntegrations();
      if (!data) {
        data = CategoryJson as CategoryApiResponseModel
      }

      setCategories(data.data.sort((a, b) => a.attributes.sort - b.attributes.sort));
   }

   useEffect(() => {
      fetchData();
   }, []);

   useEffect(() => {
      if (categories) {
         setIntegrationsCount(
            categories
               .map((category) => category.attributes.integrations.data.filter((o) => o.attributes.active === true).length)
               .reduce((a, b) => a + b)
         );
      }
 }, [categories]);

   return <DataContext.Provider value={{ categories: categories, integrationsCount: integrationsCount }}>{children}</DataContext.Provider>;
};
