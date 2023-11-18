import React from 'react'
import { CommercialContent } from '../../../public/Content'

const Commercial = () => {
    return (
        CommercialContent.map((contentLink) => {
            return (
                <div key={contentLink.url}>
                    <iframe width="560" height="315"
                        src={contentLink.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>

            )
        })
    )
}

export default Commercial