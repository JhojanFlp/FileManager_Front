import api from "./api";

 export const url = 'show';

 const filesGet = async () => {
    return await api.get(url);
 }

 export default filesGet;