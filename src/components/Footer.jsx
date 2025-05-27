import "./Footer.css";

function Footer() {
    return (
        <div className="container footer flex f:v gap:2 width">
            <div className="flex f:v gap:2">
                <div className="subheading  type:small">
                    <span className="tt:u">Anubhav Saini</span> &copy; {new Date().getFullYear()}
                </div>
                <div className="type:small">
                    <span className="tt:u">Last updated:</span> {new Date().toLocaleDateString()}
                </div>
            </div>
            <div className="flex f:v gap:2">
                <a href="#top" className="type:small tt:u">
                    Back to top
                </a>
            </div>
        </div>
    );
}

export { Footer };
