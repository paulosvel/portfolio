import { useEffect } from "react";
import { Box } from "@mui/material";
const About = () => {
  const languages = [
    { name: "HTML", category: "front-end" },
    { name: "CSS", category: "front-end" },
    { name: "Javascript", category: "front-end" },
    { name: "React.js", category: "front-end" },
    { name: "Django", category: "back-end" },
    { name: "PHP", category: "back-end" },
    { name: "Express.js", category: "back-end" },
    { name: "Python", category: "back-end" },
  ];
  useEffect(() => {
    console.log(languages);
  });
  return (
    <>
      <Box
        className="aboutsection"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "20%",
        }}
      >
        <span
          style={{
            color: "#64ffda",
            fontFamily:
              '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
          }}
        >
          01.
        </span>
        <h2 style={{ color: "#ccd6f6" }}> About me</h2>
        <p
          className="aboutext"
          id="about"
          style={{
            color: "#8892B0",
            fontFamily:
              '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
            width: "30%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "200%" }}>
            Hello! My name is Paulos, and I am a self-taught full stack web
            developer who is passionate about creating beautiful and functional
            websites and applications. I am currently studying software
            development and constantly expanding my knowledge and skills to stay
            up-to-date with the latest technologies and trends in the industry.
            I believe that good web design should be both aesthetically pleasing
            and easy to use, and I strive to create user-friendly and responsive
            websites that meet the needs of my clients and their customers.In my
            free time.
            <img
              style={{
                marginLeft: "30px",
                height: "30%",
                maxWidth: "40%",
                border: "2px solid #64ffda",
                borderRadius: "20%",
              }}
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
            ></img>
          </Box>
          <p
            style={{
              margin: "",
              paddingTop: "",
              color: "#8892B0",
              fontFamily:
                '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
            }}
          >
            {" "}
            I enjoy experimenting with new coding techniques and exploring the
            possibilities of web development. I am always on the lookout for
            exciting new projects and collaborations, so please don't hesitate
            to get in touch if you're interested in working together!"
          </p>
          Here are a few technologies I've been working with recently:
          <Box
            className="technologies"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {languages
                .filter((x) => {
                  return x.category === "front-end";
                })
                .map((x) => {
                  return <li>{x.name}</li>;
                })}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
                paddingLeft: "10px",
              }}
            >
              {languages
                .filter((x) => {
                  return x.category === "back-end";
                })
                .map((x) => {
                  return <li>{x.name}</li>;
                })}
            </Box>
          </Box>
        </p>
      </Box>
    </>
  );
};

export default About;
