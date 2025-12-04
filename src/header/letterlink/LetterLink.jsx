import "./LetterLink.css";

export default function LetterLink({ text, url }) {
  return (
    <span className="cyberpunk">
      {text.split("").map((char, i) => (
        <a key={i} href={url} className="letter-link">
          {char}
        </a>
      ))}
    </span>
  );
}
