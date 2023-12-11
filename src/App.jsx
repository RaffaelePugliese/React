import { Hello } from './index'
import { createRoot } from 'react-dom/client'
const HelloworldElement = <Hello />

const App = document.getElementById('root')

const root = createRoot(App)

root.render(HelloworldElement)