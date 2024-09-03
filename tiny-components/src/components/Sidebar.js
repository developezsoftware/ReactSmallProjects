import Link from "./Link";

function Sidebar() {
    const links = [
        {label:'Dropdown', path: '/dropdown'},
        {label:'Accordion', path: '/accordion'},
        {label:'Buttons', path: '/buttons'}
    ];

    const renderedLinks = links.map((link) => {
        return( 
            <Link 
                className='mb-3' 
                activeClassName='font-bold border-l-4 border-blue-500 pl-2' 
                key={link.label} 
                to={link.path}
            >
                {link.label}
            </Link>
        );
    });
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;