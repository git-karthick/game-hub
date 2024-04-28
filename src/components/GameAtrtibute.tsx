import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import Definitionitems from "./Definitionitems";

interface Props {
  game: Game;
}

const GameAtrtibute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <Definitionitems term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Definitionitems>
      <Definitionitems term="Metascore">
        <CriticScore score={game.metacritic} />
      </Definitionitems>
      <Definitionitems term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Definitionitems>
      <Definitionitems term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </Definitionitems>
    </SimpleGrid>
  );
};

export default GameAtrtibute;
