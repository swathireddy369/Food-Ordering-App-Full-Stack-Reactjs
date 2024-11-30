import { Checkbox, FormGroup, FormControlLabel, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const demo = [
  {
    category: "Nuts & seeds",
    ingredient: ["Cashews"]
  },
  {
    category: "Non-Vegetarian",
    ingredient: ["Grilled chicken", "Italian sausage", "pepperoni", "ground beef", "mozzarella", "tomato sauce", "oregano"]
  },
  {
    category: "Vegetarian",
    ingredient: ["Tomato sauce", "mozzarella",
      "bell peppers",
      "onions", "mushrooms", "black olives",
      "cherry tomatoe"]
  }

]

const MenuCard = () => {
  const handleCheckboxChange = (value)=>{
  console.log(value);
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className='lg:flex items-center justify-between'>
          <div className='lg:flex items-center lg:gap-5'>
            <img
              className='w-[7rem] h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt=""

            ></img>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
              <p className='font-semibold text-xl'>
                Pizza

              </p>
              <p>
                $10.99
              </p>
              <p className='text-gray-400'>
                Nice Food
              </p>

            </div>

          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        A timeless Italian favorite with a thin, crispy crust, fresh mozzarella, juicy Roma tomatoes, and fragrant basil leaves, drizzled with extra virgin olive oil. Simplicity at its finest.
      </AccordionDetails>
      <AccordionDetails>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              demo.map((item,idx) =>
                <div key={idx}>
                  <p> {item.category}</p>
                  <FormGroup>
                    {item.ingredient.map((item,idx) =>
                     <FormControlLabel key={idx} control={<Checkbox onChange={()=>handleCheckboxChange(item)}/>} 
                     label={item} />)
                    }
                  </FormGroup>
                </div>)
            }
          </div>
          <div className='pt-5'>
            <Button variant='contained' disabled={false} type="submit">{true? "Add to Cart":"Out Of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard
