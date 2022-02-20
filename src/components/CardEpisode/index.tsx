import { Episodes } from '../../types'
import { Card, More, Play } from './styles'

import { useState } from 'react'
import MoreModal from '../MoreModal'

interface CardEpisode {
    data: Episodes;
}

export default function CardEpisode({data}: CardEpisode) {

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <Card>
            <img src={data?.cover} alt="" />

            <div>
                <div className='line-1' >
                    <a href="#" >
                        {data?.title}
                    </a>

                    <More onClick={openModal} />
                </div>

                <div className='line-2' >
                    <time>{data?.duration}</time>

                    <Play />

                </div>
            </div>

            <MoreModal 
                id={data.id} 
                title={data.title} 
                cover={data.cover}
                duration={data.duration}
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
            />
        </Card>
    )
}