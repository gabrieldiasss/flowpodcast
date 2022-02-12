import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { api } from '../../services/api'
import { Container, MainDashboard, Cards, Card, More, Play } from './styles'

interface Episodes {
    title: string;
    duration: string;
    cover: string;
}

export default function Dashboard() {

    const [episodes, setEpisodes] = useState<Episodes[]>([])
    const [nextEpisodes, setNextEpisodes] = useState('')

    useEffect(() => {
        api.post("episodes/list", {
            params: {
                filter: 'episodes',
            },
        }
        )

            .then(response => {
                setEpisodes(response.data.episodes)

                setNextEpisodes(response.data.paging.next)
            })

            .catch(err => {
                console.log(err)
            })

    }, [])

    console.log(episodes)

    return (
        <Container>

            <Header />

            <MainDashboard>

                <section>
                    <header>
                        <h1>Últimos Episódios</h1>

                        <a href="#">Ver todos</a>
                    </header>

                    <Cards>
                        {episodes.slice(0, 2).map((value, key) => (
                            <Card key={key} >
                                <img src={value.cover} alt="" />

                                <div>
                                    <div className='line-1' >
                                        <a href="#" >
                                            {value.title}
                                        </a>

                                        <More />
                                    </div>

                                    <div className='line-2' >
                                        <time>01:32:08</time>

                                        <Play />
                                    </div>
                                </div>


                            </Card>
                        ))}


                    </Cards>

                </section>

            </MainDashboard>

        </Container>
    )
}