import { Container, EpisodeSection, PlayIcon } from './styles'

export default function Episode() {

    return (
        <Container>
            <h1>Saiba mais sobre o Episódio:</h1>

            <main>
                <EpisodeSection>
                    <h2>[GALINHA PINTADINHA] MARCOS
                        LUPORINI - Flow Podcast #426</h2>

                    <div className="infos-duration" >
                        <div>
                            <time>July 27, 2021</time>

                            <span>01:32:08</span>
                        </div>
                        
                        <PlayIcon />

                    </div>

                    <div className="line" ></div>

                    <p>Marcos Luporini é um dos criadores da Galinha Pintadinha,
                        o único canal do youtube que o Monark nunca conseguiu
                        bater em views mensais na época do minecraft.</p>
                </EpisodeSection>
            </main>

        </Container>
    )
}