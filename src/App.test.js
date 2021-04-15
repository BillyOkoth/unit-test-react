import { render, screen,cleanup, getByText, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import App from './App'

// import {shallow} from 'enzyme';

test('it should render app component',()=>{
  render (<App/>);
  const appElement = screen.getByTestId('submit-btn');
  expect(appElement).toBeInTheDocument();
 
});

it('rendres default props',()=>{
  const {getByLabelText} = render(<App/>);
  const input = getByLabelText('Number:');

  expect(input).toHaveAttribute('type','number');    
});
it('renders disabled submit button',()=>{
  const {getByTestId}= render(<App/>);
  const button = getByTestId('submit-btn');
  // screen.debug(button);
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('type','submit');  
});

it('renders disabled submit button',()=>{
  const {getByLabelText,getByTestId}= render(<App/>);
  const input = getByLabelText('Number:');
  const button = getByTestId('submit-btn');  
  
  fireEvent.change(input,{target:{value:5}});
  
  expect(button).toBeEnabled();
});

it('renders valide when props update',()=>{
  const {getByLabelText,getByTestId,queryByTestId,rerender,debug} =render (<App/>);
  const input = getByLabelText('Number:');
  
  fireEvent.change(input,{target:{value:-5}});
  // screen.debug(getByTestId('error-msg'));
  expect(getByTestId('error-msg')).toHaveTextContent('The number you have entered is invalid!');

  rerender(<App min = {-10}/>); 
  debug()
  expect(queryByTestId('error-msg')).toBeNull();
});
it('checks the select functionality',()=>{
  const {getByTestId,getAllByTestId} = render(<App/>);
  fireEvent.change(getByTestId('select'),{target:{value:2}});
  let options = getAllByTestId('select-option');
  expect(options[1].selected).toBeTruthy();
})





