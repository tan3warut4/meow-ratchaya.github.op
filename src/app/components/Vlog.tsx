import React from 'react'
import { VlogContent } from '../../../public/Content'

const Vlog = () => {
  return (
    VlogContent.map((content)=>{
        return(
            <div key={content.url}>
                  <iframe width="560" height="315"
                        src={content.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
            </div>
        )
    })
  )
}

export default Vlog