import api from "./api";

export const url = 'delete';

const deleteFilePost = async (data) => {
    return await api.post(url, data)
}

export default deleteFilePost;