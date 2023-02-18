const express = require('express');
const multer = require('multer');
const {
    getAllListings,
    getListing,
    getUserListings,
    createListing,
    deleteListing,
} = require('../controllers/listingController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();
router.use(requireAuth);

const storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

// get all list items
router.get("/", getAllListings)


// get a single listing
router.get("/:id", getListing);

// get all the list items of a specific user

router.get("/user", getUserListings)

// create a new listing
router.post("/",upload.single('myImage'),createListing)

// delete a listing

router.delete("/:id",deleteListing)



module.exports = router;