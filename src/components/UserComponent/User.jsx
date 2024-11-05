// src/components/UserComponent/User.jsx
import React, { useContext } from 'react';
import { PreferencesContext } from '../../context/PreferencesContext';

const User = () => {
  const { preferences, updatePreferences } = useContext(PreferencesContext);

  const handleChangeTheme = () => {
    const newTheme = preferences.theme === 'light' ? 'dark' : 'light';
    updatePreferences({ theme: newTheme });
  };

  const handleChangeFontSize = () => {
    const newFontSize = preferences.fontSize === 'medium' ? 'large' : 'medium';
    updatePreferences({ fontSize: newFontSize });
  };

  return (
    <div className="user">
      <h2>User Preferences Summary</h2>
      <p>Current Theme: {preferences.theme}</p>
      <p>Current Font Size: {preferences.fontSize}</p>
      <button onClick={handleChangeTheme}>Toggle Theme</button> {/* Button to toggle theme */}
      <button onClick={handleChangeFontSize}>Increase Font Size</button> {/* Button to change font size */}
    </div>
  );
};

export default User;
