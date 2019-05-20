
import { fetchPlaylists, fetchTrack, importPlaylist } from './collectors';
import { useEffect, useState } from 'react';

export const useSearch = ({ handleInfo, handleLoading }, handleFetchPlaylists) => {
  
  const [ search, setSearch ] = useState();
  const [ isValidSearch, setIsValidSearch ] = useState();
  
  return { handleSearchChange, handleSearchSubmit, isValidSearch, search }
  
  function handleSearchChange(e){
    const keywords = e && e.target && e.target.value || '';
    setSearch(keywords)
    setIsValidSearch(!!keywords.length)
  }
  
  function handleSearchSubmit(){
    handleLoading(true);
    importPlaylist(search)
      .then(() => {
        handleFetchPlaylists(true);
        handleSearchChange();
      })
      .catch(handleInfo);
  }
}