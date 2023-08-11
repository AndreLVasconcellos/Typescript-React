import { useAppSelector } from "@/store/hooks"
import ChooseTrackItem from "./ChooseTrackItem"

const ChooseTracks: React.FC = () => {
  const tracks = useAppSelector((state) => state.selections.tracks) 
  console.log(tracks);
  
  const isLoading = useAppSelector(state => state.selections.isLoadingTracks)

  return <section className="flex-1">
    <h2 className="text-center mb-3">Escolha a música</h2>
    {tracks.length === 0 && !isLoading && (
      <p className="text-center">Não há tracks</p>
    )}
    {isLoading && <p className="text-center">Carregando...</p>}
    {!isLoading && (
    <ul className="flex flex-wrap gap-5 justify-center  text-fuchsia-50">
      {tracks.map(track => <ChooseTrackItem name={track.name} id={track.id} preview_url={track.preview_url} key={track.id} />)}
    </ul>
    )}
  </section> 
}

export default ChooseTracks