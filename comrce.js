
const products = [
  {
    id: 1,
    title: "Air Force1",
    price:250,
    colors: [
      {
        code: "black",
        img:"./imagess/air.png",
      },
      {
        code: "darkblue",
        img: "./imagess/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan4",
    price: 290,
    colors: [
      {
        code: "lightgray",
        img: "./imagess/jordan.png",
      },
      {
        code: "green",
        img: "./imagess/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 150,
    colors: [
      {
        code: "lightgray",
        img: "./imagess/blazer.png",
      },
      {
        code: "green",
        img: "./imagess/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 178,
    colors: [
      {
        code: "black",
        img: "./imagess/crater.png",
      },
      {
        code: "lightgray",
        img: "./imagess/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 145,
    colors: [
      {
        code: "gray",
        img: "./imagess/hippie.png",
      },
      {
        code: "black",
        img: "./imagess/hippie2.png",
      },
    ],
  },
];
const menuitem=document.querySelectorAll('.Menuitem')//This line selects all the elements in the HTML that have 
//  class Menuitem These are clickable menu items like 
//  "AIR JORDAN",etc.It returns a list(called "NodeList") of these elements.

const slidewrapper=document.querySelector('.sliderwrapper')
//This is the container that holds all the slider items(the shoe images).
//going to move this container horizontally when a user clicks on one of the menu items.


const productImage = document.querySelector('.productimage'); // Select the product image element
const productTitle = document.querySelector('.producttitle'); // Select the product title element
const productPrice = document.querySelector('.productprize'); // Select the product price element
const productColors = document.querySelectorAll('.color'); // Select the product colors
const productSize=document.querySelectorAll('.size')
let chosenProduct = products[0];
menuitem.forEach((item,index) => {   //lop through each menuitem
    item.addEventListener('click',function(){
 slidewrapper.style.transform=`translateX(-${index*100}vw)`;//this help to move it 


   chosenProduct = products[index]; // Initialize the product with given index
  
  //change text of current products
  productTitle.textContent=chosenProduct.title;
   //change price of current product
   productPrice.textContent=`$ ${chosenProduct.price}`;
   //change image acording select product
   productImage.src=chosenProduct.colors[0].img;
   //asign new color 
   productColors.forEach((color,index)=>{
    color.style.backgroundColor=chosenProduct.colors[index].code; 
  })
    });
});
//change color of produt
productColors.forEach((color,index)=>{
  color.addEventListener("click",function(){
    productImage.src=chosenProduct.colors[index].img;
  });
});

productSize.forEach((size,index)=>{
  size.addEventListener("click",()=>{
  productSize.forEach((size)=>{
    size.style.backgroundColor="white";
    size.style.color="black"
  })
  
    size.style.backgroundColor="black";
    size.style.color="white"
  })
})
const productbutton=document.querySelector('.productbutton');
const payment=document.querySelector('.payment');
const close=document.querySelector('.close')

productbutton.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})
  
 
