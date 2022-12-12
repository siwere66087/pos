

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        name:"cat shoe",
        description:"cat sneaker",
        price:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
       
    },

    {
        id:2,
        name:"cat sneaker",
        description:"jogging sneaker",
        price:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
       
    
    
    
     },

      {
        id:3,
        name:"sneaker",
        pdescription:"formal shoe",
        price:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        count:1
    
    
    
    },
     {
        id:4,
        name:"cat shoe",
        description:"casual shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:5,
        name:"cat shoe",
        description:"casual shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/DzjZ7Kqn/z3.jpg",
       
    
    
    
    },
    {
        id:6,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/gj9G0crF/kappa.webp",
        count:1
    
    
    
    },
    {
        id:7,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/bvK7xCP1/z1.jpg",
        count:1
    
    
    
    },
    {
        id:8,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/PfM7JrCW/nike1.png",
        count:1
    
    
    
    },
    {
        id:9,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/3r9L7Sq9/new-balance.webp",
        count:1
    
    
    
    },
    {
        id:10,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/PfM7JrCW/nike1.png",
        count:1
    
    
    },
    {
        id:11,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
];










async function diplayprod(){
    products.forEach((products)=> {
        document.querySelector(".container").innerHTML +=
            `<div class="container ">
          <div class="card" style="width: 18rem;">
        <img src="${products.pImage}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
        <div class="card-body">
        <h5 class="card-title">${products.pName}</h5>
     <p class="card-text">${products.pPrice}</p>
    <a href="#" class="btn btn-dark">Add to checkout</a>
  </div>
        </div>
      </div>`;
    })
}
diplayprod();



//local storage

let products_serialized = JSON.stringify(products);
console.log(products_serialized );
localStorage.setItem("products",products_serialized);
console.log(localStorage);




