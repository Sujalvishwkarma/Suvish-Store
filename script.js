const banner_content = [
    'https://m.media-amazon.com/images/G/31/img12/home-improvement/Store/JUPITER23/misc1/image_259.png',
    'https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/Jup_2023/Associates/PH-1/33.jpg',
    'https://m.media-amazon.com/images/G/31/INAssociates/2020/AC/Sale_Live.jpg'
];
const banner = document.querySelector(".banner-image");
banner.setAttribute('src', banner_content[0]);
let i = 0;
setInterval(() => {
    if (i < banner_content.length) {
        banner.setAttribute('src', banner_content[i]);
        i++;
    }
    else {
        i = 0;
    }
}, 3000);


const product_category = [
    {
        image : "https://nout.kz/upload/resize_cache/webp/iblock/25c/9koowkkjaihgn8pdhd3uva902ptil6fx/product_image_69267_1182222-_1_PhotoRoom.webp",
        title : "Laptop",
        description : "Asus | HP | Dell | Acer | lenovo"
    },
    {
        image : "https://www.deluxworld.com/uploads/admin/image/20221018/1666085778249307.png",
        title : "Mouse",
        description : "Zebronics | Dell | Acer "
    },
    {
        image : "https://nout.kz/upload/resize_cache/webp/iblock/25c/9koowkkjaihgn8pdhd3uva902ptil6fx/product_image_69267_1182222-_1_PhotoRoom.webp",
        title : "Laptop",
        description : "Asus | HP | Dell | Acer | lenovo"
    },
    {
        image : "https://nout.kz/upload/resize_cache/webp/iblock/25c/9koowkkjaihgn8pdhd3uva902ptil6fx/product_image_69267_1182222-_1_PhotoRoom.webp",
        title : "Laptop",
        description : "Asus | HP | Dell | Acer | lenovo"
    }
];

const product_category_container = document.querySelector(".Product-category");
product_category.forEach(category => {
    var product = document.createElement("a");
    product.className="quad-child Product"
    product.innerHTML= `
    <div class="product-img" style="background-image:url(`+ category.image + `)"></div>
    <h2>`+category.title+`</h2>
    <p>`+category.description+`</p>` ;
    product_category_container.appendChild(product);
});

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".primary-menu").classList.toggle('visible')
})