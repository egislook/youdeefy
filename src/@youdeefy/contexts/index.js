import React, { createContext, useState, useEffect } from 'react';
// import { fetchUser, init } from './actions';
// import Cookies from 'js-cookie';

const Context = createContext(null);

export function GlobalProvider({ children, version, env, router, routes }) {
  
  const defaultStatus = { error: null, isLoading: null, info: null };
  
  const [status, setStatus] = useState({ ...defaultStatus, isLoading: true });
  const [confirm, setConfirm] = useState();
  // const [areas, setAreas] = useState();
  // const [user, setUser] = useState();
  // const [token, setToken] = useState(Cookies.get('token'));
  const [store, setStore] = useState({});
  const [handlers, setHandlers] = useState({});
  
  // useEffect(() => {
    
  //   if(!token) 
  //     handleUser().then(handleInit)
  //   else 
  //     fetchUser(token)
  //       .then(handleUser)
  //       .then(handleInit)
  //       .catch(setInfo)
      
  // }, [token]);

  return (
    <Context.Provider value={{ 
      version, env, 
      confirm, handleConfirm,
      routes, handleRoute,
      status, handleClear, handleInfo, handleLoading,
      store, handleGlobalStore,
      addGlobalHandler, getGlobalHandler
      // token, handleToken,
      // areas, setAreas,
      // user, handleUser,
    }}>
      {children}
    </Context.Provider>
  );
  
  
  // Handlers
  
  // function handleToken(token){
  //   token 
  //     ? Cookies.set('token', token)
  //     : Cookies.remove('token');
      
  //   setToken(token);
  // }
  
  // function handleUser(user){
  //   setUser(user);
  //   !user && handleToken();
  //   setStatus(defaultStatus);
    
  //   !user 
  //     ? setRoute('login', { returnUrl: router.asPath })
  //     : router.asPath.includes('login') && setRoute('index')
      
  //   return Promise.resolve(user);
  // }
  
  // function handleInit(user){
  //   return init(token).then(setGeneral)
  // }
  
  function handleConfirm(action){
    console.log(action);
    confirm
      ? action && action()
      : setConfirm(action)
    // export const confirm = (action) => (dispatch, getState) => {
    //   if(action === true){
    //     const fn = getState().app.confirm;
    //     typeof fn === 'function' && dispatch(fn());
    //   }
  
  
    // dispatch(appActionConfirm(action === true || action === false ? false : action));
  }
  
  
  // Status handlers
  function handleInfo(data){
    setStatus({ ...defaultStatus, info: data && data.message || JSON.stringify(data) })
  }
  
  function handleLoading(isLoading){
    setStatus({ ...defaultStatus, isLoading })
  }
  
  function handleClear(){
    setStatus(defaultStatus);
  }
  
  // Store handlers
  function handleGlobalStore(data = {}){
    setStore({ ...store, ...data })
  }
  
  
  // Handler handlers
  function addGlobalHandler(obj){
    setHandlers({ ...handlers, ...obj });
  }
  
  function getGlobalHandler(key){
    return handlers[key];
  }
  
  
  // Route handlers
  function handleRoute(name, query){
    const route = routes[name] || { link: router.query.redirect || name };
    console.log(route);
    router.push(route.link);
  }
}

GlobalProvider.context = Context;
export default Context;