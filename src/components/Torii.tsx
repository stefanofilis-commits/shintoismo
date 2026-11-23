export default function Torii({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 170" aria-hidden="true" focusable="false">
      <path d="M2 30Q100 46 198 30L192 14Q100 30 8 14Z" fill="#C83C32" />
      <rect x="22" y="38" width="156" height="9" fill="#A92720" />
      <rect x="34" y="62" width="132" height="8" fill="#C83C32" />
      <rect x="42" y="42" width="12" height="128" fill="#C83C32" />
      <rect x="146" y="42" width="12" height="128" fill="#C83C32" />
    </svg>
  );
}
