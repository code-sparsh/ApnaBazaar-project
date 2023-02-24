import {useContext} from 'react'
import {ListingContext} from '../context/ListingContext'

const useListingContext = () => {

    const context = useContext(ListingContext)

    if(!context) {
        return console.log("Call useListingContext only inside the ListingContextProvider")
    }

    return context;
}

export default useListingContext