import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function BannerCarousel() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        getBanner()
    }, []);
    function getBanner() {
        fetch(`${process.env.REACT_APP_BACKEND}api/banner-carousels?populate=*`)
            .then(res => res.json())
            .then(banner => {
                console.log("banner?.data?.attributes?.image?.data", banner?.data[0]?.attributes?.image?.data);
                console.log("banner?.data?.attributes?.image?.data", banner?.data)
                setBanner(banner?.data[0]?.attributes?.image?.data);
            })
    }

    let items = [
        {
            name: "Random Name #1",
            image: "../../public/banner_sports.jpg"
        },
        {
            name: "Random Name #2",
            image: "../../public/banner_sports.jpg"
        }
    ]

    return (
        <Carousel stopAutoPlayOnHover={true} className='banner-carousel'>
            {
                banner.map((item, i) => {
                    return <AspectRatio ratio="7/2"> <img key={i} src={`http://localhost:1337` + item?.attributes?.url} /></AspectRatio>
                })
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


export default BannerCarousel;





