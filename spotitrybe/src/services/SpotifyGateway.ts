import { stringify } from "querystring";
import SpotifyTokenSingleton from "./SpotifyTokenSingleton";

const ACESS_TOKEN = 'BQCaAw5Jz45gYrgnuwOW17Qk0M-2Ok4FV6FOfzV90bienA-13Coo4P3k2fMuN32CnQ5OGprsnYMVnG4X53yhBj2IJTMDZANOXUFi8zZhJdOKIbebEpQ'

export class SpotifyGateway {
  // static acessToken: string

  static async login(): Promise<string> {
    const spotifyAuthUrl = 'https://accounts.spotify.com/api/token';

    const response = await fetch(spotifyAuthUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.SPOTIFY_CLIENT_ID || '',
        client_secret: process.env.SPOTIFY_CLIENT_SECRET || '',
      }),
      cache: 'no-store'
    })

    const data = await response.json();
    const {access_token: accessToken} = data
    return accessToken
  } 

  static async getCategories() {
    const url = 'https://api.spotify.com/v1/browse/categories?country=BR&locale=pt_BR';
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching categories')
    }
    const data = await response.json();
    return data
  }

  static async getPlaylists(categoryId: string) {
    const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`;
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching playlists')
    }
    const data = await response.json();
    // console.log(data);
    
    return data
  }

  static async getTracks(playlistId: string) {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching tracks')
    }
    const data = await response.json();
    return data
  }

  // private static async fetch(url: string) {
  //   const token = this.acessToken
  //   console.log(SpotifyGateway.acessToken);
    
  //   console.log(token);
    
  //   const teste = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //   }
  // }
  //   const response = await fetch(url, teste)
  //   return response
  // }

  private static async fetchWithAuth(url: string) {
    const token = await SpotifyTokenSingleton.getAccessToken()
    // this.acessToken = token
    // console.log(this.acessToken);
    
    console.log(token);
 
    const teste = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACESS_TOKEN}`,
    }
  }
    const response = await fetch(url, teste)
    return response
  }
}