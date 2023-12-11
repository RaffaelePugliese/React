import { Hello } from './App';
import { Welcome } from './Welcome';
export function Text() {
    return(
        <div>
            <Hello />
            <p>What a beautiful day!</p>
            <Welcome name="Jhon"/>
        </div>
    )
}