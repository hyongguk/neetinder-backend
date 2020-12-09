const express = require("express");
const db = require("./knex");
const cors = require("cors");
const knexfile = require("../knexfile");
const moment = require("moment")
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)
var {PythonShell} = require('python-shell');
const { json } = require("body-parser");


const setupServer = () => {
  const app = express()
  app.use(cors());
  app.use(express.json());

  app.get("/", async(req, res) => {
      let celeblityName = await req.query.name
      //console.log(celeblityName)
      PythonShell.run('main.py', {args: celeblityName}, async function(err, result){
         if(err) throw err;
         let single = result[0]
         let double = single.replace(/'/g, '"')
         var double_ob = JSON.parse(double);
         console.log(double)
         //get data of top 3 from database by knex
         
         const first = await db.from('users').select('name').where('profile_image', double_ob.first);
         const second = await db.from('users').select('name').where('profile_image', double_ob.second);
         const third = await db.from('users').select('name').where('profile_image', double_ob.third);
         
         const top3Json = {
           first: {
             name: first[0].name,
             image: double_ob.first
           },
           second: {
             name: second[0].name,
             image: double_ob.second
           },
           third: {
             name: third[0].name,
             image: double_ob.third
           },
         }
          res.send(top3Json)
      } )

  })

  return app;
};

module.exports = { setupServer };