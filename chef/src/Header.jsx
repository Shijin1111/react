// import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    function handleMouseOver() {
        console.log("I was hovered");
    }
    return (
        <header>
            <img src=" "/>
            <h1 onMouseOver={handleMouseOver}>Chef Claude</h1>
        </header>
    )
}