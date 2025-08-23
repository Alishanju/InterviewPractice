import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("renders username correctly",()=>{
    render(<Login />);
    const userName=screen.getByPlaceholderText(/username/i);
    expect(userName).toBeInTheDocument();
});

test("renders password correctly",()=>{
    render(<Login />);
    const password=screen.getByPlaceholderText("password");
    expect(password).toBeInTheDocument();
});

test("renders submit button correctly",()=>{
    render(<Login />);
    const submitBtn=screen.getByRole("button",{name:"Submit"});
    expect(submitBtn).toBeInTheDocument();
});

test("username must  be empty ",()=>{
    render(<Login />);
     const userName=screen.getByPlaceholderText(/username/i);
    expect(userName.value).toBe("");
});

test("password must be empty",()=>{
    render(<Login />);
    const password=screen.getByPlaceholderText("password");
    expect(password.value).toBe("");
});

test("renders disabled submit button initially",()=>{
    render(<Login />);
    const disabledBtn=screen.getByRole("button",{name:"Submit"});
    expect(disabledBtn).toBeDisabled();
});

test("error messages must not be visible",()=>{
    render(<Login/>);
    const errorEl=screen.queryAllByTestId("error");
    //getAll return error if no element found but queryAll 
    // doesnt throw error returns empty array
    expect(errorEl).toHaveLength(0);
    //expect(errorEl).not.toBeVisible();
});
 //import is mjust for below eventas
/*// fireEvent
fireEvent.click(button);
fireEvent.change(input, { target: { value: 'abc' } });
fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

// userEvent
await userEvent.click(button);
await userEvent.type(input, 'abc'); // realistic typing
await userEvent.tab(); // move focus like real user
//fireEvent = manual trigger (bare minimum, no realism)

userEvent = user-like behavior (recommended for most UI tests)
*/

test("username changes on typing",async()=>{
    render(<Login />);
    const userNamee=screen.getByPlaceholderText(/username/i);
    //fireEvent.change(userNamee, { target: { value: "Alisha" } });
    await userEvent.type(userNamee,"Alisha");
    expect(userNamee.value).toBe("Alisha");

});

test("password changes on typing",async()=>{
    render(<Login />);
    const pwd=screen.getByPlaceholderText(/password/i);
    fireEvent.change(pwd, { target: { value: "Anjum" } });
    //await userEvent.type(userNamee,"Alisha");
    expect(pwd.value).toBe("Anjum");

});

test("submit button is enabled when both fields are valid",async()=>{
    render(<Login />);
    const userNamee=screen.getByPlaceholderText(/username/i);
    const pwd=screen.getByPlaceholderText(/password/i);
    const submitBtn=screen.getByRole("button",{name:"Submit"});
    
    
    await userEvent.type(userNamee,"AlishaAnjum"); //8 chars username
    await userEvent.type(pwd,"Anjum@123"); //valid pwd that has uppercase, special char,
    // number,atlest 8 chars
    
    expect(submitBtn).toBeEnabled();
});

test("submit button is disabled when username is invalid",async()=>{
    render(<Login />);
    const userNamee=screen.getByPlaceholderText(/username/i);
    const pwd=screen.getByPlaceholderText(/password/i);
    const submitBtn=screen.getByRole("button",{name:"Submit"});
    
    await userEvent.type(userNamee,"Alisha"); //6 chars username
    await userEvent.type(pwd,"Anjum@123"); //valid pwd that has uppercase, special char,
    // number,atlest 8 chars
    
    expect(submitBtn).toBeDisabled();
});

test("submit button is disabled when password is invalid",async()=>{
    render(<Login />);
    const userNamee=screen.getByPlaceholderText(/username/i);
    const pwd=screen.getByPlaceholderText(/password/i);
    const submitBtn=screen.getByRole("button",{name:"Submit"});
    
    await userEvent.type(userNamee,"AlishaAnjum"); //8 chars username
    await userEvent.type(pwd,"Anjum"); //6 chars pwd
    
    expect(submitBtn).toBeDisabled();
});









