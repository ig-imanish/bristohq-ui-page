import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "link";
  url?: string;
  text: string;
  onClick?: () => void;
}

export default function Button({ variant = "primary", url, text, onClick }: ButtonProps) {
  const className = `btn btn-${variant}`;

  if (variant === "link" && url) {
    return (
      <div className="button-component">
        <Link to={url} className={className}>
          {text}
        </Link>
      </div>
    );
  }

  return (
    <div className="button-component">
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
