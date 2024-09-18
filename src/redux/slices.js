import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Home Page
const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    // ... other reducers
  },
  extraReducers: {
    // Handle server-side rendering state rehydration
    [HYDRATE]: (state, action) => {
      // Example of how to only overwrite certain fields
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoginStatus: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//   },
// });

const homePageSlice = createSlice({
  name: "homePage",
  initialState: {
    data: [],
    isLoggedIn: false,
  },
  reducers: {
    getHomeData: (state, action) => {
      state.data = action.payload
    }
  }
})

// Discover Page

const discoverPageSlice = createSlice({
  name: "discoverPage",
  initialState: {
    data: [],
  },
  reducers: {
    getDiscoverData: (state, action) => {
      state.data = action.payload
    }
  }
})

// category_Package slices
const categorypackageSlice = createSlice({
  name: 'categorypackage',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    getCategoryPackage: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Single Package
const singlepackageSlice = createSlice({
  name: 'packagesingle',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    singlePackage: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Special Package
const specialpackageSlice = createSlice({
  name: 'packagespecial',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    specialPackage: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Single Hotel slices
const singlehotelSlice = createSlice({
  name: 'hotelsingle',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    singleHotel: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Single Things to do slices
const singlethingstodoSlice = createSlice({
  name: 'thingstodosingle',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    singleThingstodo: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// City Things to do slices
const citythingstodoSlice = createSlice({
  name: 'citythingstodo',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    CityThingstodo: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// City_topdestination to do slices
const citytopdestinationSlice = createSlice({
  name: 'citytopdestination',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    CityTopdestination: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Single Top Destination slices
const singletopDestinationSlice = createSlice({
  name: 'topDestinationsingle',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    singleTopDestination: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// Single City Slice
const singlecitySlice = createSlice({
  name: 'citysingle',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    singleCity: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});

// car Slice
const carSlice = createSlice({
  name: 'car',
  initialState: {
    data: [], // Initialize data as an empty array
  },
  reducers: {
    getCar: (state, action) => {
      state.data = action.payload; // Set the data in the state
    },
  },
});
// Export actions
export const { getCategoryPackage } = categorypackageSlice.actions;
export const { singlePackage } = singlepackageSlice.actions;
export const { singleHotel } = singlehotelSlice.actions;
export const { singleTopDestination } = singletopDestinationSlice.actions;
export const { singleThingstodo } = singlethingstodoSlice.actions;
export const { specialPackage } = specialpackageSlice.actions;
export const { getCar } = carSlice.actions;
export const { CityThingstodo } = citythingstodoSlice.actions;
export const { CityTopdestination } = citytopdestinationSlice.actions;
export const { singleCity } = singlecitySlice.actions;
export const { getHomeData } = homePageSlice.actions;
export const { getDiscoverData } = discoverPageSlice.actions;
export const { setLoginStatus } = authSlice.actions;


// Export reducers
export const categoryPackageReducer = categorypackageSlice.reducer;
export const singlePackageReducer = singlepackageSlice.reducer;
export const singleHotelReducer = singlehotelSlice.reducer;
export const singleTopdestinationReducer = singletopDestinationSlice.reducer;
export const singleThingstodoReducer = singlethingstodoSlice.reducer;
export const specialPackageReducer = specialpackageSlice.reducer;
export const carReducer = carSlice.reducer;
export const cityThingstodoReducer = citythingstodoSlice.reducer;
export const cityTopdestinationReducer = citytopdestinationSlice.reducer;
export const singleCityReducer = singlecitySlice.reducer;
export const homePageReducer = homePageSlice.reducer;
export const discoverPageReducer = discoverPageSlice.reducer;
export const authReducer = authSlice.reducer;
