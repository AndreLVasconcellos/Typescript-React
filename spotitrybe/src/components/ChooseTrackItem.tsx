import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Track } from '@/types/Track'
import { setSelectedTrack } from "@/store/slices/selectionsSlice"

type Props = {
  id: string,
  name: string,
  preview_url: string
}

const ChooseTrackItem: React.FC<Props>  = ({ id, name, preview_url }) => {
  const selectedTrack = useAppSelector((state) => state.selections.selectedTrack)
  const dispatch = useAppDispatch()
  
  const isSelected = selectedTrack?.preview_url === preview_url
  
  const colorStyle = isSelected
    ? 'bg-stone-100 hover:bg-stone-200 text-stone-950'
    : 'bg-stone-900 hover:bg-stone-800 text-white'

    const handleItemClick = () => {
      if (isSelected) {
        dispatch(setSelectedTrack(null)); // Dispatching the action using the action creator
      } else {
        dispatch(setSelectedTrack({ id, preview_url }));
      }
    };

    return (
      <li 
      onClick={handleItemClick}
      className={`p-3 rounded-lg cursor-pointer
      active:scale-105 flex flex-col items-center
      ${colorStyle}`}>
        <p>{name}</p>
      </li>
    )
  }
  
  export default ChooseTrackItem