import React from 'react';
import Showcard from './showComp/Showcard';

const Shows = () => {

    return (

        <div>
            <div className='text-[white] flex flex-col gap-5 pt-[50px]'>
                <h4 className='text-[#18BB6C] text-sm font-[700]'>INCLUDED IN ALL PLANS</h4>
                <h1 className='md:text-5xl text-3xl font-[600]'>All The TV You Love</h1>
                <p className='text-sm md:text-lg'>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, <br /> kids shows, and more.</p>
            </div>

            <div className='flex flex-wrap justify-evenly items-center py-14 '>
                <Showcard image={"https://cnbl-cdn.bamgrid.com/assets/1fe40561415a61a95726ada4467fc374fa6f9667028c0d249d8c2c594160777e/original"} heading_one="Past & Current Seasons" heading_two="TV Shows"/>
                <Showcard image={"https://cnbl-cdn.bamgrid.com/assets/8c630a19daa8615918152082839724f4dab6538939ba7d3bb45f8faa97acf1b9/original"} heading_one="News & Classic" heading_two="Movies" />
                <Showcard image={"https://cnbl-cdn.bamgrid.com/assets/89cea7fd1cb42712c4aeb2d6a9629f9c76a12691359f8feef14b2f93eddfe46c/original"} heading_one="Groudbreaking" heading_two="Hulu Originals" />
                <Showcard image={"https://cnbl-cdn.bamgrid.com/assets/4bae266f4178c145a7285dd09aafff4bc40a8e463cbcee1a8b3f27fb3f7a42ba/original"} heading_one="Add-on" heading_two="Premiums" />
            </div>

        </div>

    )

}

export default Shows;