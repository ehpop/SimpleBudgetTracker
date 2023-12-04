import Payment, {IPayment} from "./Payment";

import '../styles/Home.css';

function Home() {
    const examplePayment: IPayment = {
        id: 1,
        name: "Rent",
        description: "Monthly rent payment.",
        amount: 1000.0,
        date: new Date().toISOString(),
        type: "Expense",
        userId: "1",
        category: "Living expenses"
    }

    return (
        <div className="main-div">
            <h1>Add payment</h1>
            <div className="payment-div">
                <Payment payment={examplePayment} isEditable={false}/>
            </div>
        </div>
    );
}

export default Home;