import axios from 'axios';
export const apiKey = "94d4e1d1cca326265f1326a128fb3c045dff14dd6954c4956143df6e014f054c01ec45cfd69ef067c70fbf7f2f7fa6719ab4cb982ecf492a77ee862c27b96db449ab7ebc31470168ce868bb80e3f827db61fea2a632a73e16452486c3a5d6982cf0a22c917d4287f71c6601fcc296e38d4e64096f194571e934507bcf6886db0";
export const config = { headers: { Authorization: `Bearer ${apiKey}` } };

export async function fetchBonkDataIntegrations() {
    try {
        const response = await axios.get('https://content.bonk.team/api/categories?populate=integrations', config);
        return response.data;
    } catch (error) {
        return undefined;
    }
}

export async function fetchBonkDataBonkart() {
    try {
        const response = await axios.get('https://content.bonk.team/api/arts', config);
        return response.data;
    } catch (error) {
        return undefined;
    }
}
