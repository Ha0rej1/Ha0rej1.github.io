let images = document.getElementsByClassName('zoom-img')

for(let img of images){
    img.addEventListener('click', ()=>{
        if(window.innerWidth>768){
            let zoomed = document.createElement('img')
            zoomed.src = img.src
            zoomed.classList = 'zoomed'
            zoomed.addEventListener('click', ()=>{
                closeZoom()
            })

            let cross = document.createElement("i")
            cross.classList = "fas fa-times close-zoom"
            cross.addEventListener('click', ()=>{
                closeZoom()
            })

            document.body.append(zoomed)
            document.body.append(cross)

            function closeZoom(){
                zoomed.classList.add('zoomed-rm')
                cross.classList.add('close-zoom-rm')
                setTimeout(()=>{
                    zoomed.remove()
                    cross.remove()
                }, 250)
            }
        }
    })
}