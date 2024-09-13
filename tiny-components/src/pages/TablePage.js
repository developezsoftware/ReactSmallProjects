import SortableTable from '../components/SortableTable';

function TablePage() {
    const tableData = [
        {name: 'Apple', color:'bg-red-500', score: 3 },
        {name: 'Orange', color:'bg-orange-500', score: 4 },
        {name: 'Banana', color:'bg-yellow-500', score: 5 }
    ];

    const config = [
        {label: 'Name',
         render: (fruit) => fruit.name,
         sortValue: (fruit) => fruit.name
        },
        {label: 'Color',
         render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}> </div>
        },
        {label: 'Score',
         render: (fruit) => fruit.score,
         sortValue: (fruit) => fruit.score
        },
    ];

    return <div>
        <SortableTable data={tableData} config={config}></SortableTable>
    </div>;
}

export default TablePage;