import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { Search } from './Search'
function App() {
	const [searchString, setSearchString] = useState('');
	return (
		<Container maxWidth='lg' >
			<Grid container justifyContent='center'>
				<Grid item>
					<Search searchString={searchString} onSearchStringChanged={setSearchString} />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
