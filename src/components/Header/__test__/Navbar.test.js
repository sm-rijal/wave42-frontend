
import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from '../Navbar';
import { AuthContextProvider } from '../../../context/AuthContext';
import { ThemeContextProvider } from '../../../context/ThemeContext';
import '@testing-library/jest-dom'

const MockNavbar = () => {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Router>
                    <Navbar />
                </Router>
            </ThemeContextProvider>
        </AuthContextProvider>
    )
}

it('test render navbar',() => {

    const {getByText} = render(<MockNavbar />);

    expect(getByText('WAVE 42')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();

})
