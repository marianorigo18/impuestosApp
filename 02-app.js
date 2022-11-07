const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con id ${id}`)
    },
    pausar: function(id){
        console.log(`pausando cancion con id ${id}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar(20)