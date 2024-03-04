// Create an array or objects for products
// All products should contain,
// name, category, brand, seller as an array
// every seller should have, name, price, and address
// print in the Following Format:
//[{Name:"",Catrgory:"",brand:"",Seller:[{name:"",price:''}]},{}]

//Name: Product Name
//Category: Category
//Brand: Brand
//Sellers:
//------------------------------------------------
//Name: Seller Name 1, Price: Npr.1000
//Name: Seller Name 2, Price: Npr.2000
//=================================================
//
//Name: Product Name
//Category: Category
//Brand: Brand
//Sellers:
//------------------------------------------------
//Name: Seller Name 1, Price: Npr.1000
//Name: Seller Name 2, Price: Npr.2000
//=================================================
//
//using for_in or for_of loop


//declare variable products
let products = [//array
    {//objects
        //key or property : value
        name: "samsung+1",
        category: "mobile",
        brand: "samsung",
        sellers:[
            {
                name:"Seller one",
                price:200
            },
            {
                name:"Seller one",
                price:300
            }
        ]
    },
     {//objects
        //key or property : value
        name: "apple+1",
        category: "mobile",
        brand: "apple",
        sellers:[
            {
                name:"Seller one",
                price:800
            },
            {
                name:"Seller two",
                price:900
            }
        ]
    }
]

// for of = value based
for (let product of products) {
    // product = product[i]
    console.log("Name :"+product.name);
    console.log("Category :"+product.category);
    console.log("Brand :"+product.brand);
    console.log("Seller:");
    console.log("-----------------------------------------------------------------------");
    for (let seller of product.sellers) {
        console.log("Name:"+seller.name , ", Price:"+seller.price);
    }
    console.log("=======================================================================");
}