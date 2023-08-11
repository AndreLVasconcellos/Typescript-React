import { BackendGateway } from '@/gateways/BackendGateway'
import { Track } from '@/types/Track'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setSelectedPlaylist } from './selectionsSlice'

type TrackVoid = {
    id: '';
    name: '';
    preview_url: '';
  }

export const selectPlaylistThunk = createAsyncThunk<Track[], string | null>(
    'selections/selectPlaylist',
    async (selectedPlaylist, { rejectWithValue, dispatch }) => {
        try {
            console.log(selectedPlaylist);
            
            dispatch(setSelectedPlaylist(selectedPlaylist))

            if(selectedPlaylist) {
                
                console.log('chegou aqui um');
                const tracksMusic = await BackendGateway.fetchTracks(selectedPlaylist)
                console.log(tracksMusic);
                console.log('chegou aqui dois');
                return tracksMusic
                
            }

            return []
        } catch (err) {
            return rejectWithValue(undefined)
        }
    }
)