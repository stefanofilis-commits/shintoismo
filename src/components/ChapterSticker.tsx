type ChapterStickerProps = { index: number };

type ChapterArtwork = {
  label: string;
  alt: string;
  image: string;
  source: string;
  credit: string;
};

// Historical Japanese artworks and photographs from Wikimedia Commons.
// Their individual sources and reuse statements are documented in IMAGE_CREDITS.md.
const artworks: readonly ChapterArtwork[] = [
  {
    label: "LE ORIGINI",
    alt: "Izanami e Izanagi creano le prime isole giapponesi, dipinto di Kobayashi Eitaku",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Izanami_and_Izanagi_create_the_1st_Japanese_isles%2C_Kobayashi_Eitaku_MFA_1880s.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Izanami_and_Izanagi_create_the_1st_Japanese_isles,_Kobayashi_Eitaku_MFA_1880s.jpg",
    credit: "Kobayashi Eitaku · pubblico dominio",
  },
  {
    label: "I KAMI",
    alt: "Dipinto tradizionale a inchiostro di una volpe kitsune",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Kitsune_painting_attributed_to_Kano_Tomonobu.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Kitsune_painting_attributed_to_Kano_Tomonobu.jpg",
    credit: "Attribuito a Kanō Tomonobu · pubblico dominio",
  },
  {
    label: "NATURA E PUREZZA",
    alt: "Roccia sacra avvolta da uno shimenawa tra alberi e vegetazione",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Shimenawa-Meigetsuin.jpg/960px-Shimenawa-Meigetsuin.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Shimenawa-Meigetsuin.jpg",
    credit: "Urashimataro · pubblico dominio",
  },
  {
    label: "I TESTI",
    alt: "Illustrazione storica di uno scriba giapponese che copia un rotolo",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Japanese_Scribe_in_Edo_Era.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Japanese_Scribe_in_Edo_Era.jpg",
    credit: "Aimé Humbert-Droz, 1870 · pubblico dominio",
  },
  {
    label: "ARMONIA",
    alt: "Dipinto giapponese a inchiostro di una gru e del sole",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/MET_38_106_1_115885.jpg/960px-MET_38_106_1_115885.jpg",
    source: "https://commons.wikimedia.org/wiki/File:MET_38_106_1_115885.jpg",
    credit: "The Metropolitan Museum of Art · CC0",
  },
  {
    label: "I SANTUARI",
    alt: "Torii d'ingresso al santuario Onji-jinja in Giappone",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Onji-jinja%2C_torii.jpg/960px-Onji-jinja%2C_torii.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Onji-jinja,_torii.jpg",
    credit: "Saigen Jiro · CC0",
  },
  {
    label: "SIMBOLI E RITUALI",
    alt: "Stampa storica di una danza kagura presso un santuario shintoista",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/A_scene_of_a_shinto_shrine_dance%2C_kagura.jpg/960px-A_scene_of_a_shinto_shrine_dance%2C_kagura.jpg",
    source: "https://commons.wikimedia.org/wiki/File:A_scene_of_a_shinto_shrine_dance,_kagura.jpg",
    credit: "Katsushika Hokusai · pubblico dominio",
  },
  {
    label: "YOMI",
    alt: "Disegno di Hokusai raffigurante uno yurei, spirito del folklore giapponese",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Hokusai_yurei.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Hokusai_yurei.jpg",
    credit: "Katsushika Hokusai · pubblico dominio",
  },
] as const;

export default function ChapterSticker({ index }: ChapterStickerProps) {
  const artwork = artworks[index] ?? artworks[0];

  return (
    <figure className={`chapter-sticker chapter-sticker--${index + 1}`}>
      <a
        className="chapter-sticker__frame"
        href={artwork.source}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Apri la fonte dell'immagine: ${artwork.label}`}
      >
        <img
          className="chapter-sticker__image"
          src={artwork.image}
          alt={artwork.alt}
          loading="lazy"
          decoding="async"
        />
      </a>
      <figcaption>{artwork.label}</figcaption>
      <a
        className="chapter-sticker__credit"
        href={artwork.source}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artwork.credit}
      </a>
    </figure>
  );
}
