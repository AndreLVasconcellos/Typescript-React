import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { selectCategoryThunk } from './selectCategoryThunk'
import { selectPlaylistThunk } from './selectPlaylistThunk'
import { Playlist } from '@/types/Playlist'
import { Track } from '@/types/Track'

// interface Track {
//   id: string;
//   name: string;
//   preview_url: string | null;
// }

type TracksResponse =  { tracks: { items: [{ track: { id: string, name: string, preview_url: string } }] } } 

// Define a type for the slice state
interface SelectionsState {
  selectedCategory: string | null,
  selectedPlaylist: string | null,
  selectedTrack: { id: string, preview_url: string } | null,
  isLoadingPlaylists: boolean,
  isLoadingTracks: boolean,
  playlists: Playlist[],
  tracks: Track[] 
}

// Define the initial state using that type
const initialState: SelectionsState = {
  selectedCategory: null,
  selectedPlaylist: null,
  selectedTrack: null,
  isLoadingPlaylists: false,
  isLoadingTracks: false,
  playlists: [],
  tracks: []
}

export const selectionsSlice = createSlice({
  name: 'selections',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload
    },
    setSelectedPlaylist: (state, action: PayloadAction<string | null>) => {
      state.selectedPlaylist = action.payload
    },
    setSelectedTrack: (state, action: PayloadAction<{ id: string, preview_url: string } | null>) => {
      state.selectedTrack = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(selectCategoryThunk.pending, (state) => {
      state.isLoadingPlaylists = true
    })
    builder.addCase(selectCategoryThunk.fulfilled, (state, { payload }) => {
      state.isLoadingPlaylists = false
      state.playlists = payload
    })
    builder.addCase(selectCategoryThunk.rejected, (state, action) => {
      state.isLoadingPlaylists = false
    })
    builder.addCase(selectPlaylistThunk.pending, (state) => {
      state.isLoadingTracks = true
    })
    builder.addCase(selectPlaylistThunk.fulfilled, (state, { payload }) => {
      state.isLoadingTracks = false
      state.tracks = payload
    })
    builder.addCase(selectPlaylistThunk.rejected, (state, action) => {
      state.isLoadingTracks = false
    })
  }
})

export const { setSelectedCategory, setSelectedPlaylist, setSelectedTrack } = selectionsSlice.actions

export default selectionsSlice.reducer