import { Container, Cards } from './styles'
import CardEpisode from '../../components/CardEpisode'
import { useEffect, useState } from 'react'
import { Episodes } from '../../types'
import { api } from '../../services/api'
import { useEpisode } from '../../hook/useEpisode'

export default function Episodess() {

    const { episodes, setEpisodes, nextEpisodes, setNextEpisodes } = useEpisode()

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
            </header>

            <Cards>
                {episodes.map((value) => (
                    <CardEpisode showButtonDeleteEpisodeSaved={false} key={value.id} data={value} />
                ))}

                <button type="button" className='active' onClick={handleMoreEpisodes} >CARREGAR PRÓXIMOS 9 EPISÓDIOS</button>
            </Cards>

        </Container>
    )
}