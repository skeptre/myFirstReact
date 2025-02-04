
import './App.css'

const Card = ({title}) => {
    return (
        <div style={{
            border: '1px solid #4b5362',
            padding: '20px'

        }}>
            <h2>{title}</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className={"card-container"}>
            <Card title="Star Wars"/>
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>

    )
}
export default App
