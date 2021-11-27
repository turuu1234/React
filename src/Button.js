const Button = () => {
    return(
        <div>
            <button className='btn' onclick = 'MyFunction()'>Add</button>
        </div>

    )
        function MyFunction() {
            const x= 0 ;
            while(onclick) {
                x++; 
                console.log(x);
            }
        }
}
export default Button