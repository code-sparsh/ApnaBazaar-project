
import { useParams } from "react-router-dom"
import useListingContext from "../hooks/useListingContext"
import ProductDetails from '../components/ProductDetails'

const ProductPage = () => {

    const {listings} = useListingContext()

    const params = useParams()
    const id = params.id;

    const listing = listings.find((list => list._id === id))

    return (
        <div className="grid grid-cols-2">
            <ProductDetails listing={listing}/> 
            <div></div>
        </div>
        
    )
}

export default ProductPage