/* ----------------------------->>>>>>> Schemas <<<<<<<-----------------------------*/

/* --------------------->>> Authorization Schema<<<---------------------*/
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description: Bearer token authorization header
*/


/* --------------------->>> Users Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the user
 *         username:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - email
 *         - password
 *       example:
 *         username: Triveous
 *         email: triveous01@gmail.com
 *         password: triveous
 */


/* --------------------->>> Products Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the product
 *         title:
 *           type: string
 *           description: Title of Product.
 *         image:
 *           type: string
 *           description: Image of Product.
 *         description:
 *           type: string
 *           description: Description of Product.
 *         category:
 *           type: ObjectId
 *           description: Category Id of Product Category.
 *         availability:
 *           type: boolean
 *           description: Availablitiy of that product (true/false).
 *         price:
 *           type: integer
 *           description: Price of Product
 *       example:
 *         _id: 650d24704e5f0989e6f0d762
 *         title: Product Name
 *         image : Product Image
 *         description: Product Description
 *         category: 650c88cde67984b28a81e86c
 *         price: 25999
 *         availability: true/false
 */


/* --------------------->>> Category Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the Category
 *         name:
 *           type: string
 *           description: Title of Category.
 *       example:
 *         _id: 650d24704e5f0989e6f0d762
 *         name: Category Name
 */


/* --------------------->>> Order Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Orders:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: ID of the Order
 *         user:
 *           type: ObjectId
 *           description: ID of the User who placed the order
 *         items:
 *           type: array
 *           description: List of items in the order
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: ObjectId
 *                 description: ID of the Product in the order
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the Product in the order
 *         total:
 *           type: number  # Use "number" for floating-point values like price
 *           description: Total price of the order
 *         orderStatus:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               enum: [Pending, Shipped, Delivered]
 *               default: Pending
 *             description:
 *               type: string
 *               description: Status description of the order
 *       example:
 *         _id: 650d24704e5f0989e6f0d762
 *         user: 650d24704e5f0989e6f0d762
 *         items:
 *           - product: 650d24704e5f0989e6f0d762
 *             quantity: 2
 *           - product: 647b63d83391dbb919246df9
 *             quantity: 1
 *         total: 150.0
 *         orderStatus:
 *           status: Shipped
 *           description: Product description
 */


/* --------------------->>> Cart Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     cartItemsSchema:
 *       type: object
 *       properties:
 *         product:
 *           type: ObjectId
 *           description: ID of the Product in the cart item
 *         quantity:
 *           type: integer
 *           description: Quantity of the Product in the cart item
 *       example:
 *         product: 650d24704e5f0989e6f0d762
 *         quantity: 2
 *
 *     Cart:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: ID of the Cart
 *         userID:
 *           type: ObjectId
 *           description: ID of the User to whom the cart belongs
 *         products:
 *           type: array
 *           description: List of items in the cart
 *           items:
 *             $ref: '#/components/schemas/cartItemsSchema'
 *       example:
 *         _id: 650d24704e5f0989e6f0d762
 *         userID: 650d24704e5f0989e6f0d762
 *         items:
 *           - product: 650d24704e5f0989e6f0d762
 *             quantity: 2
 *           - product: 647b63d83391dbb919246df9
 *             quantity: 1
 */
/* ---------------------------------------->>>>>>><<<<<<<----------------------------------------*/

// ---------------------------------------->>>>>>><<<<<<<----------------------------------------

// ------------------------>>> User Routes <<<------------------------
// Signup
/**
 * @swagger
 * paths:
 *   /user/register:
 *     post:
 *       summary: Register a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       responses:
 *         201:
 *           description: User registered successfully
 *           content:
 *             application/json:
 *               schema:
 *                 example:
 *                   success: true
 *                   message: Registration successful
 *                   data:
 *                       name: Traveous
 *                       email: traveous01@gmail.com
 *                       password: $2b$1Fwo6wgApNDpTVQju1RpVux6b5Ql1U/jUI0cc6B1Z7UGZ9VFpmTU
 *                       _id: 64f4c625a9b674bd4bb6bc8e
 *                       createdAt: 2023-09-03T17:45:09.734Z
 *                       updatedAt: 2023-09-03T17:45:09.734Z
 *                       __v: 0
 *         500:
 *           description: Internal Server Error or contact the administrator or Signup Failed
 *         400:
 *           description: User already exists
 */

