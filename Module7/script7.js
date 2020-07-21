const handle = e => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.value)
    document.querySelector("#text").style.fontSize = e.target.value
}

document.querySelector("#font-size-control").addEventListener("change", handle)