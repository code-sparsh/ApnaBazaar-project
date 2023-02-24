import Login from './Login'
import hero from '../images/hero.jpg'
import { Link } from 'react-router-dom'


const Home = () => {


    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-20">
                    <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-900">Apna Bazaar
                        <div className="hidden lg:block text-lg mt-3">- Buy and Sell</div>
                    </h1>
                    <h2 className="leading-relaxed font-bold">Connecting Buyers and Sellers at a single platform</h2>
                    <h2 className="mb-8 leading-relaxed">Create your new ad listing in no time</h2>
                    <div className="flex justify-center">
                        <Link to="/listings" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Ads</Link>
                        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-20">
                    <img className="object-cover object-center rounded" alt="hero" src={hero}/>
                </div>
            </div>
        </section>
    )
}

export default Home