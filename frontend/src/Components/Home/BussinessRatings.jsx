import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image1 from '../../Utils/Home/Rating_Image_1.png'
import image2 from '../../Utils/Home/Rating_Image_2.png'
import image3 from '../../Utils/Home/Rating_Image_3.png'
import image4 from '../../Utils/Home/Company_Image_1.png'
import image5 from '../../Utils/Home/Company_Image_2.png'
import image6 from '../../Utils/Home/Company_Image_3.png'
import image7 from '../../Utils/Home/Company_Image_4.png'
import image8 from '../../Utils/Home/Company_Image_5.png'
import image9 from '../../Utils/Home/Company_Image_6.png'

const BussinessRatings = () => {
  return (
    <Box mt="7rem">
      <Heading fontWeight={"normal"} fontSize="3xl" mb="4rem">
      Trusted by more than <Text as="span" fontWeight={"bold"}>100.000 businesses</Text> worldwide
      </Heading>
      <Flex justifyContent="center" gap="6rem" mb="3rem">
        <Box>
          <Image src={image1} alt="Rating_Image_1"/>
        </Box>
        <Box>
        <Image src={image2} alt="Rating_Image_2"/>
        </Box>
        <Box>
        <Image src={image3} alt="Rating_Image_3"/>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center" mb="3rem">      
        <Image src={image4} alt="Company_Image_1" w="7rem" h="100%"/>
        <Image src={image5} alt="Company_Image_2" w="7rem" h="100%"/>
        <Image src={image6} alt="Company_Image_3" w="7rem" h="100%"/>
        <Image src={image7} alt="Company_Image_4" w="7rem" h="100%"/>
        <Image src={image8} alt="Company_Image_5" w="7rem" h="100%"/>
        <Image src={image9} alt="Company_Image_6" w="7rem" h="100%"/>           
      </Flex>
    </Box>
  )
}

export default BussinessRatings