import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PokemonProvider } from './providers/pokemonContext.tsx'
import { GlobalStyled } from './globalStyles/globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <PokemonProvider>

      <App />

    </PokemonProvider>
    
  </React.StrictMode>,
)
