
import { Grid, GridItem, Button, Card, Image, Text } from "@chakra-ui/react"
import Getgif from "@/components/Getgif"

export default async function Page() {
  return (
    <>
<Grid  margin={100} templateColumns="repeat(4, 1fr)" gap="6">
<Getgif searchTerm="funny"/>
<Card.Root>
  <Card.Header />
  <Card.Body>
  </Card.Body>
  <Card.Footer />
</Card.Root>

</Grid>
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