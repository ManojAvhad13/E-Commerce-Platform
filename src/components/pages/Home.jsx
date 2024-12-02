import React from 'react'
import CategoryList from '../CategoryList'
import BannerProduct from '../BannerProduct'
import HorizontalCardProduct from '../HorizontalCardProduct'
import VerticalCardProduct from '../VerticalCardProduct'

const Home = () => {
    return (
        <div>
            <CategoryList />
            <BannerProduct />
            <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"} />
            <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"} />

            <VerticalCardProduct category={"mobile"} heading={"Mobile"} />
            <VerticalCardProduct category={"mouse"} heading={"Mouse"} />
            <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
            <VerticalCardProduct category={"camera"} heading={"Camera & Photography"} />
            <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
            <VerticalCardProduct category={"speakers"} heading={"Bluetooh Speakers"} />
            <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
            <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />

        </div>
    )
}

export default Home
