import { useAppSelector } from "@/store/hooks"
import ChoosePlaylistItem from "./ChoosePlaylistItem"

const ChoosePlaylist: React.FC = () => {
  const playlists = useAppSelector((state) => state.selections.playlists)
  console.log(playlists);
  
  const isLoading = useAppSelector(state => state.selections.isLoadingPlaylists)

  return <section className="flex-1">
    <h2 className="text-center mb-3">Escolha a Playlist</h2>
    {playlists.length === 0 && !isLoading && (
      <p className="text-center">Não há playlists</p>
    )}
    {isLoading && <p className="text-center">Carregando...</p>}
    {!isLoading && (
      <ul className="flex flex-wrap gap-5 justify-center text-fuchsia-50">
        {playlists.map(playlist => <ChoosePlaylistItem playlist={playlist} key={playlist.id} />)}
      </ul>
    )}
  </section> 
}

export default ChoosePlaylist