import { Container, Coverart, Title, GenreParagraph, ShazamA } from "./style";

const CardMusic = ({ image, subject, genre, href }) => {
  return (
    <Container>
      <Coverart src={image} alt={subject} />
      <Title>{subject}</Title>
      <GenreParagraph>{genre}</GenreParagraph>
      <ShazamA href={href}>Veja no shazam</ShazamA>
    </Container>
  );
};
export default CardMusic;
