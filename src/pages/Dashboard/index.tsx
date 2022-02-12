import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { api } from '../../services/api'
import { Container, MainDashboard, Cards, } from './styles'
import CardEpisode  from '../../components/CardEpisode'
import { Episodes } from '../../types'

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
                            <CardEpisode key={key} data={value} />
                        ))}

                    </Cards>

                </section>

            </MainDashboard>

        </Container>
    )
}