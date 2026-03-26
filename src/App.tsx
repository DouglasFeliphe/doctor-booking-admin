import { ConfirmProvider } from './context/modalConfirmContext';
import { TabProvider } from './context/tabContext';
import { ThemeProvider } from './context/themeContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <ConfirmProvider>
        <TabProvider>
          <AppRoutes />
        </TabProvider>
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
