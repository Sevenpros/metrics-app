const City = (props) => {
    const { city } = props;
    return (
        <div> 
            <h2>{city.name} </h2>
            <h3>{city.temp}&#176;C</h3>
        </div>
    )
}

export default City;