import { Box, Divider, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import { Button, Card, } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Formik,Form } from "formik";
import * as Yup from 'yup';
const items = [1, 1, 1]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    streetAddress: "",
    state: "",
    pincode: '',
    city: ""
}
//yup module for validation


const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"), // ✅ Fixed: Specify string() before required()
    city: Yup.string().required("City is required")
});

function Cart() {
    const createOrderUsingSelectedAddress = () => {

    }
    const [open, setOpen] = React.useState(false);
    //    const handleOpenAddressModal=
    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
console.log("form value",value);

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
                            {[1, 1, 1, 1].map((item, idx) =>
                                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress()}
                                    key={idx} item={item} showButton={true} />)}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className="space-y-3 text-gray-500" >
                                    <h1 className="font-semibold text-lg text-white">
                                        Add New Address
                                    </h1>
                                    <Button variant="outlined" fullWidth onClick={() => setOpen(true)}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <Grid container spacing={4}>
                
                            <Grid item xs={12}>
                                <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined"
                                    // error={!ErrorMessage("streetAddress")} helperText={
                                    //     <ErrorMessage>
                                    //         {
                                    //             (msg) => <span className='text-red-600'>{msg}</span>
                                    //         }
                                    //     </ErrorMessage>
                                    // }
                                     >
                                </Field>
                                </Grid>
                                <Grid item xs={12}>
                                <Field as={TextField} name="state" label="State" fullWidth variant="outlined"
                                    // error={!ErrorMessage("streetAddress")} helperText={
                                    //     <ErrorMessage>
                                    //         {
                                    //             (msg) => <span className='text-red-600'>{msg}</span>
                                    //         }
                                    //     </ErrorMessage>
                                    // }
                                     >
                                </Field>
                                </Grid>
                                <Grid item xs={12}>
                                <Field as={TextField} name="pincode" label="Pincode" fullWidth variant="outlined"
                                    // error={!ErrorMessage("streetAddress")} helperText={
                                    //     <ErrorMessage>
                                    //         {
                                    //             (msg) => <span className='text-red-600'>{msg}</span>
                                    //         }
                                    //     </ErrorMessage>
                                    // }
                                     >
                                </Field>
                                </Grid>
                                <Grid item xs={12}>
                                <Field as={TextField} name="city" label="City" fullWidth variant="outlined"
                                    // error={!ErrorMessage("streetAddress")} helperText={
                                    //     <ErrorMessage>
                                    //         {
                                    //             (msg) => <span className='text-red-600'>{msg}</span>
                                    //         }
                                    //     </ErrorMessage>
                                    // }
                                     >
                                </Field>
                                </Grid>
                         
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit"  color="primary">Deliver Here</Button>

                            </Grid>

                        </Grid>
                        </Form>
                    </Formik>


                </Box>
            </Modal>
        </div>
    )
}

export default Cart
