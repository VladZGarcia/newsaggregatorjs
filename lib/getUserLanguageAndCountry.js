

// Function to get the user's preferred language

const getUserLanguageAndCountry = () => {
  if (typeof navigator !== 'undefined') {
    try {
      const language = navigator.language || navigator.userLanguage;
      const primaryLanguage = language.split(',')[0].split('-')[0];
      const primaryCountry = language.split(',')[0].split('-')[1];
      return {
        language: primaryLanguage ? primaryLanguage.toLowerCase() : 'es',
        country: primaryCountry ? primaryCountry.toLowerCase() : 'ar,co,mx,ve',
      };
    } catch (error) {
      console.error('Error fetching user language and country:', error);
      return { language: 'es', country: 'ar,co,mx,ve' };
    }
  } else {
    // Server-side: return defaults
    return { language: 'es', country: 'ar,co,mx,ve' };
  }
};
export default getUserLanguageAndCountry;