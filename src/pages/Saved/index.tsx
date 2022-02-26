import axios from "axios";
import { useEffect } from "react";
import CardEpisode from "../../components/CardEpisode";
import { useEpisode } from "../../hook/useEpisode";

import { Header, Main } from './styles'

export default function Saved() {

    const { saved, setSaved } = useEpisode()

    useEffect(() => {
        axios.get("http://localhost:5000/saved")
            .then(response => {
                setSaved(response.data)
            })


    }, [])

    return (
        <>
            <Header>
                <h1>Episódios Salvos</h1>

                <span>{saved.length} {saved.length <= 1 ? 'episódio salvo' : 'episódios salvos'}</span>
            </Header>

            <Main>
                {saved.map((value) => (
                    <CardEpisode showButtonDeleteEpisodeSaved={true} key={value.id} data={value} />
                ))}

            </Main>
        </>
    )
}