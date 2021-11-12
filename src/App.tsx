
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Search } from './Search';
//@ts-ignore
import FbImageLibrary from 'react-fb-image-grid';
import { BrowseAlbumsResponse, ReleaseGroup, SearchedArtist } from "./types";
import { findAlbums, searchArtists } from "./gql.service";
import { useDebouce } from "./hooks";

function thumbnailFromAudioDB(releaseGroup: ReleaseGroup) {
	const { theAudioDB } = releaseGroup;
	return theAudioDB?.backImage
		|| theAudioDB?.frontImage;
}

function thumbnailFromFanArt(releaseGroup: ReleaseGroup) {
	const { fanArt } = releaseGroup;
	return (fanArt?.albumCovers || []).find((album) => album.url)?.url;
}

function thumnailURLForAlbum(album: ReleaseGroup) {
	return thumbnailFromAudioDB(album)
		|| thumbnailFromFanArt(album)
		|| 'picture';
}

function App() {
	const [searchString, setSearchString] = useState('');
	const debouncedSearchString = useDebouce(searchString, 500);

	const [matchedArtists, setMatchedArtists] = useState<SearchedArtist[]>([]);
	useEffect(() => {
		async function loadMatchingArtists() {
			setMatchedArtists(await searchArtists(searchString));
		}

		if (debouncedSearchString !== '') {
			loadMatchingArtists();
		} else {
			setMatchedArtists([]);
		}
	}, [debouncedSearchString]);

	const [selectedArtistMBID, setSelectedArtistMBID] = useState<string | null>(null);
	const [albums, setAlbums] = useState<ReleaseGroup[]>([]);
	useEffect(() => {
		async function loadAlbums(mbid: string) {
			setAlbums(await findAlbums(mbid))
		}

		if (selectedArtistMBID) {
			loadAlbums(selectedArtistMBID);
		} else {
			setAlbums([]);
		}
	}, [selectedArtistMBID]);

	const imagesForImageGrid = albums.map((album) => thumnailURLForAlbum(album));
	console.log(imagesForImageGrid);

	return (
		<Container maxWidth='lg' >
			<Grid container justifyContent='center' sx={{ marginTop: '100px' }}>
				<Grid sm={12}>
					<Search
						matchedArtists={matchedArtists}
						searchString={searchString}
						onSearchStringChanged={setSearchString}
						onArtistSelected={(mbid) => setSelectedArtistMBID(mbid)}
					/>
				</Grid>
				<Grid sm={12}>
					<FbImageLibrary images={imagesForImageGrid} />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
