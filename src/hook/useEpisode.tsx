import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { Episodes } from "../types"

interface Children {
    children: ReactNode;
}

interface EpisodesContextData {
    episodes: Episodes[];
    setEpisodes: React.Dispatch<React.SetStateAction<Episodes[]>>;
    nextEpisodes: string;
    setNextEpisodes: React.Dispatch<React.SetStateAction<string>>;
    saved: Episodes[];
    setSaved: React.Dispatch<React.SetStateAction<Episodes[]>>;
    selectedEpisode: Episodes;
    setSelectedEpisode: React.Dispatch<React.SetStateAction<Episodes>>;
    SelectedEpisode: (data: Episodes) => void;
}

export const EpisodeContext = createContext<EpisodesContextData>({} as EpisodesContextData)

export default function EpisodeContextProvider({ children }: Children) {

    const [episodes, setEpisodes] = useState<Episodes[]>([])
    const [nextEpisodes, setNextEpisodes] = useState('')

    const [saved, setSaved] = useState<Episodes[]>([])

    const [selectedEpisode, setSelectedEpisode] = useState<Episodes>({} as Episodes)

    function SelectedEpisode(data: Episodes) {
        setSelectedEpisode(data)
        console.log(data)
    }

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

    return (
        <EpisodeContext.Provider value={{ episodes, setEpisodes, nextEpisodes, setNextEpisodes, saved, setSaved, selectedEpisode, setSelectedEpisode, SelectedEpisode }} >
            {children}
        </EpisodeContext.Provider>
    )
}

export function useEpisode() {

    const context = useContext(EpisodeContext)

    return context
}