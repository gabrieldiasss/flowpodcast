import SideBar from "./components/SideBar";
import { Container } from "./styles.app";
import { GlobalStyle } from "./styles/global";
import Player from "./components/Player";
import Content from "./components/Content";
import EpisodeContextProvider from "./hook/useEpisode";


export default function App() {

	return (
		<Container>
			<EpisodeContextProvider>
				<GlobalStyle />
				<SideBar />
				<Player />
				<Content />
			</EpisodeContextProvider>
		</Container>
	)
}


