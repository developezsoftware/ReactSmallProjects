import Button from '../components/Button';
import {GoBell} from 'react-icons/go';

function ButtonPage() {
    return(
        <div>
            <div>
                <Button success rounded>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button warning>Click me!</Button>
            </div>
            <div>
                <Button secondar outline>Click me!</Button>
            </div>
            <div>
                <Button primary>Click me!</Button>
            </div>  
        </div>
    );
} 

export default ButtonPage;