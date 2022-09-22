import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const values = { handleClose, handleShow, show };
    return <AuthContext.Provider value={values} {...props}></AuthContext.Provider>;
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider');
    return context;
};
export { AuthProvider, useAuth };
