const BASE_URL = 'http://localhost:4444/';

export const API = {
  'get-incidents': `${BASE_URL}get-incidents`,
  'get-incident': (id) => `${BASE_URL}get-incident/${id}`,
};
