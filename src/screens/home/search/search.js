import React, { useImperativeHandle } from 'react'
import { Link } from '@reach/router'
import { fucss } from 'next-fucss/utils'
import { useSearch } from './hooks';
import Elements from 'youdeefy/elements';

export default (props) => {
  
  const { icon, global, name, title, description, suggestions, placeholder, example, elements = {} } = props;
  const { handleSearchChange, handleSearchSubmit, isValidSearch, search } = useSearch(global, props.handleFetchPlaylists);
  
  return (
    <div className="p-rl:3pc">
      <h1 className="fs:160pc m-t:5px lh:1.1 mxw:200px">{title && title.map(text => (
        <div key={text}>{text}</div>
      ))}</h1>
      <h2 className="fs:95pc m-tb:20px c:56585C">{description}</h2>
      
      <form className={classNameForm()}>
        <i className="fu-search c:56585C m-l:10px m-b:2px" />
        <input
          value={search}
          onChange={handleSearchChange} 
          placeholder={placeholder}
          className={classNameInput()} />
        <i onClick={isValidSearch && handleSearchSubmit || null} className={classNameSubmit(isValidSearch)} />
        {isValidSearch && <i onClick={() => handleSearchChange()} className="fu-cross c:56585C p-r:10px crs:pt m-b:2px" />}
      </form>
      
      <Elements.Logo image={icon} name={name} />
      
      <h2 className="fs:85pc m-b:10px m-t:10px c:56585C mxw:250px">{suggestions}</h2>
    </div>
  )
}

const classNameSubmit = (isValid) => fucss({
  'fu-check p-r:10px crs:pt m-b:2px': true,
  'c:56585C': !isValid,
  'c:green': isValid
})

const classNameForm = () => fucss({
  'w:100pc m-tb:15px dp:flx ai:c bg:26292D br:5px': true
})

const classNameInput = (isPlaylist) => fucss({
  'p:10px fs:85pc w:100pc c:grey200 fw:600 bg:ts': true
})

const classNameHeader = (isPlaylist) => fucss({
  'mxw:700px': true,
  'w:100pc ps:fx t,l:0 dp:flx jc:sb bs:2': isPlaylist
})