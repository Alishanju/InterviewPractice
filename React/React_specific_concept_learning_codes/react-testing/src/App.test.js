import { render, screen } from '@testing-library/react';
import App from './App';
//installed wallaby.js in vs code which is providing for hassle free testing environment (we no need of looking to terminal)
//ctrl+shift+p to start wallaby.js -->asking for license noew so ignored now

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items',()=>{
  render(<App />);
  const listItems=screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
  //expect(listItems.length).toBe(3);
  //expect(listItems.length).toEqual(3);
  //https://jestjs.io/docs/expect-> jest expect methods list 
  //https://testing-library.com/docs/queries/byrole  -> react testing library methods to get something from screen
  //getAllByRole,getByTestId(data-testid),getByText etc from RTL


});

test('renders heading', () => {
  render(<App />);
  const headingg = screen.getByTestId("head")
  expect(headingg).toBeInTheDocument();
});

test('renders span sum', () => {
  render(<App />);
  const summ = screen.getByTitle("sum");
  expect(summ.textContent).toEqual("7");
  //expect(summ).toHaveTextContent("7");
});



