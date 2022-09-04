import React from 'react'

function AccordianItem({children, ...restProps}) {
  return (
    <div className='accordianItem' {...restProps}>
      {children}
    </div>
  )
}

export default AccordianItem;