import React from 'react'
import Divider from './Divider'

const SectionHeader = ({heading, about}) => {
  return (
    <div className="col-sm-12 commontop text-center text-light">
          <h4>{heading}</h4>
          <Divider/>
          {about ? <p>{about}</p>: null}
        </div>
  )
}

export default SectionHeader
