import { Hello } from './App';
import { AllertButton } from './Button';
import { Counter } from './Counter';

export function Text() {
    return(
        <div>
            <Hello />
            <p>What a beautiful day!</p>
            
            <AllertButton />
            <Counter />
        </div>
    )
}
