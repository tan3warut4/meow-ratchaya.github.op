import React from 'react'
import { MusicVideoContent } from '../../../public/Content'

const MusicVideo = () => {
    return (
        MusicVideoContent.map((contentLink) => {
            return (
                <div key={contentLink.url}>
                    <iframe width="560" height="315"
                        src={contentLink.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>

            )
        })
    )
}

export default MusicVideo