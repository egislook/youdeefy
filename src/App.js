import React, { Fragment, Suspense, useEffect, useContext } from 'react'
import { Root, Routes, addPrefetchExcludes, Head, Body } from 'react-static'
//
import { Link, Router } from '@reach/router'
import Playlist from 'screens/playlist'
import Elements from 'youdeefy/elements'
import Components from 'youdeefy/components'
import { GlobalProvider } from 'youdeefy/contexts'

import './style.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

export default (props) => {
  
  useServiceWorker();
  
  return (
    <Fragment>
      <Header />
      <Root>
        <GlobalProvider>
          <Suspense fallback={<Elements.Fog />}>
            <Components.Layout>
              <Components.Player />
              <Router>
                <Playlist path="playlist/:playlistId" />
                <Routes path="*" />
              </Router>
            </Components.Layout>
          </Suspense>
        </GlobalProvider>
      </Root>
    </Fragment>
  )
}

const Header = () => (
  <Head>
    <meta name="theme-color" content="#26292D" />
    <meta name="title" content="YouDeefy" />
    <meta name="description" content="An awesome youtube playlist collector" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="icons/512.png" sizes="512x512" />
    <link type="text/css" rel="stylesheet" href="https://cdn.rawgit.com/noneedsystem/fuico/0.0.8/style.css" />
  </Head>
)

const useServiceWorker = () => {
  useEffect(() => {
    if(typeof document !== 'object') return
    
    if('serviceWorker' in window.navigator)
      window.navigator.serviceWorker.register('/sw.js').then( 
        ({ scope }) => console.log('ServiceWorker registered ', scope),
        (err) =>  console.log('ServiceWorker failed: ', err)
      )
  }, [])
}
