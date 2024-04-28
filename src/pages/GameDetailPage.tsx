import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import Definitionitems from "../components/Definitionitems";
import ExpandableText from "../components/ExpandableText";
import GameAtrtibute from "../components/GameAtrtibute";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAtrtibute game={game} />
        <GameTrailer gameId={game.id} />
      </Box>
    </>
  );
};

export default GameDetailPage;
