import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h2 className='h1'>Task Tracker</h2>
            <div className='flex'>
                <p className='d1'>Home</p>
                <p className='d2'>Call</p>
                <p className='d3'>About</p>
                <p className='d4'>Pictures</p>
                <p className='d5'>Location</p>
            </div>
            <Button />
        </header>
    )
}

// CSS in JS
//const headingStyle = {
//   color : 'red',
//    backgroundColor : 'black',
//}
export default Header
