// for the date at the footer
const date = new Date();
const year = date.getFullYear();
document.querySelector(".copyright-text").innerHTML = `&copy; Aahil ${year}`;
let globalId;

// getting and using the Api
async function handleClick() {
  try {
    let inputValue = document.getElementById("search").value;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=1&q=${inputValue}`
    );
    const data = await res.json();
    globalId = data.data[0].id;
    const gifContainer = document.querySelector(".gif-container");
    gifContainer.innerHTML += `<div class="gif-layout"><a onclick="handleId()"><img src=${data.data[0].images.downsized.url} alt=${data.data[0].title}></a></div>`;
  } catch (err) {
    console.error(err);
  }
}

function handleId() {
  window.location.href = `singleGif.html?id=${globalId}`;
}
