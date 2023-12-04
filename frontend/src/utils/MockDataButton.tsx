import axios from "axios";

const data = [
    {
        "name": "Rent",
        "date": "2023-01-01T00:00Z",
        "category": "Living expenses",
        "description": "Monthly rent payment.",
        "userId": "1",
        "amount": 1000
    },
    {
        "name": "Groceries",
        "date": "2023-01-02T00:00Z",
        "category": "Food",
        "description": "Grocery shopping",
        "userId": "1",
        "amount": 150
    },
    {
        "name": "Internet",
        "date": "2023-01-03T00:00Z",
        "category": "Utilities",
        "description": "Monthly internet bill",
        "userId": "1",
        "amount": 50
    },
    {
        "name": "Salary",
        "date": "2023-01-04T00:00Z",
        "category": "Income",
        "description": "Monthly salary",
        "userId": "1",
        "amount": 3000
    },
    {
        "name": "Dinner",
        "date": "2023-01-05T00:00Z",
        "category": "Food",
        "description": "Dinner at a restaurant",
        "userId": "1",
        "amount": 80
    },
    {
        "name": "Gym membership",
        "date": "2023-01-06T00:00Z",
        "category": "Health",
        "description": "Monthly gym membership",
        "userId": "1",
        "amount": 60
    },
    {
        "name": "Transportation",
        "date": "2023-01-07T00:00Z",
        "category": "Travel",
        "description": "Public transportation fare",
        "userId": "1",
        "amount": 30
    },
    {
        "name": "Phone bill",
        "date": "2023-01-08T00:00Z",
        "category": "Utilities",
        "description": "Monthly phone bill",
        "userId": "1",
        "amount": 40
    },
    {
        "name": "Movie night",
        "date": "2023-01-09T00:00Z",
        "category": "Entertainment",
        "description": "Movie night with friends",
        "userId": "1",
        "amount": 25
    },
    {
        "name": "Savings",
        "date": "2023-01-10T00:00Z",
        "category": "Savings",
        "description": "Monthly savings contribution",
        "userId": "1",
        "amount": 500
    }
]

function postData() {
    for (let i = 0; i < data.length; i++) {
        axios.post('http://localhost:8080/payments', {
            "name": data[i].name,
            "description": data[i].description,
            "amount": data[i].amount,
            "date": data[i].date,
            "userId": data[i].userId,
            "category": data[i].category
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

function MockDataButton() {
    return (
        <button onClick={postData}>Post Mock data</button>
    );
}

export default MockDataButton;