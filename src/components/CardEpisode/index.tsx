import { Episodes } from '../../types'
import { Card, More, Play } from './styles'

interface CardEpisode {
    data: Episodes;
}

export default function CardEpisode({data}: CardEpisode) {

    return (
        <Card>
            <img src={data.cover} alt="" />

            <div>
                <div className='line-1' >
                    <a href="#" >
                        {data.title}
                    </a>

                    <More />
                </div>

                <div className='line-2' >
                    <time>{data.duration}</time>

                    <Play />
                </div>
            </div>


        </Card>
    )
}