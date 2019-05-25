
import { fetchPlaylists, fetchTrack, importPlaylist } from './collectors';
import { useEffect, useState } from 'react';

export const usePlaylists = (global = {}) => {
  const { handleInfo, handleLoading } = global;
  const [ playlists, setPlaylists ] = useState([]);
  
  useEffect(() => {
    handleFetchPlaylists()
  }, []);
  
  return { playlists, handleInfo, handleFetchPlaylists }
  
  function handleFetchPlaylists(skipIsLoading){
    !skipIsLoading && handleLoading(true);
    fetchPlaylists()
      .then( items => {
        setPlaylists(items);
        handleLoading();
      })
      .catch(handleInfo)
  }
}