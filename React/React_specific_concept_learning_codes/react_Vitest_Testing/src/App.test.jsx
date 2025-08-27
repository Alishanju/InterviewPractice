import {screen,render, fireEvent} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event"
import {describe,it,expect, vi} from "vitest";
import App from "./App";

describe("App component test suite",()=>{
    it('should render the app real dom',()=>{
        render(<App/>);
        screen.debug(undefined,100000); //It prints the current DOM tree inside jsdom (the fake browser environment that RTL uses).
    })
    //  it('should render heading in app',()=>{
    //     render(<App name="Anjum"/>);
    //     screen.debug(undefined,100000); 
    //     const heading=screen.getByText("Anjum");
    //     expect(heading).toBeDefined();
    // })
    it('should render count in app',()=>{
        render(<App />);
        
        const initialCount=screen.getByRole("heading",{name:"0"});
        expect(initialCount).toBeDefined();
        const increment=screen.getByRole("button",{name:/increment/i});
        expect(increment).toBeDefined();
        screen.debug(undefined,100000); 
         fireEvent.click(increment);
        //await userEvent.click(increment) //use async at top
         
        const updatedCount=screen.getByRole("heading",{name:"1"});
        //const updatedCount= await screen.findByRole("heading",{name:"1"}) //use async at top
        expect(updatedCount).toBeInTheDocument();
        screen.debug(undefined,100000); 

    })

    it("renders user name by fetching api", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ name: "Alisha Anjum" })
  });

  render(<App />);
   screen.debug(undefined, 100000);

  // use regex + async findByRole
  const fetchuserbtn = screen.getByRole("button", { name: /fetch user/i });
  expect(fetchuserbtn).toBeInTheDocument();

  await userEvent.click(fetchuserbtn);

  const userData = await screen.findByRole("heading", { name: /alisha anjum/i });
  expect(userData).toBeInTheDocument();

  screen.debug(undefined, 100000);
});





})
