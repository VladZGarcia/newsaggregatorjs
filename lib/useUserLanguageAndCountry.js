import { useState, useEffect } from 'react';

export default function useUserLanguageAndCountry() {
  const [userLocale, setUserLocale] = useState({ language: 'en', country: 'us' });

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      try {
        const languageTag = navigator.language || navigator.userLanguage || 'en-US';
        const [lang, country] = languageTag.split(/[-_]/);
        setUserLocale({
          language: lang ? lang.toLowerCase() : 'en',
          country: country ? country.toLowerCase() : 'us',
        });
      } catch (error) {
        setUserLocale({ language: 'en', country: 'us' });
      }
    }
  }, []);

  return userLocale;
}
