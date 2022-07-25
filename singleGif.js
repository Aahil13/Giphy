const date = new Date();
const year = date.getFullYear();
document.querySelector(".copyright-text").innerHTML = `&copy; Aahil ${year}`;

let queryStr = window.location.search;

const urlParams = new URLSearchParams(queryStr);

const id = urlParams.get("id");

const urlId = decodeURIComponent(id).replace(/['"]+/g, "");

async function onLoad() {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/${urlId}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q`
    );
    const data = await res.json();
    console.log(data);
    const singleGifContainer = document.querySelector(".Single-gif-container");
    singleGifContainer.innerHTML += `
                        <div>
                            <a onclick="handleId()">
                                <img class='singleGif' src=${data.data.images.downsized.url} alt=${data.data.title}>
                            </a>
                        </div>
                        <div class='gif-details'>
                            <h1>Gif Details</h1>
                            <p>Title: ${data.data.title}</p>
                            <p>Rating :${data.data.rating}</p>
                            <p>Type :${data.data.type}</p>
                        </div>
                        `;
  } catch (err) {
    console.error(err);
  }
}
