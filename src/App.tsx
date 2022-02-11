import SideBar from "./components/SideBar";
import { Container } from "./styles.app";
import { GlobalStyle } from "./styles/global";
import Player from "./components/Player";
import Content from "./components/Content";

export default function App() {

	return (
		<Container>
			<GlobalStyle />
			<SideBar />
			<Player />
			<Content />
		</Container>
	)
}


