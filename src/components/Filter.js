const Filter = (props)=>{


    return (
        <div>
            <div className="Filter">
                <select name="filter" onChange={props.handleCategoryChange}>
                    <option value="All">Filter by category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;