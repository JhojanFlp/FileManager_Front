import api from "./api";

export const url = 'create';

const addFolderPost = async (data) => {
    return await api.post(url, data)
}

export default addFolderPost