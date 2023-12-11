import { Text } from './ex';
import { createRoot } from 'react-dom/client'


const MessageElement = <Text></Text>

const App = document.getElementById('root');

const root = createRoot(App);

root.render(MessageElement );