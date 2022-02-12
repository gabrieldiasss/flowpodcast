import { Container, Nav } from './styles'

import LogoFlow from '../../assets/logo-flow.svg'
import { Link, Route, Routes } from 'react-router-dom'

export default function SideBar() {

    return (
        <Container>
            <img src={LogoFlow} alt="" />

            <Nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/episodes">Episódios</Link></li>
                    <li><Link to="/saved" >Salvos</Link></li>
                </ul>
            </Nav>

            <p>Não é uma entrevista, <br /> é uma conversa.</p>
        </Container>
    )
}