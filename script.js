/* FILTER FUNCTION */
function filter(category){
  let items = document.querySelectorAll('.item');

  items.forEach(item=>{
    if(category === 'all'){
      item.style.display = 'block';
    } else {
      item.style.display = item.classList.contains(category) ? 'block' : 'none';
    }
  });
}

/* LIGHTBOX */
let imgs = document.querySelectorAll('.gallery img');
let lightbox = document.querySelector('.lightbox');
let lightboxImg = document.getElementById('lightbox-img');

imgs.forEach(img=>{
  img.addEventListener('click',()=>{
    lightbox.style.display='flex';
    lightboxImg.src = img.src;
  });
});