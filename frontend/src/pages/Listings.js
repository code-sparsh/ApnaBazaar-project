import { useEffect} from "react"
import ListingDetail from "../components/ListingDetail"
import useListingContext from '../hooks/useListingContext'
import useAuthContext from "../hooks/useAuthContext"

const Listings = () => {

    const {listings, dispatch} = useListingContext()
    const {user} = useAuthContext()

    const {token} = user

    useEffect(()=> {

        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/api/listings', {
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
            <div className="flex justify-center text-3xl m-10">Listings around you </div>
            <div className="flex-col flex lg:grid lg:grid-cols-2 gap-5 mx-3">
                {listings && listings.map((listing) => (
                    <ListingDetail key={listing._id} listing={listing}/>
                ))}
            </div>
        </div>
    )
}

export default Listings;