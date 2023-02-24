import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <header>
            <div className="container flex justify-between basis-3/12">
                <Link to="/">
                    <h1 className="text-4xl py-4 px-4 basis-9/12">Apna Bazaar</h1>
                </Link>

                <nav className='navbar flex items-center px-5'>
                    <div className=" justify-between">
                        <Link to="/about">About us</Link>
                        <Link to ="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;