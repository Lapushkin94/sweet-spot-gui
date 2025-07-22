import "./HeaderWrapper.css"

const HeaderWrapper = (props) => {
  return <header className="header-wrapper">{props.children}</header>;
};

export default HeaderWrapper;