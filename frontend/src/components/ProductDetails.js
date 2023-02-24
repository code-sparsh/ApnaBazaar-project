import { useEffect, useState } from "react"
// import image1 from "../images/product-1.png"
import image2File from "../images/product-2.png"

const ProductDetails = ({listing}) => {

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const fetchImage = async () => {

        const response = await fetch("http://localhost:4000/public/images/" + listing.image)

        const imageBlob = await response.blob()
        const imageObjectUrl = URL.createObjectURL(imageBlob)

        setImage1(imageObjectUrl)


        const response2 = await fetch("/images/product-2.png")
        console.log("Image 2: " + response2)
        const image2Blob = await response2.blob()
        const imageObjectUrl2 = URL.createObjectURL(image2Blob)
        
        setImage2(imageObjectUrl2)


        setImage3(imageObjectUrl2)
    }


    // const imageObjectUrl = URL.createObjectURL(image2File);
     console.log(image1)
     console.log(image2)

    useEffect(()=>{
        fetchImage()
    },[])

    const switchImage2 = () => {
        console.log("called function")
        
        setImage2(image1)
        setImage1(image2)
    }
    const switchImage3 = () => {
        console.log("called function")
        setImage1(image3)
        setImage3(image1)
    }

    return (
        <div>
            <div className="title text-4xl m-9">{listing.title}</div>
            <div className="image-grid grid grid-cols-2 gap-x-6 border border-blue-600">
                <div className="w-96 h-96 flex justify-center">
                    <img src = {image1}/>
                </div>
                <div className="grid grid-cols-2 gap-x-8 content-center border border-orange-600">
                        <img onClick={switchImage2} src={image2}/>
                        <img onClick={switchImage3} src={image3}/>
                </div>
            </div>

            <div className="m-5 w-auto h-36 pt-4 pl-3 bg-gray-100 shadow-md rounded-md">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis doloribus labore cum, odio, molestias sequi provident dicta odit aspernatur numquam dolorum illum amet soluta officiis, libero totam sunt at?</div>
            </div>
        </div>

    )
}

export default ProductDetails