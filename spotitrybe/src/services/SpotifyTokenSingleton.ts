import { SpotifyGateway } from "./SpotifyGateway"

export class SpotifyTokenSingleton {
  private static accessToken: string | null = null;
  private static oneHour = 60 * 60 * 1000

  static async getAccessToken(): Promise<string> {
    if(SpotifyTokenSingleton.accessToken) {
      return SpotifyTokenSingleton.accessToken
    }

    SpotifyTokenSingleton.accessToken = await SpotifyGateway.login()
    SpotifyTokenSingleton.scheduleTokenRemoval()
    return SpotifyTokenSingleton.accessToken
  }

  private static scheduleTokenRemoval() {
    setTimeout(() => {
      SpotifyTokenSingleton.accessToken = null
    }, SpotifyTokenSingleton.oneHour)
  }
}

export default SpotifyTokenSingleton