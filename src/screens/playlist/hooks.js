
import { fetchPlaylist, fetchTrack } from '../../libs/fetchers';
import { useEffect, useState } from 'react';

export const usePlaylist = (global = {}, playlistId) => {
  const { handleLoading, handleInfo } = global
  const [ playlist, setPlaylist ] = useState();
  
  useEffect(() => {
    fetchPlaylist(playlistId)
      .then( data => {
        setPlaylist(data);
        global.handleGlobalStore({ tracks: data.tracks })
        handleLoading();
      })
      .catch(handleInfo)
  }, [])
  
  return { playlist }
}