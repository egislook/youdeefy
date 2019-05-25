import React, { useContext } from 'react'
import GlobalContext from 'youdeefy/contexts'
import { fucss } from 'next-fucss/utils'
import { usePlayer } from './hooks'

export default (props) => {
  
  const global = useContext(GlobalContext);
  
  const { track = {}, elem, src, handleTogglePlay, handleChangeTrack, isPlaying, trackInfo, handleChangeTime } = usePlayer(global);
  
  const { duration, currentTime } = trackInfo;
  
  if(!track.id)
    return null;
  
  const percentage = (currentTime / duration) * 100;
  const durationMinsAndSecs = getMinsAndSecs(duration);
  const currentMinsAndSecs = getMinsAndSecs(currentTime);
  
  //style={{backgroundImage: `url(${track.img})`}}
  
  return (
    <div className="ps:fx b,l:0 w:100pc dp:flx">
      <div className="w:100pc mxw:700px">
        <div className="bg:sec bs:2 of:hd dp:flx bs:2 w:100pc">
          <div className="m-rl:0">
            <div onClick={handleTogglePlay} className="bg-sz:cv bg-ps:c lh:60px h:60px w:60px">
              <a className="fs:70pc fw:700 bg:blacka5 w,h:100pc t:0 m-t:3npx">
                { !isPlaying 
                    ? <i className="fu-triangle-right lh:1 fs:150pc" />
                    : <span>{currentMinsAndSecs.minutes}:{currentMinsAndSecs.seconds}</span>
                }
              </a>
            </div>
          </div>
          <div className="w:100pc dp:flx flxd:col jc:sb">
            <div className="dp:flx w:100pc h:100pc ai:c">
              <div className="fs:70pc ta:l m-l:10px">
                <h3>{track.name}</h3>
                <p className="m-t:3px">{track.artist}</p>
              </div>
              <div className="m-r:10px">
                <i className="fu-fast-forward p:7px br:50pc bg:sec600 c:sec300 fs:90pc" onClick={handleChangeTrack} />
              </div>
            </div>
            <div className="bg:blacka3 p-t:3px p-b:5px l:0 w:100pc crs:pt" onClick={ e => onChangeTime(e, handleChangeTime, duration)}>
              <div className="bg:sec h:3px m-l:0" style={{ width: percentage + '%' }} />
            </div>
          </div>
          <audio ref={elem} className="dp:n" id="youtube" autoPlay controls src={src} />
        </div>
      </div>
    </div>
  )
}

function onChangeTime(e, action, duration){
  const { width, left } = e.currentTarget.getBoundingClientRect();
  const currentPercentage = e.clientX - left;
  const currentTime = (currentPercentage / width) * duration;
  action && action(currentTime);
}

function getMinsAndSecs(duration){
  const minutes = parseInt(duration / 60) || 0;
  const seconds = parseInt(duration - (minutes * 60)) || 0;
  return { 
    minutes: minutes < 10 ? '0' + minutes : minutes, 
    seconds: seconds < 10 ? '0' + seconds : seconds 
  }
}