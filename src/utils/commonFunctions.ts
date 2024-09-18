const getCachedCityData = () => {
  if (typeof localStorage !== 'undefined') {
    const cityData = localStorage.getItem('city');
    return cityData && cityData ? JSON.parse(cityData) : null;
  } else {
    console.error('localStorage is not available.');
    return null; // Return null or handle the absence of localStorage as appropriate
  }
}

// <-- Culture Localstorage data -->
const getCachedCultureData = () => {
  if (typeof localStorage !== 'undefined') {
    const ciltureData = localStorage.getItem('cultures');
    return ciltureData && ciltureData ? JSON.parse(ciltureData) : null;
  } else {
    console.error('localStorage is not available.');
    return null; // Return null or handle the absence of localStorage as appropriate
  }
}

const packageCategoryNames = (category: any) => {
  switch (category) {
    case 3:
    case "3":
      return 'Budget';
    case 4:
    case "4":
      return 'Standard';
    case 5:
    case "5":
      return 'Luxury';
    default:
      return ''; // Default case if the category is not recognized
  }
}

export { getCachedCityData, packageCategoryNames, getCachedCultureData }
