import React, { createContext, useState } from 'react';

// Create a context for preferences
export const PreferencesContext = createContext();

// Provider component that will wrap around your application
export const PreferencesProvider = ({ children }) => {
  // State to hold the user's preferences
  const [preferences, setPreferences] = useState({
    theme: 'light', // Default theme
    fontSize: 'medium', // Default font size
  });

  // Function to update preferences
  const updatePreferences = (newPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      ...newPreferences,
    }));
  };

  // Provide the preferences state and update function to the context consumers
  return (
    <PreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};
