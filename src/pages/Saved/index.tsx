import axios from "axios";
import { useEffect, useState } from "react";
import CardEpisode from "../../components/CardEpisode";
import { useEpisode } from "../../hook/useEpisode";
import { Episodes } from "../../types";

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
            <h1>Episódios Salvos</h1>

            <main>
                {saved.map((value) =>(
                    <CardEpisode showButtonDeleteEpisodeSaved={true} key={value.id} data={value} />
                ))}
                
            </main>
        </>
    )
}