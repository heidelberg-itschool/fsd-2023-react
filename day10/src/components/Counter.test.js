import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('counter', () => {
    test('initial value', () => {
        render(<Counter/>);
        const counter = Number(screen.getByTestId('counter').textContent);
        expect(counter).toBe(0);
    });
    
    test('increment', () => {
        render(<Counter/>);
        const incrementButton = screen.getByTestId('increment');
        fireEvent.click(incrementButton);
        const counter = Number(screen.getByTestId('counter').textContent);
        expect(counter).toBe(1);
    })

    test('reset', () => {
        render(<Counter/>);
        const incrementButton = screen.getByTestId('increment');
        fireEvent.click(incrementButton);
        const resetButton = screen.getByTestId('reset');
        fireEvent.click(resetButton);
        const counter = Number(screen.getByTestId('counter').textContent);
        expect(counter).toBe(0);
    })

    test('decrement', () => {
        render(<Counter/>);
        const incrementButton = screen.getByTestId('increment');
        fireEvent.click(incrementButton);
        const decrementButton = screen.getByTestId('decrement');
        fireEvent.click(decrementButton);
        const counter = Number(screen.getByTestId('counter').textContent);
        expect(counter).toBe(0);
    })

    test.only('decrement not lower than 0', () => {
        render(<Counter/>);
        const decrementButton = screen.getByTestId('decrement');
        fireEvent.click(decrementButton);
        const counter = Number(screen.getByTestId('counter').textContent);
        expect(counter).toBe(0);
    })
})