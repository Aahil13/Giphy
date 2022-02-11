// for the date at the footer
const date = new Date();
const year  = date.getFullYear();
document.querySelector(".copyright-text").innerHTML = `&copy; Aahil ${year}`;
const gifContainer = document.querySelector('.gif-container')

// getting and using the Api
function handleClick() {
    let inputValue = document.getElementById('search').value;
    let url = "https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=1&q="
    url = url.concat(inputValue);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((content) => {
        console.log(content.data);
        content.data.forEach(data => {
          console.log(data.images.downsized.url)
          gifContainer.innerHTML += `<div class="gif-layout"><a href="#" onclick="handleId()"><img src=${data.images.downsized.url} alt=${data.title}></a></div>`
        })
    })
    .catch(err =>{
        console.error(err)
    })
}

function handleId() {
   window.location.href = 'singleGif.html'
}



 



