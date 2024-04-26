
import {fireEvent, render, screen} from '@testing-library/react'
import Home from '../Home'
import { BrowserRouter as Router} from "react-router-dom";
import { AuthContextProvider } from '../../context/AuthContext';
import { ThemeContextProvider } from '../../context/ThemeContext';



const MockHome = () => {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Router>
                    <Home />
                </Router>
            </ThemeContextProvider>
        </AuthContextProvider>
    )
}

it('test nilai awal counter default 0',() => {

    const {getByTestId} = render(<MockHome />)

    const countValueElement = getByTestId('count-value')
    expect(countValueElement.textContent).toBe('0')
})

it('test button tambah',() => {

    const {getByText, getByTestId} = render(<MockHome />)

    const incrementButton = getByText('Tambah');
    const countValueElement = getByTestId('count-value')

    fireEvent.click(incrementButton);
    expect(countValueElement.textContent).toBe('1');

})

it('test button kurang',() => {

    const {getByText, getByTestId} = render(<MockHome />)

    const incrementButton = getByText('Kurang');
    const countValueElement = getByTestId('count-value')

    fireEvent.click(incrementButton);
    if(countValueElement.textContent > 1){
        expect(countValueElement.textContent).toBe('-1');
    } else {
        expect(countValueElement.textContent).toBe('0');
    }

});

it('test button reset',() => {

    const {getByText, getByTestId} = render(<MockHome />)

    const incrementButton = getByText('Reset');
    const countValueElement = getByTestId('count-value')

    fireEvent.click(incrementButton);
    expect(countValueElement.textContent).toBe('0');

})