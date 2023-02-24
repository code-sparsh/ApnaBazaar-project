import { Link,useParams } from "react-router-dom"


const ListingDetail = ({listing}) => {

    const params = useParams();
    console.log(params)
    return (
        <Link to={"/listings/details/"+ listing._id} className="listing py-5 my-5 flex border rounded-lg borders-blue-500 bg-gray-100">

            <div className="border bordesr-red-300 w-60 h-60 flex ml-4 mr-5 max-[500px]:w-40 max-[500px]:h-40">
                <img id="listing" className = "flex-shrink-0 justify-center" alt = {listing.image} src = {"http://localhost:4000/public/images/" + listing.image}></img>
            </div>
            <div className=" flex flex-col rounded-sm pr-10 bg-gray-100">
                <div className="text-3xl">{listing.title}</div>
                <p><strong>Description: </strong> {listing.description}</p>
                <div><strong>Phone number: </strong>{listing.phone}</div>            
            </div>
        </Link>
    )
}

export default ListingDetail