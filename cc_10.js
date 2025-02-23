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