import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'Ray-Ban Aviator (RB3025)',
            precio: 90000,
            id:1,
            stock: 8,
            descripcion: "Estos lentes de sol son ideales para proteger tus ojos de los rayos UV mientras luces a la moda con su diseño elegante y moderno.",
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        },
        {
            nombre: 'Ray-Ban Wayfarer (RB2140)',
            precio: 120000,
            id:2,
            stock: 8,
            descripcion: "Nuestros lentes polarizados proporcionan una visión clara y reducen los reflejos molestos, permitiéndote disfrutar de tus actividades al aire libre sin preocupaciones.",
            image:'https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            nombre: 'Ray-Ban Clubmaster (RB3016)',
            precio: 140000,
            id:3,
            stock: 8,
            descripcion: "Experimenta la comodidad extrema con nuestra colección de lentes ergonómicos que se ajustan perfectamente a la forma de tu rostro.",
            image: 'https://images.unsplash.com/photo-1566421966482-ad8076104d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        {
            nombre: 'Ray-Ban Erika (RB4171)',
            precio: 500000,
            id:4,
            stock: 8,
            descripcion: "Los lentes de visión nocturna están diseñados para mejorar la visibilidad en condiciones de poca luz, perfectos para conducir de noche de manera segura",
            image: 'https://images.unsplash.com/photo-1567333126229-db29200c25f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
        },
        {
            nombre: 'Ray-Ban Justin (RB4165)',
            precio: 500000,
            id:5,
            stock: 8,
            descripcion: "Estos lentes para deportes extremos ofrecen una protección superior y un agarre antideslizante para que puedas concentrarte en tu rendimiento sin preocuparte por tus lentes.",
            image: 'https://images.unsplash.com/photo-1587466280419-78d7adc6d4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            nombre: 'Ray-Ban Round (RB3447)',
            precio: 500000,
            id:6,
            stock: 8,
            descripcion: "Con una amplia variedad de colores y estilos, nuestros lentes te permiten expresar tu personalidad y combinarlos con cualquier atuendo.",
            image: 'https://images.unsplash.com/photo-1525962493498-1b90aaf10483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            nombre: 'Ray-Ban Caravan (RB3136)',
            precio: 500000,
            id:7,
            stock: 8,
            descripcion: "Con cristales anti-arañazos y monturas ultrarresistentes, estos lentes están diseñados para durar y resistir el desgaste diario.",
            image: 'https://images.unsplash.com/photo-1418147396505-c57fac80c7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            nombre: 'Ray-Ban Chris (RB4187)',
            precio: 500000,
            id:8,
            stock: 8,
            descripcion: "Nuestra colección de lentes para lectura ofrece una visión nítida y cómoda, ideal para disfrutar de la lectura y las actividades cercanas con facilidad.",
            image: 'https://images.unsplash.com/photo-1476052492661-714447484e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /* El estado del array de objetos del carrito */
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
    
    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }
    return (
        <Context.Provider value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider