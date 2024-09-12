import { Fragment } from "react";

function Table({data, config}) {
    const renderedHeaders = config.map((item) => {
        if(item.header) {
            return <Fragment key={item.label}>{item.header()}</Fragment>
        }
        return <th key={item.label}>{item.label}</th>;
    });

    const renderedRows = data.map((item) => {
        const renderedCells = config.map((itemConfig)=>{
            return <td className="p-3">{itemConfig.render(item)}</td>;
        });
        return(
            <tr key={item.name} className="border-b">
                {renderedCells}
            </tr>
        );
    })

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;