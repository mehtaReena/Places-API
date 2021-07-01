const { nanoid } = require('nanoid')
const Place = require('../models/place');



const getPlace = async (slug) => {

  try {
    const place = await Place.findOne({ slug: slug });
    if (place == null) {
      console.log("Place not found!");
    }
    else {
      console.log("Place name :", place);
    }
  }
  catch (e) {
    console.log('Error Occured', e)
  }
}


const createPlace = async (place) => {
  console.log(place)
  let slug = place.name.replace(" ", "-") + "-" + nanoid(5);
  let newPlace = new Place({ ...place, slug });
  try {
    newPlace.save();
    return { status: true, result: newPlace };
  } catch (e) {
    return { status: false, result: { message: e.message } };
  }

}

const placesList = async (query) => {
  try {
    let places;
    if (query.name) {
      places = await Place.find({ name: { "$regex": query.name, "$options": "i" } });
    } else if (query.city) {
      places = await Place.find({ city: { "$regex": query.city, "$options": "i" } });
    } else {
      places = await Place.find();
    }
    return { status: true, result: places };
  } catch (e) {
    return { status: false, result: { message: e.message } };
  }
};

module.exports = {
  createPlace,
  placesList,
  getPlace

}