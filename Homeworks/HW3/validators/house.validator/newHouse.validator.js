module.exports = (newHouseData) => {

    const  {city, street, price} = newHouseData;

    if (!city || !street ||  !price){
        throw new Error('House data is  not valid')
    }
};