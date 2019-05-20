import React, { useContext, Fragment, useRef, useEffect, useState } from 'react'
import { fucss } from 'next-fucss/utils'

import Search from './search'
import Suggestions from './suggestions'
import Elements from 'youdeefy/elements'
import GlobalContext from 'youdeefy/contexts'
import { withSiteData } from 'react-static'
import { fustyle, cssReload } from 'next-fucss/utils'

export default withSiteData((props) => {
  
  cssReload();
  
  const global = useContext(GlobalContext);
  const suggestionsCallback = useRef();
  
  const [ callbacks, setCallbacks ] = useState({ handleFetchPlaylists: console.log })

  useEffect(() => {
    setCallbacks(suggestionsCallback.current);
  }, [suggestionsCallback])
  
  return (
    <Fragment>
      
      <div className="p-tb:30px mxw:700px w:100pc">
        <Search {...props} global={global} handleFetchPlaylists={callbacks.handleFetchPlaylists} />
        <Suggestions callback={suggestionsCallback} global={global} />
      </div>
        
    </Fragment>
  )
})