import React, { useImperativeHandle } from 'react'
import { usePlaylists } from './hooks'
import Elements from 'youdeefy/elements'

export default ({ global, callback }) => {
  
  const { playlists, handleFetchPlaylists } = usePlaylists(global);
  
  useImperativeHandle(callback, () => ({ handleFetchPlaylists }) );
  
  return (
    <div className="m-t:10px of:auto mxw:700px w:100vw md-p-rl:3pc">
      <div className="dp:flx">
        { playlists.map(ElemPlaylistPreview) }
      </div>
    </div>
  )
}

const ElemPlaylistPreview = ({ img, title, channelTitle, playlistId }) => (
  <Elements.Link key={title} className="mdx-m:5px m:10px m-l:0" to={'/playlist/' + playlistId }>
    <span className="ps:rl w:200px of:hd bg:26292D bs:2 br:5px m-b:20px hv-scl:1.05_bg:black ts:all hv-try:0_h4">
      <img className="w:100pc dp:bk" src={img} />
      <h4 className="p:10px ps:ab w,h:100pc bg:blacka7 dp:flx ai:c t,l:0 md-try:100pc ts:all">
        <span>
          {title}<br /><small className="fs:80pc fw:300">{channelTitle}</small>
        </span>
      </h4>
    </span>
  </Elements.Link>
)