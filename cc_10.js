//Task 1 - Created Product Class

//Defining a class to represent a product in the inventory
class Product {
    //Constructor initializes the product with the name, ID, price, and the stock quantity
    constructor(name, id, price, stock) {
        //Storing the product name
        this.name = name;    
        
        //Storing the product ID
        this.id = id;        
        
        //Storing the product price
        this.price = price;  
        
        //Storing the available stock quantity
        this.stock = stock;  
    }

    //Method to return product details as a formatted string
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    //Method to update stock when an order is placed
    updateStock(quantity) {
        //Checking if enough stock is available before reducing it
        if (this.stock >= quantity) {  
            
            //Deducting the ordered quantity from the stock
            this.stock -= quantity;    
        } else {
            //Logging to the console if the stock can't be reduced below 0
            console.log(`Cannot reduce stock below 0. Current stock: ${this.stock}`);
        }
    }
}


//Creating a new product instance
const prod1 = new Product("Laptop", 101, 1200, 10);  

//Displaying the initial product details and logging them to the console
console.log(prod1.getDetails()); 

//Reducing the stock by 3 units
prod1.updateStock(3);  

//Displaying the updated product details after the stock is reduced and logging them to the console
console.log(prod1.getDetails()); 

//Task 2 - Created Order Class

//Defining a class to represent an Order in the system
class Order {
    //Constructor initializing an order with ID, product, and quantity
    constructor(orderId, product, quantity) {
        
        //Storing the order ID
        this.orderId = orderId;   
        
        //Storing the product being ordered
        this.product = product;   
        
        //Storing the ordered quantity
        this.quantity = quantity; 
        
        //Calculating the total order price
        this.totalPrice = this.product.price * this.quantity;

        //Reducing the stock of the product when the order is created
        this.product.updateStock(this.quantity); 
    }

    //Method to return the order details as a formatted string
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}


//Creating a new order for 2 laptops
const order1 = new Order(501, prod1, 2); 

//Displaying order details and logging them to the console
console.log(order1.getOrderDetails()); 

//Displaying the updated product details after the stock is reduced from the order and logging them to the console
console.log(prod1.getDetails());

//Task 3 - Created Inventory Class

//Defining a class to manage an inventory system
class Inventory {
    //Constructor initializes an empty list of products and orders
    constructor() {
        //Array to store products in inventory
        this.products = [];  //Array to store products in inventory
        
        //Array to store orders
        this.orders = [];    
    }

    //Method to add a product to the inventory
    addProduct(product) {
        
        //Storing the new product in the inventory list
        this.products.push(product);
    }

    //Method to display all products in the inventory
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails())); 
    }
    //Task 4 - Implemented Order Management

    //Method to create and place an order for a product
    placeOrder(orderId, product, quantity) {
        //Ensuring that there is enough stock before placing the order
        if (product.stock >= quantity) {  
            //Creating a new order
            let order = new Order(orderId, product, quantity); 
            
            //Adding the new order to the list of orders
            this.orders.push(order); 
        } else {
            //Logging to the console if there is insufficient stock
            console.log(`There is insufficient stock! The stock of ${product.name} is currently ${product.stock}`);
        }
    }

    //Method to display all orders placed in the inventory system
    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails())); 
    }

}

//Creating an inventory instance to store products
const inventory = new Inventory(); 

//Adding the Laptop product to the inventory
inventory.addProduct(prod1); 

//Displaying all the products currently in the inventory
inventory.listProducts();

//Placing a new order for 2 laptops
inventory.placeOrder(601, prod1, 2); 

//Displaying all the orders placed in the system
inventory.listOrders();

//Displaying the updated product details after another order is placed and logging them to the console
console.log(prod1.getDetails()); 
