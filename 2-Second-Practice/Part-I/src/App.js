import './App.css';
import users from "./users.json"
function renderUser(user) {
    const cardStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        margin: '8px',
        width: '150px',
        borderRadius: "40px",
        textAlign: 'center',
        backgroundColor: user.gender === 'Male' ? '#0984e3' : '#eb2f06',
        color: 'white'
    };

    return (
        <div key={user.id} style={cardStyle}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
        </div>
    );
}
function renderUsers() {
    const userCards = users.map((user) => renderUser(user));

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px',
    };

    return <div style={containerStyle}>{userCards}</div>;
}

function App() {
    return (
        <div className="App">
            <h1>First Practice</h1>
            {renderUsers()}
        </div>
    );
}

export default App;