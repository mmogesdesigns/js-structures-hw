let isUserLoggedIn = false;

const products =[
    {id: 1 , name: "Eggs", price: 5.99},
    {id:2, name: "Bread", price: 3.99},
    {id:3, name: "Milk", price:3.99}
];

let cart = [];

function login(){
    isUserLoggedIn = true;
    console.log("User logged in successfully!")
}

function displayProducts(){
    console.log("Available Products:")
    products.forEach(products => {
        console.log(`${product.id}: ${product.name} - $${product.price}`)
    });
}
function addToCart(productId){
    if (!isUserLoggedIn){
        console.log("Must be logged in to add items to your cart!!")
            return;
    }
    const product  = products.find(p => p.id === productId);
    if (product){
        cart.push(product);
        console.log(`${product.name} added to cart!`)
    } else {
        console.log("Product not found!")
    };
}

function calculateTotal() {
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  console.log(`Total Cost: $${total}`);
}

login();
displayProducts();
addToCart(1);
calculateTotal();

// Task 2

let accountbalance = 0;

function deposit(amount){
    if (amount > 0){
        accountbalance += amount;
        console.log(`Deposit successful!! Your new balance is $${accountbalance}`)

    } else{
        console.log("Please enter a valid amount to deposit.")
    }
}
function withdraw(amount){
    if (amount <= accountbalance){
        accountbalance -= amount;
        console.log(`Withdrawl successful!! Your new balance is $${accountbalance}`)

    } else{
        console.log("Insufficient funds for this withdrawal.");
    }
}

function checkBalance(){
    console.log(`Your current balance is $${accountbalance}.`)
}

deposit(500);
withdraw(100);
checkBalance();