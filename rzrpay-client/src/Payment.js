import React from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            alertSuccess: false,
            alertFailure: false
        }
    }

    handleChange = (e) => {
        if (e.target.value === '' || Number(e.target.value))
            this.setState({
                amount: e.target.value
            })
    }

    handleSubmit = async (e) => {
        if (this.state.amount === '') {
            this.setState({ alertFailure: true })
            return;
        }
        const API_URL = process.env.REACT_APP_API_BASE_URL
        e.preventDefault();
        const orderUrl = `${API_URL}/order/${this.state.amount}`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
            name: "Level App",
            description: "Sample payment",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}/capture/${paymentId}/${this.state.amount}`;
                    const captureResponse = await Axios.post(url, {})
                    console.log(captureResponse.data);
                    if (JSON.parse(captureResponse.data).status === "captured")
                        this.setState({ alertSuccess: true })
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#686CFD",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    render() {
        return (
            <div className="payments-div">
                <div style={{ height: '30vh' }}>
                {this.state.alertFailure && 
                    <Alert onClose={() => { this.setState({ alertFailure: false }) }} severity="error">Amount can't be empty!</Alert>}
                {this.state.alertSuccess && 
                    <Alert onClose={() => { this.setState({ alertSuccess: false, amount: '' }) }} severity="success">Payment of ₹{this.state.amount} was successful!</Alert>}
                </div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="amount"
                    label="Enter Amount"
                    name="amount"
                    autoComplete="amount"
                    autoFocus
                    value={this.state.amount}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit-button"
                    onClick={this.handleSubmit}
                >
                    Pay
          </Button>
            </div>
        )
    }
}

export default Payment;