const { default: mongoose } = require('mongoose');
const Listing = require('../models/listingModel')
const User = require('../models/userModel')

const getAllListings = async (req,res) => {

    let listings = await Listing.find({}).sort({createdAt: -1});
    console.log(listings)


    // listings.map(async (listing) => {
    //     const _id  = listing.user;

    //     const user = await User.findOne({_id}).select('name')
    //     console.log(user)
    //      listing["userName"] = user

    //     // console.log(listing)

    //     return listing;

    // })

    // console.log(listings)

    res.status(200).json(listings);
}

// get a single listing
const getListing = async (req,res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json(404).json({error: "No such listing"})
    }
    const listing = await Listing.findOne({_id: id})

    if(!listing) {
        return res.status(404).json({error : "No such listing"})
    }

    res.status(200).json(listing);

}


const getUserListings = async (req,res) => {

    const _id = req.user._id
    console.log(_id)

    const listings = await Listing.find({user:_id}).sort({createdAt: -1})

    res.status(200).json(listings)
}

const createListing = async (req,res) => {
    
    const image = req.file ? req.file.filename : null;
    const {title, description, phone} = req.body;

    const {_id} = req.user._id

    // add data to db
    try {
        const listing = await Listing.create({title,description,phone,image,user:_id})
        res.status(200).json(listing)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteListing = async (req,res) => {

    const {id} = req.params;

    // deleting data from db

    const listing = await Listing.findOneAndDelete({_id : id})

    if(!listing) {
        return res.status(400).json({error: "Listing not found"})
    }

    return res.status(200).json(listing);
}


module.exports = {
    getAllListings,
    getListing,
    getUserListings,
    createListing,
    deleteListing,

}