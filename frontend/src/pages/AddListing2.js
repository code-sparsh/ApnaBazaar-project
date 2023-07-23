import { useState } from "react"
import useAuthContext from "../hooks/useAuthContext"


const AddListing = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [myImage, setMyImage] = useState('')

    const {user} = useAuthContext()

    const {token} = user


    const uploadImageHandler = (e) => {
        setMyImage(e.target.files[0])
    }

    const onSubmitHandler = async (e) => {

        e.preventDefault();

        const formdata = new FormData();

        formdata.append("myImage", myImage, myImage.name);
        formdata.append('title', title);
        formdata.append('description', description);
        formdata.append('phone',phone);


        const response = await fetch('http://localhost:4000/api/listings', {
            method:"POST",
            body: formdata,
            headers: {
                'Authorization': 'Bearer ' + token, 
            }
        })

        const json = await response.json();

        if(!response.ok)
            console.log(json.error)


        setTitle('')
        setDescription('')
        setPhone('')
        setMyImage('')
    }

    return (
        <div>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <h3>Add a new Listing</h3>
                    <label>Title: </label>
                    <input type="text"
                    onChange={(e) => {setTitle(e.target.value)}}
                    value = {title}
                    />
                    <label>Description: </label>
                    <input type="text"
                    onChange={(e) => {setDescription(e.target.value)}}
                    value = {description}
                    />
                    <label>Phone Number: </label>
                    <input type="number"
                    onChange={(e) => {setPhone(e.target.value)}}
                    value = {phone}
                    />
                    <label>Image: </label>
                    <input type="file"
                    onChange={uploadImageHandler}
                    />

                    <button className="p-3 bg-white rounded-md">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddListing;