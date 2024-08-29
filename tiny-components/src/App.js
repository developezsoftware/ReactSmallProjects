import Button from './Button';

function App() {
    return(
        <div>
            <div>
                <Button success rounded>Click me!</Button>
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

export default App;