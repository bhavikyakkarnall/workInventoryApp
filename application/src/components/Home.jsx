import Card from "./Display";
import Masterlist from "./Masterlist";
import Navigation from "./Navigation";

function Home() {
    return (
        <>
            {/* <h1>Home</h1> */}
            <Navigation></Navigation>
            {/* <Card></Card> */}
            <Masterlist></Masterlist>
        </>
    )
}

export default Home;