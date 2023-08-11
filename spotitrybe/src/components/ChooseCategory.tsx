import { useContext } from "react";
import { ChooseCategoryContext } from "./ChooseCategoryContext";
import ChooseCategoryItem from "./ChooseCategoryItem";


const ChooseCategory: React.FC = () => {
  const {categories, isLoading} = useContext(ChooseCategoryContext)

  return <section className="flex-1">
    <h2 className="text-center mb-3">Escolha a categoria</h2>
    {isLoading && <p>Carregando...</p>}
    <ul className="flex flex-wrap gap-5 justify-center">
      {categories.map(category => <ChooseCategoryItem 
        key={category.id} 
        url={category.url} 
        name={category.name} 
        id={category.id} 
      />)}  
    </ul>
  </section>
}

export default ChooseCategory;