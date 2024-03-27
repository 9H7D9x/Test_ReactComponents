import {screen , render} from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting components',()=>{
    test('render hello world in text' ,()=>{
        //Arrange
        render(<Greeting/>);
        //act ..in nothing
        //assert
        const helloWorldElement=screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();

    })

    test('render good to see u if button was not clicked' ,()=>{
        render(<Greeting/>);

        const outputElement=screen.getByText("it's goood to see you" );
        expect(outputElement).toBeInTheDocument();

    })

    test('render "Changed" if button clicked' ,()=>{
        render(<Greeting/>);

        const buttonElement= screen.getByRole("button")
        userEvent.click(buttonElement);

        const outputElement=screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();

    })
    test('doesnot render good to see u if button was clicked' ,()=>{
        render(<Greeting/>);

        const buttonElement= screen.getByRole("button")
        userEvent.click(buttonElement);

        const outputElement=screen.queryByText("it's goood to see you" );
        expect(outputElement).not.toBeInTheDocument();

    })
})