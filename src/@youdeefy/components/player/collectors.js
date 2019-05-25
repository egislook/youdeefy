import { POST, GQL } from 'fetchier';
const HASURA_URL = 'https://youdeespot.com/v1alpha1/graphql';

const API_URL = true ? 'https://youdeespot.com' : 'https://pwa-noneede.c9users.io:8081';

export function fetchTrack(body) {
  
  return POST({ url: API_URL + '/api/url', body })
    // .then(res => res.data)
    .then(res => {
      console.log(res);
      const format = res && res.data && res.data.formats && res.data.formats.find( f => f.itag === '140') || {};
      return format.url;
    });
}