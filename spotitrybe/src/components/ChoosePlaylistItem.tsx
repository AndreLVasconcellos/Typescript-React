import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Playlist } from "@/types/Playlist"
import { selectPlaylistThunk } from "@/store/slices/selectPlaylistThunk"

type Props = {
  playlist: Playlist
}

const ChoosePlaylistItem: React.FC<Props> = ({ playlist }) => {
  const selectedPlaylist = useAppSelector((state) => state.selections.selectedPlaylist)
  const dispatch = useAppDispatch()
  const isSelected = selectedPlaylist === playlist.id
  const colorStyle = isSelected
    ? 'bg-stone-100 hover:bg-stone-200 text-stone-950'
    : 'bg-stone-900 hover:bg-stone-800 text-white'
  return (
    <li
    onClick={() => {
      if(isSelected){
        dispatch(selectPlaylistThunk(null))
      } else {
        console.log(playlist.id);
        
        dispatch(selectPlaylistThunk(playlist.id))
      }
    }} 
    className={`p-3 rounded-lg cursor-pointer
    active:scale-105 flex flex-col items-center
    ${colorStyle}`}>
      <p>{playlist.name}</p>
    </li>
  )
}

export default ChoosePlaylistItem