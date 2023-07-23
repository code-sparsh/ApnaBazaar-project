import {useEffect} from "react"
import { Link } from "react-router-dom"
import ListingDetail from "../components/ListingDetail"
import useListingContext from '../hooks/useListingContext'
import useAuthContext from "../hooks/useAuthContext"
import plusIcon from '../images/plusIcon'

const MyListings = () => {

    const {listings, dispatch} = useListingContext()
    const {user} = useAuthContext()

    const {token} = user

    useEffect(()=> {

        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/listings/user', {
                headers: {
                    'Authorization': 'Bearer ' + token, 
                }
            })
            const json = await response.json();

            if(response.ok) {
                dispatch({type: 'SET_LISTINGS', payload: json})
            }

        }

        fetchData()
        
    },[])

    return (
        <div className="home">
            <div className="justify-start">
                <Link to="/add" className="flex text-lg mx-16 mt-2 border w-30 h-10 justify-center items-center bg-green-300 rounded-lg hover:bg-green-400">+ Create</Link>
                <div className="flex justify-center text-3xl m-6">My Listings</div>
            </div>
            <div className="grid grid-cols-2 gap-5 max-[946px]:grid-cols-1">
                {listings && listings.map((listing) => (
                    <ListingDetail key={listing._id} listing={listing}/>
                ))}
            </div>
        </div>
    )
}

export default MyListings;