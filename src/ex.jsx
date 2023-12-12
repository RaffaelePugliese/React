import { Hello } from './App';
import { AllertButton } from './Button';
import { Clock } from './Clock';
import { InitialValue } from './Counter';
import { Handling } from './Handling';

export function Text() {
    return(
        <div>
            <Hello />
            <p>What a beautiful day!</p>
            <Clock />
            <AllertButton />
           <InitialValue/>
           <Handling />
        </div>
    )
}