const isValid = (str) => {
    let count = 0;
    const len = str.length;
    const toFloat = parseFloat(str);

    if (str[0] === '.' || str[len - 1] === '.')
        return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.')
            count++;
        if (count > 1 || (str[i] === '.' && i > 2)
            || (isNaN(parseInt(str[i])) && str[i] !== '.'))
            return false;
    }
    if (toFloat > 20)
        return false;
    return true;
}

const validateAndChangeBackground = (id, data) => {
    const input_ = document.getElementById(id);

    if (input_ !== null)
        input_.style.backgroundColor = (!isValid(data)) ? 'red' : 'hsl(217, 12%, 63%)';
}

const _Input = (props) => {
    const data = props.data;
    const setData = props.setData;

    validateAndChangeBackground(props.label, props.data);
    return (
        <div className="box">
            <span>{props.label}</span>
            <input
                id={props.label}
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
}

export default _Input;