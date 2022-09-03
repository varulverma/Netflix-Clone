import React from 'react'
import './JumboImage.css'

function JumboImage({...restProps}) {
  return (
    <img className='jumboImage' {...restProps} />
  )
}

export default JumboImage