import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import GamePlatformSelector from "./components/GamePlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [query, setQuery] = useState<Query>({} as Query);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GameGenres
              selectedGenre={query.genre}
              onSelectGenre={(genre) => setQuery({ ...query, genre: genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamePlatformSelector
            selectedPlatform={query.platform}
            onSelectPlatform={(platform) => {
              setQuery({ ...query, platform: platform });
            }}
          />
          <GameGrid query={query} />
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
