import {useState, useEffect, useRef} from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options , selection, onSelect}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return
            }
            
            if(!divEl.current.contains(event.target)){
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    },[]);
    function handleClick(option) {
        setIsMenuOpen((current)=> !current);
        onSelect(option);
    }

    const menuList = options.map((option) => {
        return <div className='hover:bg-sky-100 cursor-pointer p-1' key={option.value} onClick={()=>handleClick(option)}>{option.label}</div>;
    });

    return (
        
        <div ref={divEl} className='w-48 relative'>
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {selection?.label || '...Select'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isMenuOpen && 
            <Panel className="absolute top-full">
                {menuList}
            </Panel>}
        </div>
    );
}

export default DropDown;