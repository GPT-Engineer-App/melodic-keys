import { Box, Container, VStack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const keys = [
  { note: "C", color: "white" },
  { note: "C#", color: "black" },
  { note: "D", color: "white" },
  { note: "D#", color: "black" },
  { note: "E", color: "white" },
  { note: "F", color: "white" },
  { note: "F#", color: "black" },
  { note: "G", color: "white" },
  { note: "G#", color: "black" },
  { note: "A", color: "white" },
  { note: "A#", color: "black" },
  { note: "B", color: "white" },
];

const PianoKey = ({ note, color, onClick }) => (
  <Button
    onClick={() => onClick(note)}
    bg={color === "white" ? "white" : "black"}
    color={color === "white" ? "black" : "white"}
    height="150px"
    width="40px"
    m="2px"
    _hover={{ opacity: 0.8 }}
  >
    {note}
  </Button>
);

const Index = () => {
  const [playedNotes, setPlayedNotes] = useState([]);

  const playNote = (note) => {
    setPlayedNotes([...playedNotes, note]);
    console.log(`Played note: ${note}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Playable Piano Interface</Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          {keys.map((key) => (
            <PianoKey key={key.note} note={key.note} color={key.color} onClick={playNote} />
          ))}
        </Box>
        <Text>Played Notes: {playedNotes.join(", ")}</Text>
      </VStack>
    </Container>
  );
};

export default Index;