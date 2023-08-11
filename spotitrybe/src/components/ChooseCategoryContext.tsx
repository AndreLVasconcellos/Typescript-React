import { BackendGateway } from "@/gateways/BackendGateway";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type Category = {
  id: string,
  url: string,
  name: string
}


type ChooseCategoryContextType = {
  isLoading: boolean;
  categories: Category[]
}

const initalValue: ChooseCategoryContextType = {
  isLoading: false,
  categories: []
}

export const ChooseCategoryContext = createContext<ChooseCategoryContextType>(initalValue)

export const ChooseCategoryContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setIsLoading(true)
    BackendGateway.fetchCategories()
      .then(categories => setCategories(categories))
      .finally(() => setIsLoading(false))
  }, [])
  
  return <ChooseCategoryContext.Provider value={{
    categories,
    isLoading
  }}>
    {children}
  </ChooseCategoryContext.Provider>
}