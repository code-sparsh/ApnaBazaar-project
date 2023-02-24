
import { useParams } from "react-router-dom"
import useListingContext from "../hooks/useListingContext"
import ProductDetails from '../components/ProductDetails'
import { useContext, useState } from "react"
import useAuthContext from "../hooks/useAuthContext"

const ProductPage = () => {

    const {listings} = useListingContext()
    const {user} = useAuthContext()

    const params = useParams()
    const id = params.id;

    const {token}= user;

    const [listing, setListing] = useState()

    const fetchDetails = async () => {

        const response = await fetch("http://localhost:4000/listings/" + id, {
            headers: {
                'Authorization': 'Bearer ' + token, 
            }
        })

        const json = await response.json()

        if(response.ok)
            setListing(json)
    }

    useContext(()=>{
        fetchDetails();
    },[])

    // const listing = listings.find((list => list._id === id))

    return (
        <div className="grid grid-cols-2">
            <ProductDetails listing={listing}/> 
            <div></div>
        </div>
        
    )
}

export default ProductPage