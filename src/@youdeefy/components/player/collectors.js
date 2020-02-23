import { POST, GQL } from 'fetchier';
const HASURA_URL = 'https://youdeespot.com/v1alpha1/graphql';

const API_URL = true ? 'https://youdeespot.com' : 'https://pwa-noneede.c9users.io:8081';

export function fetchTrack(body) {
  
  console.log({ body });
  return window.fetch(API_URL + '/api/url', { body: JSON.stringify(body), method: 'POST', headers: { 'content-type': 'application/json' } })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const format = json && json.data && json.data.formats && json.data.formats.find( f => f.itag === 140) || {};
      console.log({ format })
      return format.url;
    })
    .catch(console.warn)
  // return POST({ url: API_URL + '/api/url', body })
  //   // .then(res => res.data)
  //   .then(res => {
  //     console.log(res);
  //     const format = res && res.data && res.data.formats && res.data.formats.find( f => f.itag === '140') || {};
  //     return format.url;
  //   });
}