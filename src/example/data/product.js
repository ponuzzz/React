import { BiCategory } from 'react-icons/bi'
import shoe from'../images/shoe.jpg';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';



import heel from '../images/heel.jpg'
import heel1 from '../images/heel.jpg'
import heel2 from '../images/heel.jpg'
import heel3 from '../images/heel.jpg'

export const products = [
    {
        id: 1,
        image: shoe,
        title: "men shoes dn 23x ,new product",
        category: 'lifestyle',
        price: 500,
        oldPrice: 5577,
        rating: 4,
        offer: 56,
        description: "high quality shoes ",
        gallery: [shoe, shoe1, shoe2]
    },
    {
        id: 2,
        image: heel,
        title: "shoes stylish design shows ",
        category: 'lifestyle',
        price: 90,
        oldPrice: 566577,
        rating: 9,
        offer: 56,
        description: "this is an stylish eco-wasrte",
        gallery: [heel, heel1, heel2]


    }


]