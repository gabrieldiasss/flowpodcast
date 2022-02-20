import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container, EpisodeSection, PlayIcon } from './styles'

interface Episode {
    episode: {
        title: string;
        description: string;
        created_at: string;
        duration: string;
    }
}

export default function Episode() {

    let { id } = useParams()

    const [episode, setEpisode] = useState<Episode>({} as Episode)

    useEffect(() => {
        api.get(`episodes/view/${id}`)
            .then((response) => {
                setEpisode(response.data)
            })

    }, [])

    console.log(episode.episode?.duration)

    return (
        <Container>
            <h1>Saiba mais sobre o Episódio</h1>

            <main>
                <EpisodeSection>
                    <h2>{episode.episode?.title}</h2>

                    <div className="infos-duration" >
                        <div>
                            <time>{new Date(episode.episode?.created_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}</time>

                            <span>{episode.episode?.duration}</span>
                        </div>

                        <PlayIcon />

                    </div>

                    <div className="line" ></div>

                    <p>{episode.episode?.description}</p>
                </EpisodeSection>
            </main>

        </Container>
    )
}