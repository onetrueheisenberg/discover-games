import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenres from "./components/GameGenres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GameGenres />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
    // <Grid
    //   templateAreas={`"header header"
    //               "nav main"
    //               "nav footer"`}
    //   gridTemplateRows={"50px 1fr 30px"}
    //   gridTemplateColumns={"150px 1fr"}
    //   h="200px"
    //   gap="1"
    //   color="blackAlpha.700"
    //   fontWeight="bold"
    // >
    //   <GridItem pl="2" bg="orange.300" area={"header"}>
    //     Header
    //   </GridItem>
    //   <GridItem pl="2" bg="pink.300" area={"nav"}>
    //     Nav
    //   </GridItem>
    //   <GridItem pl="2" bg="green.300" area={"main"}>
    //     Main
    //   </GridItem>
    //   <GridItem pl="2" bg="blue.300" area={"footer"}>
    //     Footer
    //   </GridItem>
    // </Grid>
  );
}

export default App;
