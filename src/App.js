import React from 'react';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import Container from 'react-bootstrap/Container';
import { AuthProvider } from './Context/UseContext';

const App = () => {
    return (
        <div className="App-container">
            <AuthProvider>
                <Header />
                <Container>
                    <TableUser />
                </Container>
            </AuthProvider>
        </div>
    );
};

export default App;
