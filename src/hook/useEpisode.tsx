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
}

export const EpisodeContext = createContext<EpisodesContextData>({} as EpisodesContextData)

export default function EpisodeContextProvider({children}: Children) {

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

    return (
        <EpisodeContext.Provider value={{ episodes, setEpisodes, nextEpisodes, setNextEpisodes }} >
            {children}
        </EpisodeContext.Provider>
    )
}

export function useEpisode() {

    const context = useContext(EpisodeContext)

    return context
}