import { Category } from "@/components/ChooseCategoryContext";
import { Playlist } from "@/types/Playlist";
import { SpotifyGateway } from "@/services/SpotifyGateway";
import { Track } from "@/types/Track";


type CategoriesResponse = {
  categories: {
    items: {
      id: string;
      name: string;
      icons: {
        url: string;
      }[]
    }[]
  }
}

type PlaylistsResponse = {
  playlists: {
    items: {
      id: string,
      name: string
    }[]
  }
}

type TracksResponse =  { tracks: { items: [{ track: { id: string, name: string, preview_url: string } }] } } 

// interface Track {
//   id: string;
//   name: string;
//   preview_url: string | null;
// }

// interface TrackItem {
//   track: {
//     id: string;
//     name: string;
//     preview_url: string | null;
//   };
// }

// interface TracksResponse {
//   tracks: {
//     items: TrackItem[];
//   };
// }

export class BackendGateway {
  static async fetchCategories(): Promise<Category[]> {
    const res = await fetch('/api/categories')
    const json = await res.json();
    const data = json as CategoriesResponse;

    return data.categories.items.map(item => {
      return {
        id: item.id,
        name: item.name,
        url: item.icons[0].url
      }
    })
  }

  static async fetchPlaylists(selectedCategory: string): Promise<Playlist[]> {
    const res = await SpotifyGateway.getPlaylists(selectedCategory) as PlaylistsResponse;
    // const res = await fetch(`/api/categories/${selectedCategory}/playlists`)
    // const json = await res.json();
    // const data = json as PlaylistsResponse;

    return res.playlists.items.map(item => {
      return {
        id: item.id,
        name: item.name,
      }
    })
  }

  static async fetchTracks(selectedPlaylist: string): Promise<Track[]> {
    const res = await SpotifyGateway.getTracks(selectedPlaylist) as TracksResponse;
    // const json = await res.json();
    // const data = res as { tracks: { items: [{ track: { id: string, name: string, preview_url: string } }] } }
    console.log(res);
    console.log(res.tracks.items[0].track.preview_url);
    console.log(res.tracks.items[0].track.name);
    console.log(res.tracks.items[0].track.id);
    const data = res.tracks.items.map(item => item)
    console.log(data.slice(0, 10));
    return data.slice(0, 10).map(item => {
      return {
        id: item.track.id,
        name: item.track.name,
        preview_url: item.track.preview_url
      }
    }
    // return {
    //   id: res.tracks.items[0].track.id,
    //   name: res.tracks.items[0].track.name,
    //   preview_url: res.tracks.items[0].track.preview_url
    // }
   )}
}

