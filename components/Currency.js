export default function Currency(props) {
    console.log(props);
    return (
        <div>
            <div class='card text-center'>
                <div class='card-header'>{props.currency.description}</div>
                <div class='card-body'>
                    <h5 class='card-title'>{props.currency.rate}</h5>
                    <small class='badge badge-primary'>
                        {props.currency.code}
                    </small>
                </div>
                <div class='card-footer text-muted'>{props.updated}</div>
            </div>
        </div>
    );
}
