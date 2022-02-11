import { Container, Nav } from './styles'

import LogoFlow from '../../assets/logo-flow.svg'

export default function SideBar() {

    return (
        <Container>
            <img src={LogoFlow} alt="" />

            <Nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Bibliotecas</a></li>
                    <li><a href="#">Salvos</a></li>
                </ul>
            </Nav>

            <p>Não é uma entrevista, <br /> é uma conversa.</p>
        </Container>
    )
}