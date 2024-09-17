import Card from './Card.jsx';

function App (){
    return(
        <div className="cards-container">
            <Card
            title="Primer título"
            description="Descripción 1"
            assignedPerson="Diego Moreno"
            startDate="01/01/2024"
            endDate="31/12/2024"
            />
            <Card
            title="Segundo título"
            description="Descripción 2"
            assignedPerson="Diego Morenazo"
            startDate="07/06/2004"
            endDate="17/09/2024"
            />
            <Card
            title="Tercer título"
            description="Descripción 3"
            assignedPerson="Magalí Ferreira"
            startDate="02/11/2004"
            endDate="18/03/2022"
            />
        </div>
    )
}

export default App;