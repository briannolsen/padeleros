const products =[
    {
        id:'01',
        name:'Paleta veron',
        price:250000,
        description:'paleta de paddel bullpadel',
        stock:10,
        img:'https://www.bullpadel.com/14955-large_default/pala-bullpadel-vertex-04-comfort-25.jpg',
        category:'paletas'
    },
    {
        id:'02',
        name:'Paleta viper',
        price:270000,
        description:'paleta de paddel viper',
        stock:15,
        img:'https://www.bullpadel.com/17041-large_default/pala-bullpadel-hack-02-betis.jpg',
        category:'paletas'
    },
    {
        id:'03',
        name:'Paleta tenic',
        price:170000,
        description:'paleta de paddel tecnica',
        stock:5,
        img:'https://www.bullpadel.com/17036-large_default/pala-bullpadel-hack-04-betis.jpg',
        category:'paletas'
    },
    {
        id:'04',
        name:'Paleta noob',
        price:70000,
        description:'paleta de paddel para noobs',
        stock:100,
        img:'https://www.bullpadel.com/17374-large_default/pala-bullpadel-pearl-br-25.jpg',
        category:'paletas'
    },
    {
        id:'05',
        name:'Paletero Bullpadel Tour Marino',
        price:95.000,
        description:'Bolso Bullpadel Tour',
        stock:10,
        img:'https://acdn-us.mitiendanube.com/stores/003/106/548/products/bolsobullpadeltourazulmno_1-e8418983d4d8d6a73417485318024701-1024-1024.png',
        category:'bolsos'
    },
    {
        id:'06',
        name:'Mochila Bullpadel Vertex Negro',
        price:180.000,
        description:'Esta mochila técnica dispone de un compartimento principal para guardar todo lo que necesites.',
        stock:100,
        img:'https://acdn-us.mitiendanube.com/stores/003/106/548/products/mochilabullpadelvertexngo_1-23a37e606bd53171ca17484446755773-1024-1024.png',
        category:'mochila'
    }
]
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },300)
    })
}

//LOS ID COMO STRING
export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },300)
    })
}
