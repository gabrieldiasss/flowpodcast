import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useEpisode } from "../../hook/useEpisode"
import { api } from "../../services/api"
import { IEpisode, Episodes, ISelectedEpisode } from "../../types"
import { Container, EpisodeSection, PlayIcon } from './styles'

export default function Episode() {

    const { SelectedEpisode } = useEpisode()

    let { id } = useParams()

    const [episode, setEpisode] = useState<IEpisode>({} as IEpisode)

    useEffect(() => {
        api.get(`episodes/view/${id}`)
            .then((response) => {
                setEpisode(response.data)
            })
    }, [])

    function selectEpisodPlayer(data: ISelectedEpisode) {
        SelectedEpisode({ mp3: data.episode.mp3, cover: data.episode.cover})
    }

    return (
        <Container>
            <h1>Saiba mais sobre o Episódio</h1>

            <main>
                <EpisodeSection>
                    <h2 >{episode.episode?.title}</h2>

                    <div className="infos-duration" >
                        <div>
                            <time>{new Date(episode.episode?.created_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}</time>

                            <span>{episode.episode?.duration}</span>
                        </div>

                        <PlayIcon onClick={() => selectEpisodPlayer(episode)} />

                    </div>

                    <div className="line" ></div>

                    <p>{episode.episode?.description}</p>
                </EpisodeSection>
            </main>

        </Container>
    )
}