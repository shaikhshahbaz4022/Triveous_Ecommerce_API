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
 *           description:Image of Product.
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
 *         category: 64f1f2a178821805b01ec334
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
