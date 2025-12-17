let arr = [
    "gray",
    "blue",
    "black",
    "yellow",
    "red",
    "pink",
    "brown",
    "golden",
    "indigo",
    "orange",
    "goldish",
    "gray",
    "aqua",
]

function changebackground() {
    let color = document.getElementById("parra")
    let randumcolor = Math.floor(Math.random() * arr.length)
    document.body.style.backgroundColor = arr[randumcolor]
    color.randumcolor.innerHTML;
}