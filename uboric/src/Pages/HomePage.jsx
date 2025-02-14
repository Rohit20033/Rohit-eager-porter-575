import { Box, Button, ButtonGroup, Container, Heading, SimpleGrid ,Text, VStack} from "@chakra-ui/react"

import {ArrowForwardIcon} from "@chakra-ui/icons"
import {useEffect,useState} from "react"
import { Link, useNavigate } from "react-router-dom"

const images=["https://images.unsplash.com/photo-1589512574123-2ba3b33bf066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZCUyMHJpbmd8ZW58MHx8MHx8&w=1000&q=80",
"https://media.istockphoto.com/photos/set-of-household-kitchen-technics-on-yellow-background-set-of-in-the-picture-id1025966854?k=20&m=1025966854&s=612x612&w=0&h=_53ryTz37dCZrSzowZw4Smhwjg25v-peYA82H3kwLJM=",
"https://c0.wallpaperflare.com/preview/338/778/553/white-red-and-blue-fila-low-top-sneakers.jpg",
"https://st.depositphotos.com/1031166/1339/i/950/depositphotos_13397158-stock-photo-household-appliances.jpg",
"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhcmRyb2JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
]

function HomePage(){
    const [currentIndex,setCurrentIndex]=useState(0)
    const navigate = useNavigate()

    const handleNavigate=()=>{
        navigate("/shop")
    }
    const style={
        
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     bgPosition:"center",
     bgRepeat:"no-repeat",
     bgSize:"cover",
     mb:2,
     height:'350px'
    }
    useEffect(()=>{
       
        const s = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
           }
        }, 5000)

        return () => clearInterval(s);
    })
    return (
        <>
        <Box
    
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    height={"650px"}
    bgImage={images[currentIndex]}
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize={"cover"}
    mb={2}
  >
  
  
     <Box onClick={handleNavigate} width={"12%"} borderRadius="0" colorScheme='white' variant={"solid"} p={8} bg='black' color="white"> <Text fontSize={"20px"}>Shop Now</Text> </Box>
     
    
  </Box>

  
  
   <SimpleGrid  width={"95%"} margin="auto" marginTop={"50px"} columns={3} spacing={10}>
     <Box className="reactBox" style={style}   bgImage="url('https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202109/0903/benchwright-extending-dining-table-c.jpg')">
        <Box marginBottom={"45%"} marginRight={"65%"}>
        <Text fontSize={"35px"} fontWeight="bold"  >Kitchen</Text>
        
        <Text  fontSize={"30px"}>Tools</Text>
        </Box>
     </Box>
    <Box style={style} className="reactBox"    bgImage="url('https://images.containerstore.com/catalogimages/371126/10075022-pop_2.0_sml_upper_cabinet-V.jpg?width=1200&height=1200&align=center')">
    <Box marginBottom={"45%"} marginRight={"15%"}>
        <Text fontSize={"35px"} fontWeight="bold"  >Air Tight</Text>
        
        <Text  fontSize={"30px"}>Container</Text>
        </Box>
    </Box>
    <Box style={style} className="reactBox"   bgImage="url('https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80')">
    <Box marginBottom={"5%"} >
        <Text fontSize={"35px"} fontWeight="bold"  >Health & Personal Care</Text>
    
        </Box>
    </Box>
   </SimpleGrid>

   <Container maxWidth={"90%"} marginTop="100px">
   <VStack alignItems={"center"}>
       <Heading fontSize={"38px"}>
       The Ultimate Domestic Online Shopping Experience Platform in India
       </Heading>
     </VStack>
       <VStack marginTop={"50px"}>
         <Text textAlign={"justify"} color="gray" lineHeight={10} fontSize={"23px"} >
         Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest trending variety of unique products ends right here. A wide range of international products from global brands are available at your fingertips. We provide you with a world-class online shopping experience, along with superior service, to suit all your specific requirements. Our products are very reasonably priced and are not easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture, electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 24×7 Customer Care: For all your queries and concerns regarding your shopping orders.

         </Text>
       </VStack>
   </Container>
   
</>
    )
}
export default HomePage