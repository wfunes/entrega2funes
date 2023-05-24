const productos = [
    { nombre: "Auto1", precio: 500000, id: "1", img: "./img/auto1.jpg",idCat:"1" },
    { nombre: "Auto2", precio: 180000, id: "2", img: "./img/auto2.jpg",idCat:"1" },
    { nombre: "Moto1", precio: 100000, id: "3", img: "./img/moto1.jpg",idCat:"2" },
    { nombre: "Moto2", precio: 200000, id: "4", img: "./img/moto2.jpg",idCat:"2" },
    { nombre: "Camioneta1", precio: 800000, id: "5", img: "./img/camioneta1.jpg", idCat:"3"},
    { nombre: "Camioneta2", precio: 1000000, id: "6", img: "./img/camioneta2.jpg",idCat:"3" },
    { nombre: "Camioneta3", precio: 1000000, id: "7", img: "./img/camioneta3.jpg",idCat:"3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}
export const getProductoPorCategoria=(idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productoCategoria=productos.filter(prod => prod.idCat === idCategoria);
            resolve (productoCategoria);
        },2000);
    })
}