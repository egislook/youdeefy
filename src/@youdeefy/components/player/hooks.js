
import { fetchTrack } from './collectors';
import { useEffect, useState, useRef } from 'react';

export const usePlayer = (global) => {
  const { handleLoading, handleInfo, addGlobalHandler, store } = global;
  const elem = useRef();
  
  const [ track, setTrack ] = useState();
  const [ position, setPosition ] = useState();
  const [ src, setSrc ] = useState();
  const [ isPlaying, setIsPlaying ] = useState();
  const [ trackInfo, setTrackInfo ] = useState({});
  const [ timer, setTimer ] = useState();
  
  const handleTrack = function(track, position){
    setPosition(position);
    setTrack(track);
    global.handleGlobalStore({ track });
  }
  
  useEffect(() => {
    if(!track) return;
    
    handleLoading(true);
    fetchTrack(track).then( src => {
      // console.log({ src });
      setSrc(src);
      setIsPlaying(true);
      handleLoading();
      
      elem.current.onended = e => handleChangeTrack();
      
      elem.current.onerror = (e) => {
        console.log(e.target.error, e.target.error.code, track.title);
        handleInfo({ message: `${track.artist} - ${track.name} is Not Available` });
        handleChangeTrack();
      }
      elem.current.onloadedmetadata = e => handleTrackProgress();
      
    })
    return clearInterval(timer);
  }, [track])
  
  useEffect(() => {
    addGlobalHandler({ handleTrack });
  }, [global.store]);
  
  return { track, handleTrack, src, handleTogglePlay, isPlaying, elem, trackInfo, handleChangeTime, handleChangeTrack }
  
  
  
  function handleChangeTrack(){
    const nextPosition = store.tracks.length <= position ? 0 : (position || 0) + 1;
    const nextTrack = store.tracks[nextPosition];
    handleTrack(nextTrack, nextPosition);
  }
  
  function handleTogglePlay(){
    !isPlaying 
      ? (elem.current.play(), handleTrackProgress()) 
      : (elem.current.pause(), clearTimeout(timer));
      
    setIsPlaying(!isPlaying);
  }
  
  function handleTrackProgress(){
    const currentTimer = setInterval(() => {
      setTrackInfo({
        duration: elem.current.duration,
        currentTime: elem.current.currentTime
      })
    }, 500);
    setTimer(currentTimer);
  }
  
  function handleChangeTime(currentTime){
    elem.current.currentTime = currentTime;
    setTrackInfo({
      duration: elem.current.duration,
      currentTime
    })
  }
}