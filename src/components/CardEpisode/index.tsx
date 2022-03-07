import { Episodes } from '../../types'
import { Card, More, Play } from './styles'

import { useState } from 'react'
import MoreModal from '../MoreModal'
import { useEpisode } from '../../hook/useEpisode';

interface CardEpisodeProps {
    data: Episodes;
    showButtonDeleteEpisodeSaved: boolean;
}

export default function CardEpisode({data, showButtonDeleteEpisodeSaved}: CardEpisodeProps) {

    const { SelectedEpisode } = useEpisode()

    const [modalIsOpen, setIsOpen] = useState(false)
    
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    console.log(data)

    return (
        <Card>
            <img src={data?.cover} alt="" />

            <div>
                <div className='line-1' >
                    <a href='#' onClick={() => SelectedEpisode(data)} >
                        {data?.title}
                    </a>

                    <More onClick={openModal} />
                </div>

                <div className='line-2' >
                    <time>{data?.duration}</time>

                    <Play onClick={() => SelectedEpisode(data)} />

                </div>
            </div>

            <MoreModal 
                id={data.id} 
                title={data.title} 
                cover={data.cover}
                duration={data.duration}
                mp3={data.mp3}
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                showButtonDeleteEpisodeSaved={showButtonDeleteEpisodeSaved}
            />
        </Card>
    )
}