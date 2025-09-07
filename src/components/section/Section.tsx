import "./Section.css";
import { useEffect, useState } from "react";

export default function Section() {
    const [npmDownloads, setNpmDownloads] = useState<number | null>(null);
    const [githubStars, setGithubStars] = useState<number | null>(null);
    const [contributors, setContributors] = useState<number | null>(null);

    useEffect(() => {

        // https://api.github.com/repos/BristoHQ/ui/contributors

        const fetchContributors = async () => {
            const response = await fetch("https://api.github.com/repos/bristohq/ui/contributors");
            const data = await response.json();
            setContributors(Array.isArray(data) ? data.length : null);
        };
        fetchContributors();

        const fetchNpmDownloads = async () => {
            try {
                const res = await fetch("https://api.npmjs.org/downloads/point/last-month/@bristohq/ui");
                const data = await res.json();
                setNpmDownloads(data.downloads);
            } catch (err) {
                console.log("Error fetching npm downloads:", err);
                setNpmDownloads(null);
            }
        };
        fetchNpmDownloads();

        const fetchGithubStars = async () => {
            const response = await fetch("https://api.github.com/repos/bristohq/ui");
            const data = await response.json();
            setGithubStars(data.stargazers_count);
        };
        fetchGithubStars();
    }, []);

    return (
        <div className="sec-container">
            <div className="header">
                <h2>Built for developers <span style={{ color: '#ffffffff', padding: '0px 8px', background: 'rgba(255, 255, 255, 0.18)', borderRadius: '4px', borderRight: '3px solid rgba(255, 255, 255, 1)' }}>By developers</span></h2>
            </div>
            <div className="sub-header">
                <h3>Built for modern product teams.
                </h3>
                <span>From next-gen startups to established enterprises.</span>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="corner corner-top-left"></div>
                    <div className="corner corner-top-right"></div>
                    <div className="corner corner-bottom-left"></div>
                    <div className="corner corner-bottom-right"></div>
                    <h1>
                        {npmDownloads !== null ? npmDownloads.toLocaleString() : "—"}
                    </h1>
                    <p>
                        <svg focusable="false" aria-hidden="true" className="chakra-icon css-1t5f6nh" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.001 3C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3H20.001ZM17.001 7H7.00098V17H12.001V9.5H14.501V17H17.001V7Z"></path></svg>
                        downloads / month
                    </p>
                </div>
                <div className="card">
                    <div className="corner corner-top-left"></div>
                    <div className="corner corner-top-right"></div>
                    <div className="corner corner-bottom-left"></div>
                    <div className="corner corner-bottom-right"></div>
                    <h1>
                        {githubStars !== null ? githubStars.toLocaleString() : "0"}
                    </h1>
                    <p>
                        <svg focusable="false" aria-hidden="true" className="chakra-icon css-1t5f6nh" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                        Github stars
                    </p>
                </div>
                <div className="card">
                    <div className="corner corner-top-left"></div>
                    <div className="corner corner-top-right"></div>
                    <div className="corner corner-bottom-left"></div>
                    <div className="corner corner-bottom-right"></div>
                    <h1>
                        {contributors !== null ? contributors.toLocaleString() : "1"}
                    </h1>
                    <p>
                        <svg focusable="false" aria-hidden="true" className="chakra-icon css-1t5f6nh" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                        contributors
                    </p>
                </div>
            </div>
        </div>
    )
}
