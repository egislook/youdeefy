import { Link } from '@reach/router'
import React from 'react';
import { fucss } from 'next-fucss/utils';

import ElemSearch from './search';
import ElemFog from '../../elements/fog';

import { useGlobal } from './hooks';

const image = '/icons/512.png';

export default (props) => {
  
  console.log(props);
  
  const global = useGlobal();
  const { isLoading, errorMessage, handleInfo } = global;
  
  return (
    <section className="prim:8D34D5 dp:flx ai:c mnh:100vh jc:c c:F9FBFD mxw:100pc of:hd bg:1A1D22">
      
      { (isLoading || errorMessage) && <ElemFog 
        image={image}
        onClose={handleInfo} 
        message={!isLoading && errorMessage} /> }
      
      <ElemSearch
        global={global}
        image={image} />
        
    </section>
  )
}