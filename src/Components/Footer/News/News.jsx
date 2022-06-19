import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import styling from "../Footer.css"

const NewsLetter = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        textAlign: "left",
        width: "40%",
        height: "auto",
        padding: "20px",
        color: "#ffffff"
      }} >
      <p className={styling.footerHeadings}>SUBSCRIBE TO OUR NEWSLETTER</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "40px"
        }}>
        <Input
          sx={{ color: "#999999", borderBottom: "2px solid white", width:"55%" }}
          placeholder="Your email address"
        />
        <Button
          sx={{
            margin: "5px",
            background: "#FC2779",
            color: "#ffffff",
            width:"16%",
            "&:hover": {
              color: "#ffffff",
              background: "#FC2779"
            }
          }}
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
    <GetNewApp></GetNewApp>
    </>
  );
};
const GetNewApp = () =>{
  return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "left", textAlign: "left", width: "30%", height: "auto", padding: "20px", color: "#ffffff", }}>
    <p className={styling.footerHeadings}>GET THE NEW SUGAR APP TODAY.</p>
    <Box sx={{display: "flex",  flexDirection: "row",marginTop: "55px"}}>
      <img style={{width:"98px", height:"35px", marginLeft:"15px", cursor:"pointer"}} src="https://in.sugarcosmetics.com/playstore.png" />
      <img style={{width:"98px", height:"35px", marginLeft:"15px", cursor:"pointer"}} src="https://in.sugarcosmetics.com/apple-store.png" />
    </Box>
  </Box>
  )
}

export default NewsLetter;