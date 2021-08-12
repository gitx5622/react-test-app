import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import FollowersList from "../FollowersList";

const MockedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}
describe("FollowerList", () => {
    it("should  render follower item", async () => {
        render(<MockedFollowersList/>);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    })
    it("should  render mutiple follower items ", async () => {
        render(<MockedFollowersList/>);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    })
})