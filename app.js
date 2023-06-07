const api = 'j3Ja2oGdYescARnqMPvGNALSdWJinY0yDS4a0MDENtvtM3hp7Oh3AHtH',
    moreBtn = document.querySelector('.more'),
    input = document.querySelector('.input'),
    searchBtn = document.querySelector('.searchBtn')

let pages = 1,
    search = false,
    val = ""

input.addEventListener('input', function (el) {
    el.preventDefault()
    val = el.target.value
})

input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        if (input.value === "") return
        clear()
        search = true
        searchPhoto(val, pages)
        pages++
        window.scrollTo(0,0);
    }
})

async function curatedPhotos(pages) {
    const data = await fetch(
        `https://api.pexels.com/v1/curated?per_page=30&page=${pages}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "j3Ja2oGdYescARnqMPvGNALSdWJinY0yDS4a0MDENtvtM3hp7Oh3AHtH",
            },
        }
    )
    const result = await data.json()
    result.photos.forEach(photo => {
        const pictures = document.createElement("div")
        pictures.innerHTML = `
        <p class="photos_p"><i class="fas fa-camera-retro"></i>${photo.photographer}</p>
        <a class="photos_a" href=${photo.src.original}><img class="created_photos" src=${photo.src.large}></a>
        `
        document.querySelector('.gallery').appendChild(pictures)
    });
    // console.log(result);
}

// const img = document.querySelectorAll('.created_photos'),
//     closeBtn = document.querySelector('.view__close'),
//     view = document.querySelector('.view')

// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', function () {
//         view.classList.add('active')
//     })
// }

// closeBtn.addEventListener('click', function () {
//     view.classList.remove('active')
// })

async function searchPhoto(val, pages) {
    const data = await fetch(
        `https://api.pexels.com/v1/search?query=${val}&per_page=30&page=${pages}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "j3Ja2oGdYescARnqMPvGNALSdWJinY0yDS4a0MDENtvtM3hp7Oh3AHtH",
            },
        }
    )
    const result = await data.json()
    result.photos.forEach(photo => {
        const pictures = document.createElement("div")
        pictures.innerHTML = `
        <p class="photos_p"><i class="fas fa-camera-retro"></i>${photo.photographer}</p>
        <a class="photos_a" href=${photo.src.original}><img class="created_photos" src=${photo.src.large}></a>
        `
        document.querySelector('.gallery').appendChild(pictures)
    });
}

searchBtn.addEventListener('click', function () {
    if (input.value === "") return
    clear()
    search = true
    searchPhoto(val, pages)
    pages++
    window.scrollTo(0,0);
})

function clear() {
    input.value = ""
    document.querySelector('.gallery').innerHTML = ""
    pages = 1
}

moreBtn.addEventListener('click', function () {
    if (!search) {
        pages++
        curatedPhotos(pages)
    } else {
        if (val.value === "") return
        pages++
        searchPhoto(val, pages)
    }
})

curatedPhotos(pages)