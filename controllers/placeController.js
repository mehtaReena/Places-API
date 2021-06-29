
const Place = require('../models/place');



const getPlace= async (slug) => {

    try {
        const place = await Place.findOne({ slug: slug });
        if (place == null) {
            console.log("Place not found!");
        }
        else {
            console.log("Place name :",place);
        }
    }
    catch (e) {
        console.log('Error Occured', e)
    }


}


const createPlace = async (place) => {
    let slug = place.name.replace(" ", "-") + "-" + nanoid(6);
    let newPlace = new Place({ ...place, slug });
    try {
      newPlace.save();
      return { status: true, result: newPlace };
    } catch (e) {
      return { status: false, result: { message: e.message } };
    }

}










module.exports = {
    createPlace,

}