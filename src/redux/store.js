import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// Import your slices
import {
  categoryPackageReducer,
  singlePackageReducer,
  singleHotelReducer,
  singleTopdestinationReducer,
  singleThingstodoReducer,
  specialPackageReducer,
  carReducer,
  cityThingstodoReducer,
  cityTopdestinationReducer,
  singleCityReducer,
  homePageReducer,
  discoverPageReducer,
  authReducer
} from './slices';

// const store = configureStore({
//   reducer: {
//     categorypackage: categoryPackageReducer,
//     packagesingle: singlePackageReducer,
//     hotelsingle: singleHotelReducer,
//     topDestinationsingle: singleTopdestinationReducer,
//     thingstodosingle: singleThingstodoReducer,
//     packagespecial: specialPackageReducer,
//     car: carReducer,
//     citythingstodo: cityThingstodoReducer,
//     citytopdestination: cityTopdestinationReducer,
//     citysingle: singleCityReducer,
//     homePage: homePageReducer
//   },
// });

// const combinedReducer = combineReducers({
//   categorypackage: categoryPackageReducer,
//   packagesingle: singlePackageReducer,
//   hotelsingle: singleHotelReducer,
//   topDestinationsingle: singleTopdestinationReducer,
//   thingstodosingle: singleThingstodoReducer,
//   packagespecial: specialPackageReducer,
//   car: carReducer,
//   citythingstodo: cityThingstodoReducer,
//   citytopdestination: cityTopdestinationReducer,
//   citysingle: singleCityReducer,
//   homePage: homePageReducer
// });

const combinedReducer = {
  categorypackage: categoryPackageReducer,
  packagesingle: singlePackageReducer,
  hotelsingle: singleHotelReducer,
  topDestinationsingle: singleTopdestinationReducer,
  thingstodosingle: singleThingstodoReducer,
  packagespecial: specialPackageReducer,
  car: carReducer,
  citythingstodo: cityThingstodoReducer,
  citytopdestination: cityTopdestinationReducer,
  citysingle: singleCityReducer,
  homePage: homePageReducer,
  discoverPage: discoverPageReducer,
  auth: authReducer,

};

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combineReducers(combinedReducer)(state, action);
  }
};

const makeStore = () => {
  // Fetch the initial state from localStorage
  // const isUserLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('userSignInData') : false;
  const isUserLoggedIn = typeof window !== 'undefined' ? Boolean(localStorage.getItem('userSignInData')) : false;

  console.log("vvvv ", typeof window !== 'undefined' ? localStorage.getItem('userSignInData') : '');

  const initialState = {
    auth: {
      isLoggedIn: isUserLoggedIn,
      // ... any other initial state for 'auth'
    }
  };

  return configureStore({
    reducer: masterReducer,
    preloadedState: initialState,
  });
};

// const makeStore = () => configureStore({
//   reducer: masterReducer,
//   preloadedState: initialState, 

// });

const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper };