type ChapterStickerProps = { index: number };

const labels = [
  { label: "LE ORIGINI", alt: "Torii, montagne e sole nascente, illustrati a inchiostro nero" },
  { label: "I KAMI", alt: "Maschera kitsune e simboli del sole e della luna, a inchiostro nero" },
  { label: "NATURA E PUREZZA", alt: "Albero sacro con shimenawa e riti di purificazione, a inchiostro nero" },
  { label: "I TESTI", alt: "Rotolo antico, pennello e calamaio, illustrati a inchiostro nero" },
  { label: "ARMONIA", alt: "Gru di carta e sentiero di pietre, illustrati a inchiostro nero" },
  { label: "I SANTUARI", alt: "Santuario shintoista con torii e lanterne, a inchiostro nero" },
  { label: "SIMBOLI E RITUALI", alt: "Magatama e carta rituale shide, a inchiostro nero" },
  { label: "YOMI", alt: "Torii nella nebbia sotto la luna, illustrato a inchiostro nero" },
] as const;

function InkArtwork({ index }: { index: number }) {
  if (index === 0) {
    return (
      <>
        <circle cx="188" cy="43" r="19" fill="none" stroke="#201d1a" strokeWidth="2.2" />
        <path d="M188 15v-7M188 78v-7M160 43h-7M223 43h-7M168 23l-5-5M213 67l-5-5M208 23l5-5" />
        <path d="M22 135 76 72l25 28 34-55 72 90M33 135l43-47 22 20 36-50 59 77" strokeWidth="2.2" />
        <path d="m111 100 24-55 25 55M120 81l15-26 16 27" strokeWidth="1.2" />
        <path d="M24 141q34-12 66 0t67 0 65 0" strokeWidth="1.8" />
        <path d="M54 106h111M62 97h95M70 99v43M149 99v43" strokeWidth="6.5" />
        <path d="M49 106h121M58 96h103" strokeWidth="2.4" />
        <path d="M64 89q50-8 99 0" strokeWidth="1.4" />
        <path d="M79 113v24M141 113v24M90 114v23M130 114v23" strokeWidth="1.3" />
        <path d="M29 151q18-4 35 0M174 151q18-4 35 0" strokeWidth="1.2" />
      </>
    );
  }

  if (index === 1) {
    return (
      <>
        <circle cx="54" cy="49" r="17" strokeWidth="2" />
        <path d="M54 22v-9M54 85v-9M27 49h-9M90 49h-9M35 30l-6-6M79 69l-6-6M73 30l6-6" strokeWidth="1.5" />
        <path d="M184 27a22 22 0 1 0 24 33 18 18 0 0 1-24-33Z" strokeWidth="2.2" />
        <path d="m81 78 17-48 30 27 31-27 17 48-12 55q-25 24-71 0Z" strokeWidth="3.2" />
        <path d="m96 47 16 15M161 47l-17 15M94 79q18-15 33 0M142 79q17-15 32 0" strokeWidth="3" />
        <path d="m112 103 17-10 17 10-17 17Z" strokeWidth="2.2" />
        <path d="M116 110q13 8 26 0M129 119v7M111 129q18 13 36 0" strokeWidth="1.6" />
        <path d="M104 89 94 93M154 89l10 4" strokeWidth="1.5" />
        <path d="M93 54q-9 10-7 23M164 54q9 10 7 23" strokeWidth="1.3" />
      </>
    );
  }

  if (index === 2) {
    return (
      <>
        <path d="M128 147q-8-33 2-70-1-17 13-34M128 102q-34-31-62-16M130 83q31-35 63-23M127 68q-8-24 7-37" strokeWidth="7" />
        <path d="M71 81q-16-28 11-42 21-13 37 9 16-28 42-10 22 16 5 43-23 25-50 20-26 6-45-20Z" strokeWidth="2.2" />
        <path d="M80 77q-3-17 13-23M104 51q13-8 24 5M143 52q13-9 24 3M169 75q-4 14-18 18" strokeWidth="1.4" />
        <path d="M62 105q65 18 132-1" strokeWidth="5" />
        <path d="m83 107-4 15 10-3 3 13 8-3 1-16M139 108l-1 15 10-3 2 13 8-3 1-16" strokeWidth="2" />
        <path d="M28 142q25-12 50 0t50 0 50 0 34 0" strokeWidth="2.4" />
        <path d="M39 122h29v20H39Z M35 122h37M45 117v5M61 117v5" strokeWidth="2" />
        <path d="M43 136q7-7 14 0t14 0" strokeWidth="1.2" />
      </>
    );
  }

  if (index === 3) {
    return (
      <>
        <path d="M49 39q-18 0-18 16v72q0 16 18 16h119q18 0 18-16V55q0-16-18-16Z" strokeWidth="2.8" />
        <path d="M49 39q-11 0-11 16t11 16M168 39q11 0 11 16t-11 16M49 111q-11 0-11 16t11 16M168 111q11 0 11 16t-11 16" strokeWidth="3.4" />
        <path d="M59 58h91M59 73h77M59 88h90M59 103h67M59 118h82" strokeWidth="1.7" />
        <path d="M112 54v78M130 54v78" strokeWidth="1" opacity=".5" />
        <path d="M153 109q9-13 18-2l-7 29-15-5Z" strokeWidth="2.4" />
        <path d="m155 112 8 15M163 108l-5 19M153 136l-1 7" strokeWidth="1.3" />
        <path d="M198 94q-8 18-16 29" strokeWidth="4.6" />
        <path d="m196 91 8-12 3 12M181 123l-4 14 12-8" strokeWidth="1.7" />
        <path d="M185 145h30" strokeWidth="2" />
      </>
    );
  }

  if (index === 4) {
    return (
      <>
        <path d="m65 72 53 18-25 22-28-40ZM118 90l54-38-20 51-34-13ZM93 112l25-22 13 43-38-21Z" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="m118 90 27 27-27-8-27 3M145 117l30-8-15 24-15-16Z" strokeWidth="1.7" />
        <path d="M118 90 103 64l18 12 18-27 9 39" strokeWidth="1.4" />
        <path d="M29 145q40-23 81-6t76-2 28 1" strokeWidth="2.2" />
        <path d="M38 152q25-11 50 0t50 0 50 0 27 0" strokeWidth="1.3" />
        <path d="M37 122q8-14 16 0-8 12-16 0ZM185 126q8-14 16 0-8 12-16 0Z" strokeWidth="1.6" />
        <path d="M45 122q8-7 16 0M193 126q8-7 16 0" strokeWidth="1" />
        <path d="M194 43h20M204 33v20" strokeWidth="1.7" />
      </>
    );
  }

  if (index === 5) {
    return (
      <>
        <circle cx="188" cy="39" r="16" strokeWidth="2" />
        <path d="M23 79h90M31 69h75M40 70v70M100 70v70" strokeWidth="6.5" />
        <path d="M18 79h100M27 68h82" strokeWidth="2.2" />
        <path d="m122 90 43-35 53 35Z" strokeWidth="3.2" strokeLinejoin="round" />
        <path d="m129 89 36-26 44 26M134 96h75v46h-75Z" strokeWidth="2.6" />
        <path d="M123 94h96M130 103h83" strokeWidth="4" />
        <path d="M151 104h17v38h-17ZM183 108h14v19h-14Z" strokeWidth="2" />
        <path d="M145 142v-32M177 142v-22M205 142v-19" strokeWidth="1.4" />
        <path d="M123 149h98M132 155h78" strokeWidth="2" />
        <path d="M22 145q35-14 69 0t69 0 56 0" strokeWidth="1.8" />
        <path d="M24 119h14v22H24ZM109 121h13v20h-13Z" strokeWidth="2" />
      </>
    );
  }

  if (index === 6) {
    return (
      <>
        <path d="M95 62q0-25 25-25t25 25v17H95Z" strokeWidth="2.5" />
        <path d="M102 58q4-24 24-23 20 2 20 24-21-10-44-1Z" fill="#211d1a" strokeWidth="1.5" />
        <path d="M107 78q15 12 29 0M101 83l-10 23M147 83l12 23" strokeWidth="1.6" />
        <path d="M92 108q28-28 56 0l14 43H78Z" strokeWidth="2.6" />
        <path d="M105 103v45M137 103v45M92 121h69" strokeWidth="1.5" />
        <path d="M37 49 51 35l14 14-14 14Z M69 49 83 35l14 14-14 14Z" strokeWidth="2.4" />
        <path d="M51 63v24M83 63v24" strokeWidth="1.4" />
        <path d="M193 69c-25-16-43 13-26 29 15 14 38 2 26-29Z" strokeWidth="4.2" />
        <path d="M183 83q8 8 0 15" strokeWidth="1.3" />
        <path d="M174 40q17-10 33 0M184 28v22" strokeWidth="1.2" />
      </>
    );
  }

  return (
    <>
      <circle cx="177" cy="43" r="26" strokeWidth="2.2" />
      <path d="M14 118 67 67l35 34 38-46 73 66M14 130q43-20 83 0t74 0 42 0" strokeWidth="2.4" />
      <path d="M54 111h99M62 102h83M72 104v40M135 104v40" strokeWidth="6.2" />
      <path d="M48 111h111M58 100h90" strokeWidth="2.2" />
      <path d="M20 146q29-13 58 0t58 0 58 0 31 0M25 153q24-8 48 0t48 0 48 0 32 0" strokeWidth="1.8" />
      <path d="M22 84q21-14 42 0M146 91q26-16 53 0" strokeWidth="4" opacity=".45" />
      <path d="M67 76q-10-9-18 0M145 79q10-9 20 0" strokeWidth="1.3" />
      <path d="M31 41h20M41 31v20M207 122h12" strokeWidth="1.4" />
    </>
  );
}

export default function ChapterSticker({ index }: ChapterStickerProps) {
  const item = labels[index] ?? labels[0];
  const clipId = `sticker-paper-${index}`;

  return (
    <figure className={`chapter-sticker chapter-sticker--${index + 1}`}>
      <svg viewBox="0 0 240 170" role="img" aria-label={item.alt}>
        <defs>
          <clipPath id={clipId}>
            <rect x="12" y="12" width="216" height="146" rx="20" />
          </clipPath>
        </defs>
        <rect x="5" y="5" width="230" height="160" rx="25" fill="#fffdf7" stroke="#fff" strokeWidth="7" />
        <g clipPath={`url(#${clipId})`}>
          <rect x="12" y="12" width="216" height="146" fill="#f3eee3" />
          <path d="M18 29q27-13 54-4M169 145q27-11 51-2" fill="none" stroke="#171513" strokeWidth="2" opacity=".3" />
          <g fill="none" stroke="#211d1a" strokeLinecap="round" strokeLinejoin="round">
            <InkArtwork index={index} />
          </g>
          <g fill="#211d1a" opacity=".72">
            <circle cx="29" cy="54" r="1.4" />
            <circle cx="211" cy="61" r="1.1" />
            <circle cx="44" cy="145" r="1.2" />
            <circle cx="198" cy="132" r="1.5" />
          </g>
          <g fill="none" stroke="#211d1a" strokeLinecap="round" opacity=".65">
            <path d="M25 25q6-5 12 0M203 25q6-5 12 0M26 151q5-4 10 0" strokeWidth="1.3" />
            <path d="M33 34q-5 4-7 10M207 36q5 4 7 10" strokeWidth="1.1" />
          </g>
        </g>
        <rect x="12" y="12" width="216" height="146" rx="20" fill="none" stroke="#211d1a" strokeWidth="1" opacity=".35" />
      </svg>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}
