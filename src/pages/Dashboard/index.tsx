
import Header from '../../components/Header'
import { Container, MainDashboard, Cards, } from './styles'
import CardEpisode  from '../../components/CardEpisode'
import { useEpisode } from '../../hook/useEpisode'
import { Link } from 'react-router-dom'


export default function Dashboard() {

    const { episodes } = useEpisode()

    return (
        <Container>

            <Header />

            <MainDashboard>

                <section>
                    <header>
                        <h1>Últimos Episódios</h1>

                        <Link to="/episodes" >Ver todos</Link>
                    </header>

                    <Cards>
                        {episodes.slice(0, 2).map((value, key) => (
                            <CardEpisode key={key} data={value} />
                        ))}

                    </Cards>

                </section>

            </MainDashboard>

        </Container>
    )
}