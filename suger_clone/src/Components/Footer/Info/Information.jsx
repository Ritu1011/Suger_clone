import { Box } from "@mui/material";
import styling from "../Footer.css"

const Information = () => {
    return (
      <>
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
      
        marginLeft:"60px",
        justifyContent: "left",
        textAlign: "left",
        width: "90%",
        height: "auto",
        padding: "20px",
        color: "#ffffff"
      }}>
          <p className={styling.footerHeadings}>INFORMATION</p>
          <Box 
          sx={{
              display:"flex",
              flexDirection:"row",
              gap:"12%",
              marginTop:"25px"
          }}>
            <a className={styling.common}>Contact Us</a>
            <a className={styling.common}>Terms & Conditions</a>
            <a className={styling.common}>Returns</a>
            <a className={styling.common}>FAQs</a>
            <a className={styling.common}>About Us</a>
          </Box>
    </Box>
    <GetInTouch></GetInTouch>
    </>
    )
};

const GetInTouch = () =>{
  return (
      <Box
      sx={{
      display: "flex",
      flexDirection: "column",
      marginLeft:"60px",
      justifyContent: "left",
      textAlign: "left",
      width: "95%",
      height: "auto",
      padding: "20px",
      color: "#ffffff"
    }}>
        <p className={styling.footerHeadings}>GET IN TOUCH</p>
        <Box 
        sx={{
            display:"flex",
            flexDirection:"row",
            gap:"10%",
      
            marginTop:"25px"
        }}>
          <Box sx={{display:"flex", width:"200px", flexDirection:"column", gap:"7px"}}>
              <p>Call us at</p>
              <a className={styling.common}>022-2847-5555</a>
              <a className={styling.common}>022-6805-6009</a>
              <p style={{fontSize:"10px"}}>Monday to Friday : 9 AM to 7 PM</p>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:"7px"}}>
              <p>Support</p>
              <a className={styling.common}>hello@sugarcosmetics.com</a><br/>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:"7px"}}>
              <p>Careers</p>
              <a className={styling.common}>careers@sugarcosmetics.com</a><br/>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:"7px"}}>
              <p>PR & Media</p>
              <a className={styling.common}>pr@sugarcosmetics.com</a><br/>
          </Box>
          
        </Box>
  </Box>
  )
}
export {Information}