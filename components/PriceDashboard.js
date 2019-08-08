import Currency from './Currency';

export default class PriceDashboard extends React.Component {
    state = {
        currency: this.props.data.bpi.USD
    };

    handleChange = e => {
        const { USD, GBP, EUR } = this.props.data.bpi;

        if (e.target.value === 'USD') {
            this.setState({
                currency: USD
            });
        } else if (e.target.value === 'GBP') {
            this.setState({
                currency: GBP
            });
        } else if (e.target.value === 'EUR') {
            this.setState({
                currency: EUR
            });
        }
    };

    render() {
        const { updated } = this.props.data.time;
        const { currency } = this.state;

        return (
            <div className=''>
                <select
                    name=''
                    id=''
                    onChange={e => this.handleChange(e)}
                    className='form-control'
                >
                    <option selected value='USD'>
                        USD
                    </option>
                    <option value='GBP'>GBP</option>
                    <option value='EUR'>EUR</option>
                </select>
                <br />
                <Currency updated={updated} currency={currency} />
                <br />
            </div>
        );
    }
}
