import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';

test('to do test', () => {
    const TEST_WORD = 'testWord'
    render(<App/>);
    const inputContainerElement = screen.getByTestId('add-input-test')
    expect(inputContainerElement).toBeInTheDocument();
    const inputElement = inputContainerElement.querySelector('input')
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toContainHTML('');
    fireEvent.input(inputElement, {
        target: {
            value: TEST_WORD
        }
    })
    expect(inputElement).toContainHTML(TEST_WORD);
    fireEvent.submit(inputElement)
    expect(inputElement).toContainHTML('');
    const item = screen.getByText(TEST_WORD)
    expect(item).toBeInTheDocument()
    fireEvent.click(item)

    const clearBtn = screen.getByTestId('clear-btn')
    expect(clearBtn).toBeInTheDocument()
    fireEvent.click(clearBtn)
    expect(screen.queryByText(TEST_WORD)).toBeNull()
});
