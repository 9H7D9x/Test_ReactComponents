import {screen , render} from "@testing-library/react"
import Async1 from "./Async1"


describe('async components', ()=>{
    test("render post if request succeeds ", async () => {
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'First post'}],
        });

        render(<Async1/>)

        const listItems=  screen.findAllByRole('listitems');
        expect(listItems).not.toHaveLength(0);



    })
})