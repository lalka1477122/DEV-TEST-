import { Box } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Image from 'next/image'



export default  function Page() {
  return (
    <>
<Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >

        </IconButton>
      </div>
      <AspectRatio ratio="4/3">
        <Image           src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
         
          loading="lazy"
          alt=""/>

      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>$2,900</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
    </>
  )
}
















// import React from "react";


// import { Topbar } from "@/components/Topbar";


// export default function Page() {
//   return(
//       <Topbar /> 

//   )
// }