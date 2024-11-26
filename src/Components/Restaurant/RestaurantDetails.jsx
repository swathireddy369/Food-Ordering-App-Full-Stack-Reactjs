import React, { useState } from 'react'
import { Divider, FormControl, Grid, RadioGroup, Typography,Radio,FormControlLabel } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Category } from '@mui/icons-material';
import MenuCard from './MenuCard';

const categories=[
    "All",
    "pizza",
    "biryani",
    "burger",
    'chicken',
    "rice"
]
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"},
]
const menu=[1,1,1,1,1,1]
const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all");
    const [category,setCategory]=useState("All")
    const handleFilter = (e)=>{
        console.log(e.target.value,e.target.name);
    }
    return (
        <div className='px-5 lg:px-20 '>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian flavors/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2013/12/31/21/47/restaurant-237060_1280.jpg" alt="" />

                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />

                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2022/02/10/05/45/lantern-7004643_1280.jpg" alt="" />

                        </Grid>

                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>
                        Indian Flavors
                    </h1>
                    <p className='text-gray-500 items-center gap-3 pt-3'>
                        <span> Indian Flavors is a vibrant restaurant offering an authentic taste of India,
                            featuring a rich menu of traditional dishes crafted with bold spices and fresh ingredients.
                            With its warm ambiance and diverse culinary options, it provides a delightful experience for
                            food enthusiasts seeking the essence of Indian cuisine.</span>
                    </p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 items-center gap-3'>
                            <LocationOnIcon />
                            <span>Madhapur, Hyderabad</span>
                        </p>
                        <p className='text-gray-500 items-center gap-3 '>
                            <CalendarTodayIcon />
                            <span>Mon-sun: 9:00 AM - 9:00 PM (Today)</span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter  '>
                    <div className='box space-y-5 lg:sticky top-28 '>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup name="food_type" value={foodType || "all"} onChange={handleFilter}>
                                {foodTypes.map((typeItem)=> <FormControlLabel value={typeItem.value}
                                 control={<Radio />}
                                  label={typeItem.label} />
                              )}
                               </RadioGroup>
                               </FormControl>
                               </div>
                               <Divider/>
                               <div>
                            <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"} >
                               <RadioGroup name="food_categories" value={category} onChange={handleFilter}>
                                {categories.map((catItem)=> <FormControlLabel 
                                value={catItem} 
                                control={<Radio />}
                                 label={catItem} />) }
                                 </RadioGroup>
                            </FormControl>
                            </div>
                       
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                 {menu.map((menuItem)=> <MenuCard/>)}
                </div>

            </section>
        </div>
    )
}

export default RestaurantDetails
