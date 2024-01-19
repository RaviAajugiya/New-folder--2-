// App.jsx
import React from 'react';
import { useTheme } from './ThemeContext';
import { setTheme } from './Theme';

function App() {
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <>
      <div>
        fdsh df
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
