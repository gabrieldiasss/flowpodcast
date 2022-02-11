import Header from '../../components/Header'
import { Container, MainDashboard, Cards, Card, More, Play } from './styles'

export default function Dashboard() {

    return (
        <Container>

            <Header />

            <MainDashboard>

                <section>
                    <header>
                        <h1>Últimos Episódios</h1>

                        <a href="#">Ver todos</a>
                    </header>

                    <Cards>

                        <Card>
                            <img src="https://i3.ytimg.com/vi/Cko3pI9ulo4/maxresdefault.jpg" alt="" />

                            <div>
                                <div className='line-1' >
                                    <h2>
                                        [GALINHA PINTADINHA] MARCOS
                                        LUPORINI - Flow Podcast #426
                                    </h2>

                                    <More />
                                </div>

                                <div className='line-2' >
                                    <time>01:32:08</time>

                                    <Play />
                                </div>
                            </div>


                        </Card>

                    </Cards>

                </section>

            </MainDashboard>

        </Container>
    )
}