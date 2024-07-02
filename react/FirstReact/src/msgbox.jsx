function Message({name, color}){
    //styling based on conditionals
    let styles = { backgroundColor : "blue"};
    return (
        <h1 style={styles} >Hello {name} !!!</h1>
    );
}
export default Message