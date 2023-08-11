import { BackendGateway } from '@/gateways/BackendGateway'
import { Playlist } from '@/types/Playlist'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setSelectedCategory } from './selectionsSlice'

export const selectCategoryThunk = createAsyncThunk<Playlist[], string | null>(
  'selections/selectCategory',
  async (selectedCategory, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setSelectedCategory(selectedCategory))

      if(selectedCategory) {
        const playlists = await BackendGateway.fetchPlaylists(selectedCategory)
        return playlists
      }

      return []
    } catch (err) {
      return rejectWithValue(undefined)
    }
  }
)

// slice & selectors omitted