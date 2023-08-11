import ChooseCategory from '@/components/ChooseCategory'
import { ChooseCategoryContextProvider } from '@/components/ChooseCategoryContext'
import ChoosePlaylist from '@/components/ChoosePlaylist'
import ChooseTracks from '@/components/ChooseTracks'
import Header from '@/components/Header'
import { store } from '@/store'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <main
        className={`${inter.className}`}
      >
        <Header />
        <section className='flex justify-center gap-10 py-10'>
          <ChooseCategoryContextProvider>
            <ChooseCategory />
          </ChooseCategoryContextProvider>
          <ChoosePlaylist />
          <ChooseTracks />
        </section>
      </main>
    </Provider>
  )
}

export default Home