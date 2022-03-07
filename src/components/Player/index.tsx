import { useRef, useState } from 'react'
import { useEpisode } from '../../hook/useEpisode'
import { Container, Content, Play, PauseIcon, ButtonSettings, ChevronsRightIcon, ChevronsLeftIcon, IconsPlayer, AudioPlayer } from './styles'

export default function Player() {

    const { selectedEpisode } = useEpisode()

    // state
    const [isPlaying, setIsPlaying] = useState(true)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    // references
    const audioPlayer = useRef<HTMLAudioElement>()
    const progressBar = useRef<any>()
    const animationRef = useRef<any>()

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

    const togglePlayPouse = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)

        if (prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }

    } // 6468

    function whilePlaying() {
        progressBar.current.value = audioPlayer.current.currentTime
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const timeTravel = (newTime) => {
        progressBar.current.value = newTime;
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime()
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            '--width', `${progressBar.current.value / duration * 100}%`
        )
        setCurrentTime(progressBar.current.value)
    }

    const backThirty = () => {
        timeTravel(Number(progressBar.current.value) - 30);
        changeRange()
    }

    const forwardThirty = () => {
        timeTravel(Number(progressBar.current.value) + 30);
        changeRange()
    }

    return (
        <Container>

            <audio ref={audioPlayer} preload="metadata" onLoadedMetadata={onLoadedMetadata} src={selectedEpisode.mp3} ></audio>
            <Content>

            <img src={selectedEpisode.cover} alt="" />

                <AudioPlayer>

                    <span  >
                        {calculateTime(currentTime)}
                    </span>

                    <div>
                        <input
                            ref={progressBar}
                            type="range"
                            className='progressBar'
                            defaultValue="0"
                            onChange={changeRange}
                            onLoadedMetadata={onLoadedMetadata}
                        />
                    </div>

                    <span>
                        {calculateTime(duration)}
                    </span>
                </AudioPlayer>


                <IconsPlayer>
                    <ButtonSettings onClick={backThirty} ><ChevronsLeftIcon /></ButtonSettings>

                    <ButtonSettings onClick={togglePlayPouse}>{isPlaying ? <Play />  :  <PauseIcon/> }</ButtonSettings>

                    <ButtonSettings type='button' onClick={forwardThirty}>
                        <ChevronsRightIcon />
                    </ButtonSettings>
                </IconsPlayer>

            </Content>

        </Container>
    )
}