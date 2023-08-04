import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <h1>Spotitrybe</h1>
    </main>
  )
}

export default Home