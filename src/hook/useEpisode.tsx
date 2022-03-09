import { createContext, LegacyRef, ReactNode, useContext, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify";
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
    onLoadedMetadata: () => void;
    calculateTime: (secs: number) => string;
    backThirty: () => void;
    forwardThirty: () => void;
    togglePlayPouse: () => void;
    changeRange: () => void;
    audioPlayer: LegacyRef<HTMLAudioElement>;
    progressBar: any;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
}

export const EpisodeContext = createContext<EpisodesContextData>({} as EpisodesContextData)

export default function EpisodeContextProvider({ children }: Children) {

    const [episodes, setEpisodes] = useState<Episodes[]>([])
    const [nextEpisodes, setNextEpisodes] = useState('')

    const [saved, setSaved] = useState<Episodes[]>(() => {

        const storagedCart = localStorage.getItem('saveds');

        if (storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []

    })

    const [selectedEpisode, setSelectedEpisode] = useState<Episodes>(() => {

        const storagedCart = localStorage.getItem('episode');

        if (storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []

    })

    // state
    const [isPlaying, setIsPlaying] = useState(true)
    const [isPlayingCard, setIsPlayingCard] = useState(false)

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState<number>(0)

    // references
    const audioPlayer = useRef<HTMLAudioElement>(null)
    const progressBar = useRef<any>(null)
    const animationRef = useRef<any>(null)

    const SelectedEpisode = async (data: Episodes) => {

        try {
            await setSelectedEpisode(data)

            click()

            localStorage.setItem('episode', JSON.stringify(data))

        } catch {
            toast.error("Erro na aplicação")
        }

    }

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds
    };

    const calculateTime = (secs: number) => {
        const hours = Math.floor(secs / 3600)
        const returnedHours = hours < 10 ? `0${hours}` : `${hours}`

        const minutes = Math.floor((secs - (hours * 3600)) / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnedHours}:${returnedMinutes}:${returnedSeconds}`
    }

    const click = () => {
        const prevValue = isPlayingCard
        setIsPlayingCard(!prevValue)

        if (prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
            setIsPlaying(false)

        } else {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
            setIsPlaying(false)
        }
    }

    const togglePlayPouse = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)

        if (prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
            changePlayerCurrentTime()

        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
            animationRef.current = requestAnimationFrame(whilePlaying)
        }

    } 

    const changePlayerCurrentTime = () => {

        try {

            progressBar.current.style.setProperty(
                '--width', `${progressBar.current.value / duration * 100}%`
            )
    
            setCurrentTime(progressBar.current.value)
    
            localStorage.setItem('currentTime', JSON.stringify(progressBar.current.value))

        } catch {
            toast.error("Erro interno")
        }
      
    }

    function whilePlaying() {
        progressBar.current.value = audioPlayer.current.currentTime
        animationRef.current = requestAnimationFrame(whilePlaying)
        changePlayerCurrentTime()
    }

    const timeTravel = (newTime: number) => {
        progressBar.current.value = newTime;
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime()
    }

    const backThirty = () => {
        timeTravel(Number(progressBar.current.value) - 30);
        changeRange()
    }

    const forwardThirty = () => {
        timeTravel(Number(progressBar.current.value) + 30);
        changeRange()
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
        <EpisodeContext.Provider value={{
            episodes,
            setEpisodes,
            nextEpisodes,
            setNextEpisodes,
            saved,
            setSaved,
            selectedEpisode,
            setSelectedEpisode,
            SelectedEpisode,
            onLoadedMetadata,
            calculateTime,
            backThirty,
            forwardThirty,
            togglePlayPouse,
            audioPlayer,
            changeRange,
            currentTime,
            progressBar,
            duration,
            isPlaying
        }}
        >
            {children}
        </EpisodeContext.Provider>
    )
}

export function useEpisode() {

    const context = useContext(EpisodeContext)

    return context
}