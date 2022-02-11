let queryStr = window.location.search

const urlParams = new URLSearchParams(queryStr)

const id = urlParams.get('id')

const urlId = decodeURIComponent(id).replace(/['"]+/g, '')


async function onLoad(){
    try{
        const res = await fetch(`https://api.giphy.com/v1/gifs?${urlId}&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc`)
        const data = await res.json()
        console.log(data)
    }catch(err) {
        console.error(err)
    }
}
