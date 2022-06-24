import './Container.css'
function Container({titulo,sub,desc,text}) {

    return(
        
      <div className='ContainerPai'>
       <h1>{titulo}</h1>
        <h3>{sub}</h3>
        <p>{desc}</p>
        <button className="Button">
            {text}
        </button>
        </div>

        
    );
}

export default Container