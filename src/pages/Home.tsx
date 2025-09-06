import Section from "../components/section/Section";
import "../styles/pages/Home.css";
import { useState } from "react";

export default function Home() {
    const [copied, setCopied] = useState(false);
    const [codeCopied, setCodeCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("npm i @bristohq/ui");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const codeString = `
import { Button } from "@bristohq/ui";

export default function App() {
  return (
    <>
      <Button
        label="Click Me"
        onClick={() => alert("Clicked!")}
        variant="danger"
      />
    </>
  );
}
`.trim();

    const handleCodeCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 1500);
    };

    return (
        <div className="home-root">
            <div className="container" >

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="card-new-version" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>New version v2.0 of bristohq/ui has been released!</span>
                        <div className="loader">
                            <div className="circle">
                                <div className="dot"></div>
                                <div className="outline"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="home-title">The Foundation for your Design System</h1>
                <p className="home-desc">
                    A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.
                </p>
                <div className="home-actions">
                    <a href="#" className="home-get-started">Get Started</a>
                    <pre
                        className="home-npm-install"
                        style={{ cursor: "pointer", position: "relative" }}
                        title="Click to copy"
                        onClick={handleCopy}
                    >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
                        npm i @bristohq/ui
                    </pre>
                    {copied && (
                        <div className="copied-popup">
                            <span className="popup-icon">
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="10" fill="#27ae60" />
                                    <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Copied!
                        </div>
                    )}
                </div>
            </div>
            <div className="home-content">
                <div className="left-content">
                    <div className="feature-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none"><path d="M0.470859 12.9879L13.17 0.0888906C13.4071 -0.152085 13.789 0.14116 13.6288 0.44136L8.90232 9.3016C8.79678 9.49911 8.93668 9.74022 9.15676 9.74022H17.3249C17.5881 9.74022 17.7151 10.0699 17.5227 10.2536L3.20913 23.9167C2.95248 24.1617 2.57048 23.8165 2.77652 23.5258L9.55227 13.9656C9.69116 13.7695 9.5543 13.4949 9.31755 13.4949H0.67518C0.416376 13.4949 0.287227 13.1745 0.470859 12.9879Z" fill="currentColor"></path></svg>
                        <p>Design System</p>
                    </div>
                    <div>
                        <h2 style={{ lineHeight: '1.3' }}>Build your design system on top of <span style={{ color: '#ffffffff', padding: '0px 8px', background: 'rgba(255, 255, 255, 0.18)', borderRadius: '4px', borderRight: '3px solid rgba(255, 255, 255, 1)' }}>BristoHQ UI</span></h2>
                        <p>Spend less time writing UI code and more time building a great experience for your customers.</p>
                        <ul className="feature-list">
                            <li>
                                <svg className="list-icon" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                                <span><span className="tokens-text">Simple.</span> Simple components for faster development</span>
                            </li>
                            <li>
                                <svg className="list-icon" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                                <span><span className="tokens-text">Easy.</span> Easy to use components for faster development</span>
                            </li>
                            <li>
                                <svg className="list-icon" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                                <span><span className="tokens-text">Template.</span> Pre-built templates for faster development</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-content">
                    <div className="card" style={{ position: "relative" }}>
                        <div className="card-header">
                            <div className="macos-controls">
                                <div className="control-dot red"></div>
                                <div className="control-dot yellow"></div>
                                <div className="control-dot green"></div>
                            </div>
                            <div className="filename-container">
                                <svg className="react-logo" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB" />
                                </svg>
                                <span className="filename" style={{ color: "white", fontSize: "0.875rem" }}>index.jsx</span>

                            </div>
                        </div>

                        <button
                            className="code-copy-button"
                            onClick={handleCodeCopy}
                            style={{
                                position: "absolute",
                                top: "7px",
                                right: "18px",
                                background: "#232323",
                                color: "#fff",

                                borderRadius: "4px",
                                padding: "0.3rem 0.7rem",
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                zIndex: '2',
                                border: '1px solid #ffffff1a',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',

                            }}
                            title="Copy code"
                        >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                <path d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V14C17 14.5523 16.5523 15 16 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="3" y="5" width="11" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            Copy code
                        </button>
                        <pre style={{ position: "relative" }}>
                            <span className="keyword">import</span><span className="punctuation"> &#123; </span><span className="component">Button</span><span className="punctuation"> &#125; </span><span className="keyword">from</span><span className="string"> "@bristohq/ui"</span><span className="punctuation">;</span>
                            {'\n\n'}
                            <span className="keyword">export</span><span className="const"> default</span><span className="const"> function</span><span className="function"> App</span><span className="punctuation">()</span><span className="punctuation"> &#123;</span>
                            {'\n'}  <span className="keyword">return</span><span className="punctuation"> (</span>
                            {'\n'}    <span className="punctuation">&lt;&gt;</span>
                            {'\n'}      <span className="punctuation">&lt;</span><span className="component">Button</span>
                            {'\n'}        <span className="property">label</span><span className="operator">=</span><span className="string">"Click Me"</span>
                            {'\n'}        <span className="property">onClick</span><span className="operator">=</span><span className="punctuation">&#123;()</span><span className="operator"> =&gt; </span><span className="function">alert</span><span className="punctuation">(</span><span className="string">"Clicked!"</span><span className="punctuation">)&#125;</span>
                            {'\n'}        <span className="property">variant</span><span className="operator">=</span><span className="string">"danger"</span>
                            {'\n'}      <span className="punctuation">/&gt;</span>
                            {'\n'}    <span className="punctuation">&lt;/&gt;</span>
                            {'\n'}  <span className="punctuation">);</span>
                            {'\n'}<span className="punctuation">&#125;</span>
                        </pre>

                        {codeCopied && (
                            <div className="copied-popup">
                                <span className="popup-icon">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="10" fill="#27ae60" />
                                        <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                Code copied!
                            </div>
                        )}
                    </div>
                </div>



            </div>
                <Section />
        </div >
    );
}