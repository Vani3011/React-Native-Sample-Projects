export const BannerImages = () =>{
    return(
        [
            {
                id:1,
                url:require('../../assets/images/banner1.png')
            },
            {
                id:2,
                url:require('../../assets/images/banner2.png')
            },
            {
                id:3,
                url:require('../../assets/images/banner3.png')
            },
            {
                id:4,
                url:require('../../assets/images/banner4.jpg')
            },
        ]
    )
}
export const TabList = [
    {
        value: 1,
        name: "All",
        icon: require('../../assets/images/all.jpg')
    },
    {
        value: 2,
        name: "Fruits",
        icon: require('../../assets/images/fruits.jpg')
    },
    {
        value: 3,
        name: "Vegetables",
        icon: require('../../assets/images/vegetables.jpg')
    },
    {
        value: 4,
        name: "Pulses",
        icon: require('../../assets/images/pulses.jpg')
    },
    {
        value: 5,
        name: "Snacks",
        icon: require('../../assets/images/snacks.jpg')
    },
    {
        value: 6,
        name: "Others",
        icon: require('../../assets/images/others.png')
    },
]
export const Groceries =[
    {
        value: 1,
        name: "Strawberries",
        icon: require('../../assets/images/berries.jpg'),
        amount:'Rs.100 / Box',
        type:"Fruits",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'Fresh strawberries have a sweet and slightly tart flavor with a juicy and refreshing taste, often described as a blend of sweetness and acidity.'
    },
    {
        value: 2,
        name: "Apple",
        icon: require('../../assets/images/apple.png'),
        amount:'Rs.200 / kg',
        type:"Fruits",
        rating:5,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'We source and sell a wide variety of apples and other fruit types. Our apples are packed and sold according to your specific industry needs.',
    },
    {
        value: 3,
        name: "Banana",
        icon: require('../../assets/images/banana.jpg'),
        amount:'Rs.60 / kg',
        type:"Fruits",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'Relish the soft, buttery texture of Robusta bananas that are light green and have a great fragrance and taste. '
    },
    {
        value: 4,
        name: "Water Melon",
        icon: require('../../assets/images/melon.jpg'),
        amount:'Rs.40 / kg',
        type:"Fruits",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled'
    },
    {
        value: 5,
        name: "Onions",
        icon: require('../../assets/images/onion.png'),
        amount:'Rs.40 / kg',
        type:"Vegetables",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'One imperative of onion merchandising is offering variety, and retailers are encouraged to link usage to what they offer.'
    },
    {
        value: 6,
        name: "Tomato",
        icon: require('../../assets/images/tomato.jpg'),
        amount:'Rs.50 / kg',
        type:"Vegetables",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'Sales of organic tomatoes have increased significantly alongside conventional in the past year, according to Oppenheimer’s Quon. “We see some good demand for organic heirloom tomatoes from OriginO, produced in British Columbia’s Lower Mainland. They have very good flavor, but it’s quite a niche item.”'
    },
    {
        value: 7,
        name: "Carrots",
        icon: require('../../assets/images/carrots.jpg'),
        amount:'Rs.100 / kg',
        type:"Vegetables",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'Carrot Selling is a fantastic way to create value and generate more sales. Read on to learn about this outstanding sales tactic.'
    },
    {
        value: 8,
        name: "Capsicum",
        icon: require('../../assets/images/peppers.jpg'),
        amount:'Rs.50 / kg',
        type:"Vegetables",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'Capsicums are a great source of vitamin A and C, with red capsicums having the highest micronutrient content of all the colours.'
    },
    {
        value: 9,
        name: "Urd Dhal",
        icon: require('../../assets/images/urddhal.jpg'),
        amount:'Rs.250 / kg',
        type:"Pulses",
        rating:4,
        item_count:1,
        is_liked:false,
        is_cart:false,
        description:'For marketing of pulses, quality of product becomes of prime importance. Cleaned and well-graded whole grains fetch higher prices.'
    },
    {
        value: 10,
        name: "Toor Dhal",
        icon: require('../../assets/images/toordhal.jpg'),
        amount:'Rs.150 / kg',
        type:"Pulses",
        rating:4,
        item_count:1,
        description:'For marketing of pulses, quality of product becomes of prime importance. Cleaned and well-graded whole grains fetch higher prices.',
        is_liked:false,
        is_cart:false
    },
    {
        value: 11,
        name: "Cookies",
        icon: require('../../assets/images/cookies.jpg'),
        amount:'Rs.100',
        type:"Snacks",
        rating:4,
        item_count:1,
        description:"Choco filled Cookies",
        is_liked:false,
        is_cart:false
    },
    {
        value: 12,
        name: "Colgate",
        icon: require('../../assets/images/paste.jpg'),
        amount:'Rs.52',
        type:"Others",
        rating:4,
        item_count:1,
        description:'Rich in Calcicum',
        is_liked:false,
        is_cart:false
    },
    {
        value: 13,
        name: "Pantene",
        icon: require('../../assets/images/shampoo.jpg'),
        amount:'Rs.112',
        type:"Others",
        rating:4,
        item_count:1,
        description:'Provides soft texture and silky and smoothy hair',
        is_liked:false,
        is_cart:false
    },
]