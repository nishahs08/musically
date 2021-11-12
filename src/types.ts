export interface SearchedArtist {
	name: string;
	mbid: string;
	fanArt: {
		thumbnails: { url: string }[];
	};
}
export interface SearchArtistResponse {
	data: {
		search?: {
			artists?: {
				nodes: SearchedArtist[];
			};
		};
	};
}

export interface ReleaseGroup {
	mbid: string;
	title: string;
	fanArt: {
		albumCovers: {
			url: string;
		}[];
	};
	theAudioDB: {
		frontImage: string | null;
		backImage: string | null;
		spineImage: string | null;
		discImage: string | null;
	} | null;
}

export interface BrowseAlbumsResponse {
	data: {
		browse?: {
			releaseGroups: {
				nodes: ReleaseGroup[];
			};
		};
	};
}
