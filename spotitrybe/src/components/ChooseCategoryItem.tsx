import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { selectCategoryThunk } from "@/store/slices/selectCategoryThunk"
import { setSelectedCategory } from "@/store/slices/selectionsSlice"

type Props = {
  url: string,
  name: string,
  id: string
}

const ChooseCategoryItem: React.FC<Props> = ({id, name, url}) => {
  const selectedcategory = useAppSelector((state) => state.selections.selectedCategory)
  const dispatch = useAppDispatch()
  const isSelected = selectedcategory === id
  const colorStyle = isSelected
    ? 'bg-stone-100 hover:bg-stone-200 text-stone-950'
    : 'bg-stone-900 hover:bg-stone-800 text-white'

  return (
    <li 
    onClick={() => {
      if(isSelected){
        dispatch(selectCategoryThunk(null))
      } else {
        dispatch(selectCategoryThunk(id))
      }
    }}
    className={`p-3 rounded-lg cursor-pointer
    active:scale-105 flex flex-col items-center
    ${colorStyle}`}>
      <img src={url} alt={name} className="w-16 mb-2 rounded-full" />
      <p className="text-center">{name}</p>
    </li>
  )
}

export default ChooseCategoryItem