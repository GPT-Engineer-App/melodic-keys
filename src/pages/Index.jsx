import { Box, Container, VStack, Text, Button, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

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

const MotionButton = motion(Button);

const PianoKey = ({ note, color, onClick }) => (
  <MotionButton
    onClick={() => onClick(note)}
    bg={color === "white" ? "white" : "black"}
    color={color === "white" ? "black" : "white"}
    height="150px"
    width="40px"
    m="2px"
    _hover={{ opacity: 0.8 }}
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
  >
    {note}
  </MotionButton>
);

const Index = () => {
  const [playedNotes, setPlayedNotes] = useState([]);
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaSun />, <FaMoon />);

  const playNote = (note) => {
    setPlayedNotes([...playedNotes, note]);
    console.log(`Played note: ${note}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <IconButton
        icon={colorModeIcon}
        isRound
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
        mb={4}
      />
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Playable Piano Interface</Text>
        <Box display="flex" justifyContent="center" alignItems="center" bg="gray.200" p={4} borderRadius="md" boxShadow="lg">
          {keys.map((key) => (
            <PianoKey key={key.note} note={key.note} color={key.color} onClick={playNote} />
          ))}
        </Box>
        <Text fontSize="lg" fontStyle="italic">Played Notes: {playedNotes.join(", ")}</Text>
      </VStack>
    </Container>
  );
};

export default Index;