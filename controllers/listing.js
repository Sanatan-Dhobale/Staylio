const Listing = require("../models/listing.js");
const axios = require("axios");

module.exports.index = async (req, res) => {
const { category, search } = req.query;

let filter = {};

// Category filter
if (category) {
    filter.category = category;
}

// Search filter
if (search) {
    filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } }
    ];
}

const allListings = await Listing.find(filter);

res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", }, }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist");
        res.redirect("/listings");
    } else {
        res.render("listings/show.ejs", { listing })
    }

};

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let location = req.body.listing.location;
    let mapAPI = process.env.MAPTILER_API_KEY;

    let locationData = await axios.get(
        `https://api.maptiler.com/geocoding/${location}.json`,
        {
            params: {
                key: process.env.MAPTILER_API_KEY,
            },
        }
    );

    let coordinates = locationData.data.features[0].geometry.coordinates;
    console.log(coordinates);


    const newListing = new Listing(req.body.listing);
    newListing.image = { url, filename }
    newListing.owner = req.user._id;

    newListing.geometry = {
        type: "Point",
        coordinates: coordinates,
    };

    newListing.category = req.body.listing.category;

    await newListing.save();
    req.flash("success", "New listing created");
    res.redirect("/listings");    
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist");
        res.redirect("/listings");
    } else {
        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
        res.render("listings/edit.ejs", { listing, originalImageUrl })
    }

};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save()
    }
    req.flash("success", "Listing updated");
    res.redirect("/listings");
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    console.log(deletedListing);
    res.redirect("/listings");

};

