import { Hello } from './App';
import { AllertButton } from './Button';
import { Welcome } from './Welcome';
export function Text() {
    return(
        <div>
            <Hello />
            <p>What a beautiful day!</p>
            <Welcome name="Jhon" age={45}/>
            <AllertButton />
        </div>
    )
}