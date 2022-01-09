const env = require('dotenv');
const express = require('express');
const router = express.Router();

const got = (...args) => import('got').then(({default: fetch}) => fetch(...args));

//map the environment file to the global process
env.config({ path: './config.env' })

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve a list of Shopify orders
 *     description: Retrieve a list of orders from Shopify Admin API. These orders can be saved into a NoSQL database like MongoDB or into MySQL
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json
 
*/

router.get('/', async function(req, res, next) {
    
    (async () => {
        try {
            
            var url = "https://" + process.env.SHOPIFY_API_KEY + ":" + process.env.SHOPIFY_API_PWD + process.env.SHOPIFY_API_URL;
            var query = "orders.json?fields=id,created_at,email,contact_email,currency,financial_status,total_price,billing_address,line_items&limit=50";

            const response = await got(url+ '/' + query);
            console.log(response.body);
            
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(JSON.parse(response.body));
            
            console.log("DATABASE_PASSWORD:", process.env.DATABASE_PASSWORD)
        } catch (error) {
            console.log('error');
            console.log(error);
            //=> 'Internal server error ...'
            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.json({'error': "An error occurred."});

        }
    })();    
});

  
module.exports = router;
