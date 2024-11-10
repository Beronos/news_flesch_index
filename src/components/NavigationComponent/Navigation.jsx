import "./Navigation.css";

function Navigation({ togglePreferences }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={togglePreferences} title="Preferences">
            Preferences
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
