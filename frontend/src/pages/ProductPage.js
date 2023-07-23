
import { useParams } from "react-router-dom"
import useListingContext from "../hooks/useListingContext"
import ProductDetails from '../components/ProductDetails'
import { useContext, useEffect, useState } from "react"
import useAuthContext from "../hooks/useAuthContext"

const ProductPage = () => {

    const {listings} = useListingContext()
    const {user} = useAuthContext()

    const params = useParams()
    const id = params.id;

    const {token}= user;

    const [listing, setListing] = useState()

    useEffect(()=>{
        const fetchDetails = async () => {

            console.log("hello")

            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/listings/id/" + id, {
                headers: {
                    'Authorization': 'Bearer ' + token, 
                }
            })
    
            const json = await response.json()
    
            if(response.ok) {
                setListing(json)
                console.log(listing);
            }
    
            if(response.ok != false) {
                console.log(json.error)
            }
    
        }
        console.log("hey");
        fetchDetails();
    },[])

    // const listing = listings.find((list => list._id === id))

    return (
        <div className="md:grid md:grid-cols-2">
            {listing && <ProductDetails listing={listing}/>} 
            <div></div>
        </div>
        
    )
}

export default ProductPage