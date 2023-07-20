import React, {useState} from 'react'
import { Box, Button } from '@mui/material'
function Experience() {

  return (
    <>
    <Box >
      <span
      className='experience'
        style={{
          color: "#64ffda",
          fontFamily:
            '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
        }}
      >
        02.
      </span>
      <h2 style={{ color: "#ccd6f6", display:"inline-block" }}>Experience</h2>
    </Box>       
<Box sx={{display:"flex", justifyContent:"center", color:"#64ffda", alignItems:"center", gap:"1rem", fontSize:"25px"}}>
      06.2023 - present Timemaster
      <p style={{width:"20%", fontSize:"15px"}}>
      Developed and styled interactive web applications for Timemaster, including their e-commerce website
      </p>
    </Box>
    <Box sx={{display:"flex", justifyContent:"center", color:"#64ffda", alignItems:"center", gap:"1rem", fontSize:"25px"}}>
      04.2023 - 06.2023 Anveto Marketers
      <p style={{width:"20%", fontSize:"15px"}}>
        Collaborated with other developers and designers in order to build websites for new customers and provide updates in already existing customer websites
      </p>
    </Box>  
    </>
  )
}

export default Experience;