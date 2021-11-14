import githubLogo from "../assets/github-logo.png";
export const Footer = () => {
  return (
    <div className="footer">
      <img className="github-logo" src={githubLogo} alt="github-logo" />
      <a href="https://github.com/anixudh"> anixudh</a>
    </div>
  );
};
