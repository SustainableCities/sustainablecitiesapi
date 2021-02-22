const express = require('express');
const parcels = express.Router()
const { sequelize, parcel } = require('../models');


// Read All
parcels.get('/', async(req, res)=>{
    try {
        const parcels = await parcel.findAll()
        return res.json(parcels)
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: 'something went wrong'})
    }
})

module.exports = parcels;