import CardEpisode from "../../components/CardEpisode";
import { useEpisode } from "../../hook/useEpisode";

import { Header, Main } from './styles'

export default function Saved() {

    const { saved } = useEpisode()

    console.log(saved)

    return (
        <>
            <Header>
                <h1>Episódios Salvos</h1>

                <span>{saved.length} {saved.length === 1 ? 'episódio salvo' : 'episódios salvos'}</span>
            </Header>

            <Main>
                {saved.map((value) => (
                    <CardEpisode showButtonDeleteEpisodeSaved={true} key={value.id} data={value} />
                ))}

            </Main>
        </>
    )
}