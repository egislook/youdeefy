import React, { useContext } from 'react'
import GlobalContext from 'youdeefy/contexts'
import Elements from 'youdeefy/elements'
import { withSiteData } from 'react-static'


export default withSiteData((props) => {
  const global = useContext(GlobalContext);
  const { handleInfo, status } = global;
  
  return (
    <main className="prim:8D34D5 dp:flx ai:c mnh:100vh jc:c c:F9FBFD mxw:100pc of:hd bg:1A1D22">
      { 
        (status.isLoading || status.info) && 
          <Elements.Fog 
            image={props.icon}
            onClose={handleInfo} 
            message={!status.isLoading && status.info} /> 
      }
      {props.children}
    </main>
  )
})