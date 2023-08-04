import ChooseTracks from '@/components/ChooseTracks'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
      <main
        className={`${inter.className}`}
      >
        <Header />
        <section className="flex justify-center gap-10 py-10">
        <ChooseTracks />
        </section>
      </main>
  )
}

export default Home