import { ConfirmProvider } from './context/modalConfirmContext';
import { ThemeProvider } from './context/themeContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <ConfirmProvider>
        <AppRoutes />
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
