import { Text } from './ex';
import { createRoot } from 'react-dom/client'


const MessageElement = <Text></Text>

const App = document.getElementById('root');

const root = createRoot(App);

root.render(MessageElement );
// You can't use more then once the component App it will be an error 
// Yes you can render the Message component with the App component they will set up like on a file HTML with the tag you give them

