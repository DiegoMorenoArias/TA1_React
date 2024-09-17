
function Card({title, description, assignedPerson, startDate, endDate}){
    return(
        <div className="card">
            <h2>Información</h2>
            <p><strong>Título: </strong>{title}</p>
            <p><strong>Descripción: </strong>{description}</p>
            <p><strong>Persona asignada: </strong>{assignedPerson}</p>
            <p><strong>Fecha inicio: </strong>{startDate}</p>
            <p><strong>Fecha de fin: </strong>{endDate}</p>
        </div>
    )
}

export default Card;