
// var ctx = document.getElementById("canvas").getContext("2d");
// var img = new Image();
// img.src = 'assets/sky.png'
// img.onload = function() {
//   var pat = ctx.createPattern(img, 'repeat');
//   ctx.rect(0, 0, window.innerWidth, window.innerHeight);
//   ctx.fillStyle = pat;
//   ctx.fill();
// };


function newImage (imgPath, imgLeft, imgBottom) {
    let imgPlace = document.createElement('img')
    imgPlace.src = imgPath
    imgPlace.style.position = 'fixed'
    imgPlace.style.left = imgLeft + 'px'
    imgPlace.style.bottom = imgBottom + 'px'
    document.body.append(imgPlace)
    return imgPlace
}

function newItem (imgPath, imgLeft, imgBottom) {
    let pickUp = newImage (imgPath, imgLeft, imgBottom)

    pickUp.addEventListener ('dblclick', () => {
        pickUp.remove()
    } )
}

newImage ('/assets/green-character.gif', 100, 100)
newImage ('/assets/pine-tree.png', 450, 200)
newImage ('assets/tree.png', 200, 300)
newImage ('assets/pillar.png', 350, 100)
newImage ('assets/crate.png', 150, 200)
newImage ('assets/well.png', 500, 425)

newItem ('assets/sword.png', 500, 405)
newItem ('assets/sheild.png', 165, 185)
newItem ('assets/staff.png', 600, 100)

// bry5ull