import { Button, styled } from "@mui/material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "royalblue",
    color: "ThreeDHighlight",
    margin: 5,
    "&:hover": {
      backgroundColor: "darkcyan",
    },
  });
  const ThemeButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "ThreeDHighlight",
    margin: 5,
    "&:hover": {
      backgroundColor: "darkcyan",
    },
  }));
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "royalblue",
          color: "ThreeDHighlight",
          margin: 5,
          "&:hover": {
            backgroundColor: "darkcyan",
          },
        }}
      >
        Contained
      </Button>
      <BlueButton>Another button</BlueButton>
      <Button variant="contained" color="primary">
        Outlined
      </Button>
      <ThemeButton>Theme Button</ThemeButton>
    </div>
  );
}

export default App;
