import React, { useContext, Fragment, useRef, useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { useGlobal, usePlaylist, usePlayer } from './hooks';
import Playlist from './playlist';
import GlobalContext from 'youdeefy/contexts'
// import Player from './player';
// import Elements from 'youdeefy/elements';

export default (props) => {
  
  const global = useContext(GlobalContext);
  const { playlistId } = props;
  const { playlist } = usePlaylist(global, playlistId);
  
  return (!!playlist && 
    <div className="p-t:30px">
      <header className="ps:fx l,t:0 w:100pc">
        <div style={{ margin: 'auto' }} className="dp:flx bg:sec ai:c jc:sb w:100pc mxw:700px p-rl:10px br:0-0-3px-3px bs:1">
          <Link className="fu-arrow-left p-tb:10px crs:pt p:10px" to="/" />
          <h3 className="p:10px fs:85pc c:grey200 bg:ts ta:r lh:1"><strong>{playlist.title}</strong><br/><small className="fw:100">{playlist.channelTitle}</small></h3>
        </div>
      </header>
      <Playlist 
        playlist={playlist} 
        selectedTrack={global.store.track}
        onSelectTrack={global.getGlobalHandler && global.getGlobalHandler('handleTrack') || console.log} />
      
    </div>
  )
}