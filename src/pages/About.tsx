import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import "./About.css";

export const About = () => {
    const commands = {
        whoami: "🙋🏼‍♂ Andrei Stefan",
        help: (
            <span>
                <b className="text-success">Available commands:</b> <code>help, whoami, skills, bio, clear</code>
            </span>
        ),
        bio: (
            <>
                <div>💻 I'm a passionate developer dedicated to crafting websites and software solutions that are both functional and maintainable.</div>
                <br />
                <div>I enjoy turning complex problems into elegant, user-friendly software. My focus areas include web development using modern frameworks like React and Node.js, creating interactive front-end experiences, and exploring backend systems and databases.</div>
                <br />
                <div>Always curious, always improving, and always coding. 🚀</div>
            </>
        ),
        skills: "C | C++ | Java | HTML | JavaScript | CSS | Bash | Python | SQL | Docker | React | Node.js | TailwindCSS etc.. "
    };

    return (
        <TerminalContextProvider>
            <div className="terminal-container">
                <div className="terminal-wrapper">
                    <ReactTerminal
                        theme="material-dark"
                        commands={commands}
                        prompt="andrei@portfolio:~$"
                        welcomeMessage={
                            <>
                                <p>🟢 Connected to <b>Terminal</b></p>
                                <p>Type <code>help</code> to see available commands</p>
                                <p>-----------------------------------------</p>
                            </>
                        }
                        controlBarLabels={['clear', 'help', '']}
                        errorMessage={
                            <span className="text-error">Command not found. Type <code>'help'</code> to see available commands.</span>
                        }
                    />
                </div>
            </div>
        </TerminalContextProvider>
    );
};