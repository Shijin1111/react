function Greetingcard(props){
    return(
    <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '10px' }}>
      <h2>Hello, {props.name}!</h2>
      <p>This is a reusable React component. 💙</p>
    </div>
    );
}

export default Greetingcard;
