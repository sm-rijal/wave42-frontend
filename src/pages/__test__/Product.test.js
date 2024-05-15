
import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter as Router} from "react-router-dom";
import '@testing-library/jest-dom'
import { AuthContextProvider } from '../../context/AuthContext';
import { ThemeContextProvider } from '../../context/ThemeContext';
import Product from '../Product'

// jest.mock('axios', () => ({
//     delete: jest.fn()
// }))

jest.mock('axios', () => {
    return {
        create: jest.fn(() => {
        })
    };
});

const MockProduct = () => {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Router>
                    <Product />
                </Router>
            </ThemeContextProvider>
        </AuthContextProvider>
    )
}

it('test render Product',() => {

    const {getByText} = render(<MockProduct />);
    expect(getByText('List Product')).toBeInTheDocument();

})


it('test button tambah product',() => {

    const {getByText} = render(<MockProduct />);
    expect(getByText('Tambah')).toBeInTheDocument();

})

