import "./Button.css"
export default function Button(props: { variant?: string, label?: string, url?: string, text?: string, onClick?: () => void, className?: string }) {
  return (
    <div className="button-component">
      {props.url ? (
        <a href={props.url} className={`btn btn-${props.variant} ${props.className}`}>
          {props.text || props.label}
        </a>
      ) : (
        <button onClick={props.onClick} className={`btn btn-${props.variant} ${props.className}`}>
          {props.label}
        </button>
      )}
    </div>
  )
}
