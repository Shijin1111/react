function customRender(element,container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}


const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target : '_blank',
    },
    children:'Click me to visit google'
}


customRender(reactElement,mainContainer)