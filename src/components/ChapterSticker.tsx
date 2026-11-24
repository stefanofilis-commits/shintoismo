type ChapterStickerProps = { index: number };

const labels = [
  { label: "LE ORIGINI", alt: "Torii davanti alle montagne e al sole nascente" },
  { label: "I KAMI", alt: "Sole, luna, tempesta e volpe messaggera" },
  { label: "NATURA E PUREZZA", alt: "Albero sacro con corda rituale e fonte d'acqua" },
  { label: "I TESTI", alt: "Rotolo antico, pennello e calamaio" },
  { label: "ARMONIA", alt: "Gru di carta sopra un sentiero tra le pietre" },
  { label: "I SANTUARI", alt: "Santuario shintoista con torii rosso" },
  { label: "SIMBOLI E RITUALI", alt: "Miko stilizzata, magatama e strisce shide" },
  { label: "YOMI", alt: "Torii immerso nella nebbia sotto la luna" },
] as const;

export default function ChapterSticker({ index }: ChapterStickerProps) {
  const item = labels[index] ?? labels[0];

  return (
    <figure className={`chapter-sticker chapter-sticker--${index + 1}`}>
      <svg viewBox="0 0 240 170" role="img" aria-label={item.alt}>
        <rect x="5" y="5" width="230" height="160" rx="24" fill="#fffaf0" stroke="#fff" strokeWidth="7" />
        <rect x="12" y="12" width="216" height="146" rx="18" fill="#eadcc8" stroke="#c7a36a" strokeWidth="1.5" />
        {index === 0 && (
          <>
            <rect x="13" y="13" width="214" height="144" rx="17" fill="#e8cdb9" />
            <circle cx="178" cy="46" r="23" fill="#e5a65e" />
            <path d="M14 121 70 58 111 110 145 72 226 133V158H14Z" fill="#756c70" />
            <path d="M14 137 70 96 108 132 151 101 226 145V158H14Z" fill="#4c5558" />
            <path d="M62 93H153M70 86H145M80 88V143M136 88V143" stroke="#a63232" strokeWidth="7" strokeLinecap="round" />
            <path d="M62 93H153M70 86H145" stroke="#edbd79" strokeWidth="2" />
            <path d="M14 145q26-10 52 0t52 0 52 0 56 0" fill="none" stroke="#f2dfc7" strokeWidth="3" />
          </>
        )}
        {index === 1 && (
          <>
            <circle cx="120" cy="73" r="30" fill="#e9b768" stroke="#b65c43" strokeWidth="2" />
            <g stroke="#b65c43" strokeWidth="2.5" strokeLinecap="round">
              <path d="M120 27V18M120 128v-9M74 73h-9M175 73h-9M87 40l-7-7M160 113l-7-7M153 40l7-7M87 113l-7 7" />
            </g>
            <path d="M171 28a20 20 0 1 0 22 29 17 17 0 0 1-22-29Z" fill="#687387" />
            <path d="M35 117q15-18 30-2l-5 20H40Z" fill="#66717b" />
            <path d="m43 118 4-18 12 13 11-13 1 20-15 14Z" fill="#a63232" stroke="#8e342e" strokeWidth="2" />
            <path d="M177 107q16-18 31-2l-5 20h-24Z" fill="#d4ae72" stroke="#906b49" strokeWidth="2" />
            <path d="m184 111 8 8 8-8M192 119v15" stroke="#906b49" strokeWidth="2" fill="none" />
            <text x="120" y="148" textAnchor="middle" fontSize="9" letterSpacing="4" fill="#8c5542">KAMI</text>
          </>
        )}
        {index === 2 && (
          <>
            <circle cx="184" cy="40" r="17" fill="#f0d49b" />
            <path d="M112 139q-7-31 0-67" stroke="#76543d" strokeWidth="16" strokeLinecap="round" fill="none" />
            <path d="M113 91Q80 59 58 82M114 81q20-37 51-20M111 68q-1-23 15-31" stroke="#76543d" strokeWidth="8" strokeLinecap="round" fill="none" />
            <g fill="#607a61"><circle cx="65" cy="77" r="26"/><circle cx="96" cy="55" r="28"/><circle cx="139" cy="55" r="29"/><circle cx="165" cy="82" r="25"/><circle cx="112" cy="93" r="27"/></g>
            <path d="M64 93q49 17 101-1" stroke="#fff0d5" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="m83 94-4 15 9-2 3 13 7-2 2-17M132 95l-2 16 9-2 2 12 7-2V98" fill="#fff8e8" stroke="#b9986b" strokeWidth="1.5" />
            <path d="M14 144q28-11 56 0t56 0 56 0 46 0" fill="none" stroke="#789d9c" strokeWidth="6" />
            <path d="M29 127h38v17H29Z" fill="#d5c3a5" stroke="#92795e" strokeWidth="2" />
          </>
        )}
        {index === 3 && (
          <>
            <rect x="34" y="35" width="140" height="97" rx="8" fill="#f7efdf" stroke="#9b7652" strokeWidth="3" />
            <path d="M34 48q-16 0-16 12t16 12M174 48q16 0 16 12t-16 12M34 104q-16 0-16 12t16 12M174 104q16 0 16 12t-16 12" fill="#b58e61" stroke="#8f6d4b" strokeWidth="2" />
            <path d="M55 57h92M55 72h80M55 87h88M55 102h64" stroke="#a65b4a" strokeWidth="2" strokeLinecap="round" />
            <text x="151" y="111" fontSize="28" fill="#a63232">神</text>
            <path d="m178 135 25-52 9 5-24 53-13 7Z" fill="#493b37" stroke="#302a29" strokeWidth="1.5" />
            <path d="m178 135-3 13 12-8" fill="#b37a4d" />
            <path d="m174 75 19-34 9 5-18 36Z" fill="#a63232" />
          </>
        )}
        {index === 4 && (
          <>
            <circle cx="179" cy="40" r="17" fill="#e5b56d" />
            <path d="m58 59 54 18-25 19-29-37Zm54 18 43-30-19 42-24-12Zm-25 19 25-19 8 42-33-23Z" fill="#f8f1e6" stroke="#88776d" strokeWidth="2" strokeLinejoin="round" />
            <path d="m112 77 25 25-25-5-25-1" fill="#d7bda0" stroke="#88776d" strokeWidth="1.5" />
            <path d="M18 129q48-25 91-5t102-3v37H18Z" fill="#9eae9c" />
            <path d="M29 148q35-21 70-6t72-7 45 1" fill="none" stroke="#f1e8d5" strokeWidth="3" />
            <path d="M43 121q8-14 16 0-8 12-16 0ZM183 126q8-14 16 0-8 12-16 0Z" fill="#a63232" />
            <path d="M31 42h26M44 29v26" stroke="#b38a5e" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        {index === 5 && (
          <>
            <circle cx="183" cy="39" r="17" fill="#e9b96e" />
            <path d="M25 76h91M31 68h79M40 69v68M103 69v68" stroke="#a63232" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M25 76h91M31 68h79" stroke="#e5b46e" strokeWidth="2" />
            <path d="m126 103 40-29 44 29Z" fill="#51464a" stroke="#342b2e" strokeWidth="2" />
            <path d="M136 101h64v38h-64Z" fill="#c7a985" stroke="#80684e" strokeWidth="2" />
            <path d="M130 99h76v9h-76Z" fill="#a63232" />
            <path d="M150 111h17v28h-17Z" fill="#684b40" />
            <path d="M14 143q40-19 79 0t70 0 63 0" fill="none" stroke="#819889" strokeWidth="7" />
            <path d="M22 118h13v20H22ZM113 120h13v18h-13Z" fill="#d7b16c" stroke="#8f6242" strokeWidth="2" />
          </>
        )}
        {index === 6 && (
          <>
            <path d="M105 52q0-23 23-23t23 23v12h-46Z" fill="#3d3031" />
            <circle cx="128" cy="60" r="19" fill="#eac3a5" />
            <path d="M108 55q5-29 31-18 10 6 9 20-13-10-26-8-7 5-14 6" fill="#30272a" />
            <path d="M104 80q24-18 49 0l14 44H90Z" fill="#f7f2e8" stroke="#9d8074" strokeWidth="2" />
            <path d="M104 119h50l17 36H87Z" fill="#a63232" />
            <path d="M128 84v47M109 93l-14 23M148 93l14 23" stroke="#c9a66f" strokeWidth="2" />
            <path d="m42 39 12 13-12 13-12-13ZM59 39l12 13-12 13-12-13Z" fill="#fff8ec" stroke="#a63232" strokeWidth="2" />
            <path d="M190 91c-17-11-31 8-19 20 11 10 26 2 19-20Z" fill="none" stroke="#b58b56" strokeWidth="7" />
          </>
        )}
        {index === 7 && (
          <>
            <circle cx="174" cy="43" r="25" fill="#f4e7ca" />
            <path d="M14 116 67 65l35 34 37-45 75 67v37H14Z" fill="#5a646d" />
            <path d="M14 133q45-22 84 0t75 0 53 0v33H14Z" fill="#485965" />
            <path d="M57 109h94M64 101h80M74 102v41M135 102v41" stroke="#90383a" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M57 109h94M64 101h80" stroke="#e3b477" strokeWidth="2" fill="none" />
            <path d="M14 144q29-11 58 0t58 0 58 0 38 0" stroke="#f1eee6" strokeWidth="5" fill="none" opacity=".8" />
            <path d="M21 78q22-15 44 0M147 89q25-16 50 0" stroke="#f1eee6" strokeWidth="7" fill="none" opacity=".65" />
          </>
        )}
        <path d="M22 25h18M31 16v18M202 138h13" stroke="#b68d5d" strokeWidth="1.8" strokeLinecap="round" opacity=".8" />
      </svg>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}
