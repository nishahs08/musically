import {
	BrowseAlbumsResponse,
	SearchArtistResponse,
	SearchedArtist,
} from './types';
import axios from 'axios';
import { release } from 'os';

async function requestQuery<T>(query: string): Promise<T> {
	const { data } = await axios.post<T>('https://graphbrainz.herokuapp.com', {
		query,
	});
	return data;
}

export async function searchArtists(
	artistName: string
): Promise<SearchedArtist[]> {
	try {
		const { data } = await requestQuery<SearchArtistResponse>(`{
            search {
                artists(query: "${artistName}", first: 1) {
                    nodes {
                        name
                        mbid
                        fanArt {
                            thumbnails {
                                url
                            }
                        }
                    }
                }
            }
        }`);
		const artists = data.search?.artists?.nodes || [];
		return artists;
	} catch (error) {
		return [];
	}
}

export async function findAlbums(artistMBID: string) {
	try {
		const { data } = await requestQuery<BrowseAlbumsResponse>(`{
            browse {
                releaseGroups(artist: "${artistMBID}") {
                    nodes {
                        mbid
                        title
                        fanArt {
                            albumCovers {
                                url
                            }
                        }
                        theAudioDB {
                            frontImage
                            backImage
                            spineImage
                            discImage
                        }
                    }
                }
            }
        }`);
		const releaseGroups = data.browse?.releaseGroups.nodes || [];
		return releaseGroups;
	} catch (error) {
		return [];
	}
}