// Login
/**
 * @swagger
 * paths:
 *   /user/login:
 *     post:
 *       summary: Log in an existing user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: Email of the user
 *                 password:
 *                   type: string
 *                   description: Password of the user
 *               required:
 *                 - email
 *                 - password
 *               example:
 *                 email: traveous01@gmail.com
 *                 password: traveous01
 *       responses:
 *         200:
 *           description: Login successful
 *           content:
 *             application/json:
 *               schema:
 *                 example:
 *                   success: true
 *                   message: Login successful
 *                   token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTBjNmU4YWZiZTc0MTJmYWVjM2U5YzkiLCJlbWFpbCI6InNoYWhiYXpAZ21haWwuY29tIiwiaWF0IjoxNjk1MzkyMDE1LCJleHAiOjE2OTUzOTkyMTV9.F5Bj6aP4Cxas1LQj0uzQVq58blFa2lZNfeTcBq4FUqI
 *         500:
 *           description: Internal Server Error or Contact to administrator or Login Failed
 *         401:
 *           description: Authentication failed
 *         404:
 *           description: User Not Found
 */

//  Logout
/**
 * @swagger
 * paths:
 *   /user/logout:
 *     post:
 *       summary: Log out an existing user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: User's authentication token
 *                   example: eyJciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYxYTliMWZiMGZjZWE5M2E0MjBhOWEiLCJpYXQiOjE2OTM1Nzc0ODYsImV4cCI6MTY5MzY2Mzg4Nn0.3x_QXasu0CHQHTmfUjldAJr_f6osfk_qMpV0Iuk
 *       responses:
 *         '200':
 *           description: Logout successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     description: Indicates if the logout was successful.
 *                     example: true
 *                   message:
 *                     type: string
 *                     description: Logout success message.
 *                     example: Logout successful
 *         '500':
 *           description: Internal Server Error or Logout Failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     description: Indicates if the logout failed.
 *                     example: false
 *                   message:
 *                     type: string
 *                     description: Error message in case of failure.
 *                     example: Logout failed, please contact the administrator.
 */

// ---------------------------------------->>>>>>><<<<<<<----------------------------------------



// ------------------------>>> Product Routes <<<------------------------

