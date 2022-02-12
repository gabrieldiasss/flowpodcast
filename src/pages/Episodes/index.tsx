import { Container, Input, Cards, SearchIcon } from './styles'
import CardEpisode from '../../components/CardEpisode'
import { useEffect, useState } from 'react'
import { Episodes } from '../../types'
import { api } from '../../services/api'
import axios from 'axios'

export default function Episodess() {

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

    function handleMoreEpisodes() {
        api.post('episodes/list',

            {
                params: {
                    filter: 'episodes',
                    // PASSANDO ESSE NOVO JSON, PORQUE A API NECESSITA
                    paging: {
                        previous: null,
                        // PASSANDO A DATA QUE SALVAMOS ANTES PARA CARREGAR OS EPISODIOS \/
                        next: nextEpisodes,
                    },
                },
            }
        )

            .then((response) => {

                // ADICIONANDO OS EPISODIOS NOVOS QUE CARREGAMOS JUNTO COM OS OUTROS
                const newEpisodes = response.data.episodes
                setEpisodes([...episodes, ...newEpisodes])

                // SALVANDO NOVAMENTE A DATA DOS PROXIMOS EPISODIOS
                setNextEpisodes(response.data.paging.next)
            })
    }

    return (
        <Container>

            <header>
                <h1>Todos episódios</h1>

                <Input>
                    <SearchIcon />
                    <input type="text" />
                </Input>
            </header>

            <Cards>
                {episodes.map((value, key) => (
                    <CardEpisode key={key} data={value} />
                ))}

                <button type="button" className='active' onClick={handleMoreEpisodes} >CARREGAR PRÓXIMOS 9 EPISÓDIOS</button>
            </Cards>

        </Container>
    )
}