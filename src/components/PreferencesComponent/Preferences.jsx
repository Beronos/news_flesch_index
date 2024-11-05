// src/components/PreferencesComponent/Preferences.jsx
import React, { useContext } from 'react';
import { PreferencesContext } from '../../context/PreferencesContext';

const Preferences = () => {
  const { preferences, updatePreferences } = useContext(PreferencesContext);

  const handleThemeChange = (e) => {
    updatePreferences({ theme: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    updatePreferences({ fontSize: e.target.value });
  };

  const handleResetPreferences = () => {
    updatePreferences({
      theme: 'light', // Default theme
      fontSize: 'medium', // Default font size
    });
  };

  return (
    <div className="preferences">
      <h2>User Preferences</h2>
      <label>
        Theme:
        <select value={preferences.theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Font Size:
        <select value={preferences.fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <button onClick={handleResetPreferences}>Reset to Default</button> {/* Reset button */}
    </div>
  );
};

export default Preferences;
