




let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        pname:"cat shoe",
        pPrice:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        quantity:1
    },

    {
        id:2,
        pname:"cat sneaker",
        pPrice:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        quantity:1
    
    
    
     },

      {
        id:3,
        pname:"sneaker",
        description:"formal shoe",
        pPrice:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        quantity:1
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    },
];



function product(id, pname, pImage, pPrice) {
	this.id = id;
  this.pname = pname;
  this.pImage = pImage;
  this.pPrice = pPrice;
}


  let myCartItem = localStorage.getItem("myCartItem");
  myCartItem = JSON.parse(myCartItem);

  if (myCartItem === null) {
    console.log('Cart is Empty');
  } else {
    myCartItem.forEach(e => {
        console.log(e);
    })
  }



 let html = "<table border='1|1'>";
 for (let i = 0; i < products.length; i++) {
  html += "<th>" + "Image" + "</th>";
  html += "<th>" + "Product Name" + "</th>";
  html += "<th>" + "Price" + "</th>";
  html += "<th>" + "quantity" + "</th>";
  html += "<tr>";
  html += "<td>" + '<img src="' + products[i].pImage + '">' + "</td>";
  html += "<td>" +products[i].pname + "</td>";
  html += "<td>" + "R" + products[i].pPrice + "</td>";

  html += "</tr>";

}
html += "</table>";
document.getElementById("cartSection").innerHTML = html;










const container = $('.products');

products.forEach((i) => {
	container.append(`
  <div class="card">
  	<img src="${i.pImage}" class="card-img-top" />
    <div class="card-body">
    	<div class="card-title">${i.pname}</div>
    	<p class="card-text">$${i.pPrice}</p>
      <button class="btn btn-primary addtocheckout" data-id="${i.id}">Buy Now</button>
    </div>
  </div>
  `);
});

function saveToCart(event) {
	event.preventDefault();
	const target = event.target;
  const productId = target.dataset.id;
  const product = products.find((i) => i.id === productId);
  console.debug(product);
  
  if (product) {
  	// Save it to the localStorage cart
  } else {
  	alert ("The product wasn't found... ")?
  }
}

$('.addtocart').on('click', saveToCart);