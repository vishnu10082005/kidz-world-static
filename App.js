var btn = document.getElementsByClassName("cart")
var Items = document.getElementById("cart-icon");
var value = document.getElementById("cart-value")

list = [
    { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
    { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
    { name: "Matilda", quantity: 0, dollars: 6, cents: 80 },
    { name: "Harry Potter", quantity: 0, dollars: 10, cents: 0 },
    { name: "For Young Readers", quantity: 0, dollars: 7, cents: 29 },
    { name: "Wimpy Kid - DIY", quantity: 0, dollars: 4, cents: 99 },
    { name: "Dart Board", quantity: 0, dollars: 17, cents: 49 },
    { name: "Connect Four", quantity: 0, dollars: 19, cents: 99 },
    { name: "Jenga", quantity: 0, dollars: 20, cents: 99 },
    { name: "Monopoly", quantity: 0, dollars: 19, cents: 49 },
    { name: "Bookmarks", quantity: 0, dollars: 12, cents: 49 },
    { name: "Birthday Card", quantity: 0, dollars: 12, cents: 49 },
    { name: "Stuffed toys", quantity: 0, dollars: 15, cents: 99 },
    { name: "Dream catcher drawing", quantity: 0, dollars: 18, cents: 49 }
  ]
  
  function Cart() {
    let Items = 0;
    list.forEach(item => {
      Items += item.quantity;
    });
    value.innerHTML = Items;
  }
  
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", myFunction)
  function myFunction() {
    list[i].quantity++;
    Cart();
  }
}


Items.addEventListener("click", finalOutput)

function finalOutput() {text = "";

  for (var i = 0; i < list.length; i++) {
  if (list[i].quantity !== 0) {
      console.log("Item name: " +list[i].name )
       console.log( " The Quantity of that item is: " +list[i].quantity)
      
              }
              
  }

}
