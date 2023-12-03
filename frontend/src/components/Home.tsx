import Payment, {IPayment} from "./Payment";

import '../styles/Home.css';

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
        <div className="main-div">
            <h1>Add payment</h1>
            <div className="payment-div">
                <Payment payment={payment} isEditable={false}/>
            </div>
        </div>
    );
}

export default Home;