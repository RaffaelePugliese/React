import { Hello } from './App';
import { AllertButton } from './Button';
import { InitialValue } from './Counter';
import { Welcome } from './Welcome';
export function Text() {
    return(
        <div>
            <Hello />
            <p>What a beautiful day!</p>
            
            <AllertButton />
           <InitialValue/>
        </div>
    )
}