//  Get all products
/**
 * @swagger
 * paths:
 *   /product/get:
 *     get:
 *       summary: Get all products
 *       tags: [Products]
 *       responses:
 *         200:
 *           description: All products retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: All products retrieved successfully
 *                 data: [
 *                   {
 *                     _id: "64f1f47978821805b01ec33d",
 *                     title: "Redmi Note 9 Pro Max",
 *                     price: 40000,
 *                     image: "Image URL",
 *                     description: "High-quality smartphone with advanced features.",
 *                     availability: true,
 *                     category: "650c88cde67984b28a81e86c",
 *                     __v: 0
 *                   }
 *                 ]
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Get product details by product ID
/**
 * @swagger
 * paths:
 *   /product/get/{productId}:
 *     get:
 *       summary: Get product details by product ID
 *       tags: [Products]
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: productId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to retrieve
 *       responses:
 *         '200':
 *           description: Product details retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product details retrieved successfully
 *                 data:
 *                   {
 *                     _id: "650c88cde67984b28a81e86c",
 *                     title: "Redmi Note 9 Pro Max",
 *                     price: 39999,
 *                     image: "Image URL",
 *                     description: "High-quality smartphone with advanced features.",
 *                     availability: true,
 *                     category: "650c88cde67984b28a81e86c",
 *                     __v: 0
 *                   }
 *         401:
 *           description: Token not provided
 *         404:
 *           description: Product not found or Invalid Product ID
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Get products by category ID
/**
 * @swagger
 * paths:
 *   /product/get/{categoryId}:
 *     get:
 *       summary: Get products by category ID
 *       tags: [Products]
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: categoryId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the category to filter products
 *       responses:
 *         200:
 *           description: Products retrieved successfully by Category ID
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product details retrieved successfully
 *                 data:
 *                   - _id: 64f1f47978821805b01ec33d
 *                     title: Redmi Note 9 Pro Max
 *                     price: 15999
 *                     description: High-quality smartphone with advanced features.
 *                     availability: true
 *                     category:
 *                       _id: 650c88cde67984b28a81e86c
 *                       name: Electronics
 *                       createdAt: 2023-09-01T14:23:09.221Z
 *                       updatedAt: 2023-09-01T14:23:09.221Z
 *                       __v: 0
 *         404:
 *           description: No products found for this category
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

//  Add a new product
/**
 * @swagger
 * paths:
 *   /product/create:
 *     post:
 *       summary: Add a new product
 *       tags: [Products]
 *       security:
 *          - BearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Title of the new product
 *                 description:
 *                   type: string
 *                   description: Description of the new product
 *                 image:
 *                   type: string
 *                   description: Image of the new product
 *                 category:
 *                   type: string
 *                   description: ID of the category for the new product
 *                 availability:
 *                   type: boolean
 *                   description: Availability of the new product (true/false)
 *                 price:
 *                   type: integer
 *                   description: Price of the new product
 *               required:
 *                 - title
 *                 - category
 *                 - price
 *               example:
 *                 title: New Product
 *                 description: Product Description
 *                 image: Product Image
 *                 category: 650c88cde67984b28a81e86c
 *                 availability: true
 *                 price: 1999
 *       responses:
 *         201:
 *           description: Product Added Succesfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 201
 *                 success: true
 *                 message: Product Added Succesfully
 *                 data:
 *                   _id: 650c88cde67984b28a81e86c
 *                   title: New Product
 *                   price: 999
 *                   description: Product Description
 *                   availability: true
 *                   category:
 *                     _id: 650c88cde67984b28a81e86c
 *                     name: Electronics
 *                     createdAt: 2023-09-01T14:23:09.221Z
 *                     updatedAt: 2023-09-01T14:23:09.221Z
 *                     __v: 0
 *         404:
 *           description: Category not found
 *         400:
 *           description: Cannot Add Multiple Products with Same Title
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Update product by product ID
/**
 * @swagger
 * paths:
 *   /product/update/{productId}:
 *     put:
 *       summary: Update product by product ID
 *       tags: [Products]
 *       security:
 *          - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: productId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: New title of the product
 *                 description:
 *                   type: string
 *                   description: New description of the product
 *                 image:
 *                   type: string
 *                   description: New image of the product
 *                 availability:
 *                   type: boolean
 *                   description: New availability of the product (true/false)
 *                 price:
 *                   type: integer
 *                   description: New price of the product
 *               required:
 *                 - title
 *                 - price
 *               example:
 *                 title: Updated Product
 *                 description: Updated Product Description
 *                 availability: true
 *                 price: 7899
 *       responses:
 *         200:
 *           description: Product Updated Succesfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product Updated Succesfully
 *                 data:
 *                   _id: 64f1f47978821805b01ec33d
 *                   title: Updated Product
 *                   price: 1299
 *                   description: Updated Product Description
 *                   image: Updated Product image
 *                   availability: true
 *                   category:
 *                     _id: 650c88cde67984b28a81e86c
 *                     name: Electronics
 *                     createdAt: 2023-09-01T14:23:09.221Z
 *                     updatedAt: 2023-09-01T14:23:09.221Z
 *                     __v: 0
 *         404:
 *           description: Product Not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Delete product by product ID
/**
 * @swagger
 * paths:
 *   /product/delete/{productId}:
 *     delete:
 *       summary: Delete product by product ID
 *       tags: [Products]
 *       security:
 *          - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: productId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to delete
 *       responses:
 *         200:
 *           description: Product Deleted successfully
 *         404:
 *           description: Product not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

