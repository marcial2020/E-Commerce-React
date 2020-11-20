import React, { Component } from "react";


class Directory extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            phones: [
                {
    id: 1,
    title: "iPhone 11 - Red",
    img:"assets/images/products/iPhone/iphone1.jpeg",
    price: 599,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 2,
    title: "iPhone 11 - Black",
    img:"assets/images/products/iPhone/iphone4.jpeg",
    price: 599,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 3,
    title: "iPhone 11 - White",
    img:"assets/images/products/iPhone/iphone3.jpeg",
    price: 599,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 4,
    title: "iPhone 11 - Green",
    img:"assets/images/products/iPhone/iphone5.jpeg",
    price: 599,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 5,
    title: "iPhone 11 - Purple",
    img:"assets/images/products/iPhone/iphone6.jpeg",
    price: 599,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 6,
    title: "iPhone 11 Pro - Rose Gold",
    img:"assets/images/products/iPhone/iphone2.jpeg",
    price: 799,
    company: "Apple",
    info:"Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 7,
    title: "Samsung Galaxy S20- Yellow",
    img:"assets/images/products/samsung/samsung6.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 8,
    title: "Samsung Galaxy S20- Black",
    img:"assets/images/products/samsung/samsung4.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 9,
    title: "Samsung Galaxy S20- Purple",
    img:"assets/images/products/samsung/samsung1.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 10,
    title: "Samsung Galaxy S20- Blue",
    img:"assets/images/products/samsung/samsung3.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 11,
    title: "Samsung Galaxy S20- Grey",
    img:"assets/images/products/samsung/samsung5.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    }, 
    {
    id: 12,
    title: "Samsung Galaxy S20- White",
    img:"assets/images/products/samsung/samsung2.jpeg",
    price: 799,
    company: "Samsung",
    info:"Released 2020, The S20 line consists of flagship Galaxy S20 and Galaxy S20+ models differentiated primarily by screen size, as well as a larger camera-focused model, the Galaxy S20 Ultra.[6] Key upgrades over the previous model, in addition to improved specifications, include a display with a 120 Hz refresh rate, an improved camera system supporting 8K video recording (7680×4320) and a super-resolution zoom of 30–100×, depending on the model.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 13,
    title: "Boost-Headphone - Blue",
    img:"assets/images/products/headphone/headphone1.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 14,
    title: "Boost-Headphone - Red",
    img:"assets/images/products/headphone/headphone2.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 15,
    title: "Boost-Headphone - Yellow",
    img:"assets/images/products/headphone/headphone3.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 16,
    title: "Boost-Headphone - Black",
    img:"assets/images/products/headphone/headphone4.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 17,
    title: "Boost-Headphone - Black",
    img:"assets/images/products/headphone/headphone5.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 18,
    title: "Boost-Headphone - Dark-Blue",
    img:"assets/images/products/headphone/headphone6.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 19,
    title: "Boost-Headphone - White",
    img:"assets/images/products/headphone/headphone7.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 20,
    title: "Boost-Headphone - Red-Black",
    img:"assets/images/products/headphone/headphone8.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 21,
    title: "Boost-Headphone - Blue-Black",
    img:"assets/images/products/headphone/headphone9.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 22,
    title: "Boost-Headphone - Black",
    img:"assets/images/products/headphone/headphone10.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 23,
    title: "Boost-Headphone - Red-Black",
    img:"assets/images/products/headphone/headphone11.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    },
    {
	id: 24,
    title: "Boost-Headphone - Black",
    img:"assets/images/products/headphone/headphone12.jpeg",
    price: 199,
    company: "BOSE",
    info:"Bose is a brand well-known for its industry-leading active noise cancelling features and sleek, comfortable designs. The Quiet Comfort 35 II leads this line up as one of Bose’s most popular wireless headphones.",
    inCart: false,
    count: 0,
    total: 0
    }
            ]
        };
    }

    render() {
        const directory = this.state.phones.map(phone => {
            return(
                <div className="col">
                    <img src={phone.img} alt={phone.title} />
                    <h2>{phone.title}</h2>
                    <p>{phone.info}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        )
    }
}

export default Directory;