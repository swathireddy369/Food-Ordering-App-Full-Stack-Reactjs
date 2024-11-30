import { Divider } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
const items = [1, 1, 1]
function Cart() {
    const createOrderUsingSelectedAddress=()=>{
        
    }
    return (
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item, idx) => <CartItem key={idx} />)}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5 '>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>$23.98</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Deliver Fee</p>
                                <p>$5.40</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>$3.98</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Total pay</p>
                            <p>$33.36$</p>


                        </div>
                    </div>

                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>
                            Choose Delivery Address
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1].map((item,idx) => <AddressCard handleSelectAddress={createOrderUsingSelectedAddress()}
                            key={idx} item={item} showButton={true}/>)}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart
