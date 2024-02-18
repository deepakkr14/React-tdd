import { render,screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';
describe('Greeting cjc',()=>{

    test('renders hellow world aas a test',()=>{
        // arrange
        render(<Greeting/>)
        // act
        const helloworld=screen.getByText('hello world',{exact:false})
        expect(helloworld).toBeInTheDocument();
    })
    test('new',()=>{
        render(<Greeting/>)
        const news=screen.getByText('my name')
        expect(news).toBeInTheDocument()
    })
    test('event  test',()=>{
        // arrange
        render(<Greeting/>)
        // act
        const event=screen.getByRole('button');
        userEvent.click(event)

        // assert
        const utputElement=screen.getByText('changed!')

        expect(event).toBeInTheDocument();
    })
    test('does not render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
   
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
     });
})