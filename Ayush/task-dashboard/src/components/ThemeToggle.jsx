// Import Switch component from Material UI
// Switch is used to toggle between two states
import { Switch } from "@mui/material";

// This component is used to toggle light and dark theme
// darkMode tells current theme (true = dark, false = light)
// setDarkMode is used to change theme
export default function ThemeToggle({ darkMode, setDarkMode }) {

  return (
    // Switch component acts like ON / OFF button
    // checked = true means dark mode is ON
    // onChange toggles the theme value
    <Switch
      checked={darkMode}

      // when switch is clicked, reverse the current value
      onChange={() => setDarkMode(!darkMode)}
    />
  );
}
