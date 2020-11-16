Arranca el servicio (constructor)

- Antes de crear el array vacio compruebo si esta en LOCALSTORAGE

metogo agregarPost

- Cuando hago el push del nuevo post guardo el array de posts en localstorage

getCategorias(){
    return[...new set(this.arrPosts.map(post => categoria))];
}

(solo tocamos localstorage cunado editamos el arrPosts