const HelloUser = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Hello { props.name || 'mystery user' }</h2>
        </div>
    );
};

export default HelloUser;