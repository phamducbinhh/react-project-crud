import React from 'react';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import Container from 'react-bootstrap/Container';

const App = () => {
    return (
        <div className="App-container">
            <Header />
            <Container>
                <TableUser />
            </Container>
        </div>
    );
};

export default App;
