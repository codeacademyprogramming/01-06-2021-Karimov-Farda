import React from 'react'
import ReactDOM from 'react-dom'

import {} from '@testing-library/jest-dom'
import { getByLabelText, getByTestId, getByText } from '@testing-library/dom';
import {render,fireEvent } from '@testing-library/react'


test('should my dummy function',async () => {
    const {getByText} = render(<List/>);

    fireEvent.change(getByLabelText("Order : London, Baku , Ankara, Istanbul , Berlin, Paris, Madrid , Moscow"),{target : {value : "Learn React"}})
    fireEvent.click(getByText("Add"))

    expect(getByTestId("input").textContent).toEqual(
        expect.stringMatching(/london/ig)
    )

    
})

test("should not be undefined",() => {
    expected(getByText("Add")).not.toBeUndefined();
    expected(getByTestId("list")).not.toBeUndefined();
    expected(getByText("Celcius")).not.toBeUndefined();
    expected(getByText("Kelvin")).not.toBeUndefined();
    expected(getByText("Fehrenheight")).not.toBeUndefined();

})