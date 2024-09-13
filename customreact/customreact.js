function customRender(raectElement,container){
    /*
    const domElement=document.createElement(raectElement.type)
    domElement.innerHTML=raectElement.children
    domElement.setAttribute('href',raectElement.props.href)
    domElement.setAttribute('target',raectElement.props.target)

    container.appendChild(domElement)*/


   const domElement= document.createElement(raectElement.type)
   domElement.innerHTML=raectElement.children
   for(const prop in raectElement.props){
     if(prop==='children') continue;
     domElement.setAttribute(prop,raectElement.props[prop])
   }  
   container.appendChild(domElement)
}
const raectElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
 }

 const mainContainer =document.querySelector("#root")

 customRender(raectElement,mainContainer)
