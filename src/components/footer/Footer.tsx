import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";

const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            // Check for duplicate email
            const q = query(collection(db, "newsletter"), where("email", "==", email));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                alert("This email is already subscribed.");
                setLoading(false);
                return;
            }
            await addDoc(collection(db, "newsletter"), {
                email,
                createdAt: Timestamp.now()
            });
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
            setEmail('');
        } catch (err) {
            console.error("Error subscribing email:", err);
            alert("Failed to subscribe. Please try again.");
        }
        setLoading(false);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">

                    <div className="footer-section newsletter">
                        <h3>Keep up to date</h3>
                        <p>Join our newsletter for regular updates. No spam ever.</p>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                                <button className="subscribe-button" type="submit" disabled={loading}>
                                    {loading ? "Subscribing..." : subscribed ? 'Subscribed!' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="footer-section">
                        <h4>Products</h4>
                        <ul>
                            <li><Link to="/components">BristoHQ UI</Link></li>
                            <li><Link to="/charts">Vscode Extensions Hub</Link></li>
                            <li><Link to="/installation">Portfolio</Link></li>
                        </ul>
                    </div>


                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/contribute">HTML CSS JS</Link></li>
                            <li><Link to="/charts">React</Link></li>
                            <li><Link to="/components">Vite</Link></li>
                            <li><Link to="/installation">Tailwind CSS</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/installation">Installation</Link></li>
                            <li><Link to="/components">Components</Link></li>
                            <li><a href="https://github.com/bristohq/ui">GitHub</a></li>
                            <li><Link to="/templates">Templates</Link></li>
                            <li><Link to="/contribute">Contribute</Link></li>
                        </ul>
                    </div>


                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about">Vision</Link></li>
                            <li><Link to="/contribute">Careers</Link></li>
                            <li><Link to="/contribute">Support</Link></li>
                            <li><Link to="/about">Privacy policy</Link></li>
                            <li><Link to="/about">Contact us</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="footer-brand">
                        <img src="/ui-logo-white.png" alt="BristoHQ UI" width="24" height="24" />
                        <span>BristoHQ UI</span>
                    </div>
                    <div className="footer-copyright">
                        Copyright © {new Date().getFullYear()} <span style={{ color: "#b0b0b0" }}>BristoHQ</span>.
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/bristohq/ui" aria-label="GitHub">
                            <svg viewBox="0 0 438.549 438.549" width="20" height="20">
                                <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                            </svg>
                        </a>
                        <a href="https://x.com/@BristoHQ" aria-label="Twitter">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 30 30">
                                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                            </svg>
                        </a>
                        <a href="https://youtube.com/@BristoHQ" aria-label="YouTube">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.403 3.5 12 3.5 12 3.5s-7.403 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.169 0 12 0 12s0 3.831.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.597 20.5 12 20.5 12 20.5s7.403 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.831 24 12 24 12s0-3.831-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/bristohq" aria-label="LinkedIn">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z" />
                            </svg>
                        </a>
                        <a href="https://pinterest.com/bristohq" aria-label="Pinterest">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.396 7.634 11.082-.106-.942-.202-2.389.042-3.419.221-.956 1.423-6.096 1.423-6.096s-.363-.726-.363-1.799c0-1.687.98-2.949 2.199-2.949 1.037 0 1.538.779 1.538 1.713 0 1.044-.666 2.604-1.009 4.052-.287 1.217.609 2.211 1.805 2.211 2.166 0 3.834-2.287 3.834-5.587 0-2.919-2.099-4.968-5.099-4.968-3.478 0-5.523 2.609-5.523 5.309 0 1.057.406 2.194.914 2.813.102.123.116.23.085.353-.093.366-.302 1.166-.343 1.329-.054.217-.174.263-.403.159-1.507-.701-2.448-2.899-2.448-4.669 0-3.803 2.762-7.292 7.963-7.292 4.174 0 7.423 2.971 7.423 6.927 0 4.146-2.617 7.478-6.254 7.478-1.221 0-2.369-.634-2.759-1.349l-.751 2.857c-.227.865-.671 1.953-.999 2.62.753.233 1.547.359 2.377.359 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                        </a>
                        <a href="https://discord.gg/bristohq" aria-label="Discord">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 00-5.487 0 12.317 12.317 0 00-.617-1.249.07.07 0 00-.073-.035A19.736 19.736 0 003.683 4.369a.064.064 0 00-.028.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 00.031.056c2.052 1.507 4.042 2.422 5.993 3.029a.07.07 0 00.078-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 00-.038-.098c-.652-.247-1.274-.527-1.872-.847a.07.07 0 01-.007-.119c.125-.094.25-.192.371-.291a.07.07 0 01.073-.009c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.074.009c.122.099.246.197.371.291a.07.07 0 01-.006.119 13.093 13.093 0 01-1.873.847.07.07 0 00-.038.098c.36.699.772 1.364 1.225 1.994a.07.07 0 00.078.027c1.961-.607 3.951-1.522 5.993-3.029a.08.08 0 00.031-.056c.5-5.177-.838-9.673-3.549-13.661a.061.061 0 00-.028-.027zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}
