const List = () => {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Apple"]
    return(
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit ,key) => (
                    <li key={key}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;