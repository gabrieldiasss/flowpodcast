import SideBar from "./components/SideBar";
import { Container } from "./styles.app";
import RoutesComponent from "./routes";
import { GlobalStyle } from "./styles/global";

export default function App() {

	return (
		<Container>
			<GlobalStyle />
			<SideBar />
			<RoutesComponent />
			
		</Container>
	)
}


