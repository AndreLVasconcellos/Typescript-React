import { useAppSelector } from "@/store/hooks"
import { useEffect, useRef } from "react";

const Header: React.FC = () => {
  // const url = "https://p.scdn.co/mp3-preview/eb49a074d2ba3026e6d08a34315af7e220a00a2a?cid=0b297fa8a249464ba34f5861d4140e58"
  const selectedTrack = useAppSelector((state) => state.selections.selectedTrack)
  console.log(selectedTrack?.preview_url);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (selectedTrack && selectedTrack.preview_url) {
        audioRef.current.src = selectedTrack.preview_url;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [selectedTrack]);
  
  return (
    <header className="bg-stone-800 p-5 flex justify-between items-center">
      <h1 className="text-4xl text-fuchsia-50 font-bold">Spotitrybe</h1>
      <audio ref={audioRef} controls />
    </header>
  )
}

export default Header