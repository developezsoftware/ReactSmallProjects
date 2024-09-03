import Accordion from '../components/Accordion';

function AccordionPage() {
    const itemsToRender = [
        {
            id : 'k1j2',
            label : 'Can I use React?',
            content : 'Yes you can use react. Yes you can use react. Yes you can use react.'
        },
        {
            id : 'k1232',
            label : 'Can I use JS?',
            content : 'Yes you can use JS. Yes you can use JS. Yes you can use JS.'
        },
        {
            id : 'wel26j',
            label : 'Can I use CSS?',
            content : 'Yes you can use css. Yes you can use css. Yes you can use css.'
        }
    ]
    return(
        <Accordion items={itemsToRender} />
    );
} 

export default AccordionPage;