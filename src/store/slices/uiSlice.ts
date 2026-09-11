import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  activeSlide: number;
}

const initialState: UiState = {
  isScrolled: false,
  isMobileMenuOpen: false,
  activeSlide: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setActiveSlide: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
    },
  },
});

export const { setScrolled, setMobileMenuOpen, setActiveSlide } = uiSlice.actions;
export default uiSlice.reducer;
