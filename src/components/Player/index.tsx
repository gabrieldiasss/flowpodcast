
import { useEpisode } from '../../hook/useEpisode'
import { Container, Content, Play, PauseIcon, ButtonSettings, ChevronsRightIcon, ChevronsLeftIcon, IconsPlayer, AudioPlayer } from './styles'

export default function Player() {

    const {
        selectedEpisode,
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
        isPlaying,
    } = useEpisode()

    return (
        <Container>

            <audio ref={audioPlayer} preload="metadata" onLoadedMetadata={onLoadedMetadata} src={selectedEpisode?.mp3}  ></audio>
            <Content>

                <img src={selectedEpisode?.cover} alt="" />

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

                    <ButtonSettings onClick={togglePlayPouse}>{isPlaying ? <Play /> : <PauseIcon />}</ButtonSettings>

                    <ButtonSettings type='button' onClick={forwardThirty}>
                        <ChevronsRightIcon />
                    </ButtonSettings>
                </IconsPlayer>

            </Content>
        </Container>
    )
}