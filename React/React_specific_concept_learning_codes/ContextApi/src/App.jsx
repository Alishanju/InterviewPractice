import { useContext,useState } from 'react'
import './App.css'
import { AppContext, AppContextProvider } from './store/store'
import Counter from './components/Counter'
import ThemeSwitcher from './components/ThemeSwitcher'

// ✅ Child that consumes context
function AppContent() {
  const { styles } = useContext(AppContext);

  return (
    <div style={styles}>
      <h1>App Container</h1>
      <Counter />
      <ThemeSwitcher />
    </div>
  );
}

// ✅ App only provides context
function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

export default App;
