import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='footer'container sx={{ bgcolor: 'black', color: 'white', py: '3', mt: 10 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography  className='pb-3 footer-heading' variant='h6'>Company</Typography>
                    <Typography  className='pb-3' gutterBottom>About</Typography>
                    <Typography className='pb-3'gutterBottom>Blogs</Typography>
                    <Typography className='pb-3'gutterBottom>Careers</Typography>
                    <Typography className='pb-3'gutterBottom>Team</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-3 footer-heading'variant='h6'>Contact us</Typography>
                    <Typography className='pb-3'gutterBottom>Help & Support</Typography>
                    <Typography className='pb-3'gutterBottom>Ride with us</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography  className='pb-3 footer-heading' variant='h6'>Legal</Typography>
                    <Typography  className='pb-3' gutterBottom>Terms & Conditions</Typography>
                    <Typography className='pb-3'gutterBottom>Cookie Policy</Typography>
                    <Typography className='pb-3'gutterBottom>Privacy Policy</Typography>
                    <Typography className='pb-3'gutterBottom>Investor Relations</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-3 footer-heading'variant='h6'>Documentation</Typography>
                    <Typography className='pb-3'gutterBottom>API Status</Typography>
                    <Typography className='pb-3'gutterBottom>Guides</Typography>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy;2024 FLAVORS OF FUSION.All rights reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                      Made with Love
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer
