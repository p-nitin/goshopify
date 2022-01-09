# goShopify

Welcome to GoShopify
This REST API demonstrates integration with the Shopify admin API.  We have a demo Shopify store where we have added a couple of products and orders. The goShopify demo API can read products and orders from our  Shopify store.

- You can access our demo store <a href="https://springback-store.myshopify.com/" target="_bank">here</a>
- The Go Shopify API demo is deployed <a href="#" target="_bank">here</a>
- Download the source code from Github

## Tech Stack
- NodeJS backend with Express
- Hosted on Heroku
- Primary Node Modules
  - express
  - cors
  - helmet
  - morgan
  - dotenv
  - swagger-jsdoc
  - swagger-ui-express

## Using the Source Code
After downloading the source code from Github, you will need to install the above modules. You will need the following prerequisites:

- Create a development Shopify store. More information <a href="https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores" target="_bank">here</a>
- Create a private Shopify App. This is needed to access the Admin API using basic authentication and does not undergo the review process. The app will work only for your store. More information <a href="https://help.shopify.com/en/manual/apps/private-apps" target="_bank">here</a>
- Generate API credentials. More information <a href="https://shopify.dev/apps/auth/basic-http#:~:text=Generate%20API%20credentials,-After%20the%20store&text=From%20your%20Shopify%20admin%2C%20go,and%20a%20contact%20email%20address." target="_bank">here</a>
- Update the config.env files with the values from your Shopify store
  - SHOPIFY_API_KEY=YOUR_KEY
  - SHOPIFY_API_PWD=YOUR_shppa_PASSWORD
  - SHOPIFY_API_URL=@YOUR_SHOPIFY_URL/admin/api/2021-10

*Note:* The Shopify API URL os prefixed with @ followed by only the domain name without the WWW

