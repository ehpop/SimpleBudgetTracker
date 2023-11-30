import Payment, {IPayment} from "./Payment";



function Home() {
    const payment: IPayment = {
        id: 1,
        name: "Rent",
        description: "Monthly rent payment.",
        amount: 1000.0,
        date: "2021-01-01T00:00Z",
        userId: "1",
        category: "Living expenses"

    }

    return (
        <div>
            <h1>Home</h1>
            <Payment {...payment}/>
        </div>
    );
}

export default Home;