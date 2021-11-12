import {http} from './api';

export const  getRequestApi = async(
  requestUrl
) => {
  const {data} = await http.get(`/${requestUrl}`);
  return data;
}
