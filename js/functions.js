const cargarDatos = (datos) => {

    if(datos == respuesta1) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.birth_year}`
            contRepuesta1.appendChild(p)
        })

    }
    
    else if(datos == respuesta2) {

            fetch(datos)
            .then((response) => response.json())
            .then((data) => {
                let p = document.createElement("p")
                p.className = ("answer")
                p.innerHTML = `${data.release_date}`
                contRepuesta2.appendChild(p)
            })
    }
    
    else if(datos == respuesta3) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.crew}`
            contRepuesta3.appendChild(p)
        })
    }

    else if(datos == respuesta4) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.episode_id}`
            contRepuesta4.appendChild(p)
        })
    }

    else if(datos == respuesta5) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.skin_color}`
            contRepuesta5.appendChild(p)
        })
    }

    else if(datos == respuesta6) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.model}`
            contRepuesta6.appendChild(p)
        })
    }

    else if(datos == respuesta7) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            arrayJSON = data
            arrayJSON.forEach(element => {
                if (element.name != "Qui-Gon Jinn"){
                    let p = document.createElement("p")
                    p.className = ("answer")
                    p.innerHTML = `${element.name}`
                    contRepuesta7.appendChild(p)
                }
            })
        })
    }

    else if(datos == respuesta8) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            arrayJSON = data
            arrayJSON.forEach(element => {
                if (element.name != "Ben Quadinaros"){
                    let p = document.createElement("p")
                    p.className = ("answer")
                    p.innerHTML = `${element.name}`
                    contRepuesta8.appendChild(p)
                }
            })
        })
    }

    else if(datos == respuesta9) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            arrayJSON = data
            arrayJSON.forEach(element => {
                if (element.name != "B-wing"){
                    let p = document.createElement("p")
                    p.className = ("answer")
                    p.innerHTML = `${element.title}`
                    contRepuesta9.appendChild(p)
                }
            })
        })
    }

    else if(datos == respuesta10) {

        fetch(datos)
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.className = ("answer")
            p.innerHTML = `${data.passengers}`
            contRepuesta10.appendChild(p)
        })
    }
    
}