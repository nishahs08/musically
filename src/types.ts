export interface ArtistQueryResponse {
	data: {
		search: {
			artists: {
				nodes: {
					name: string;
					mbid: string;
					fanArt: {
						thumbnails: { url: string }[];
					};
				}[];
			};
		};
	};
}
