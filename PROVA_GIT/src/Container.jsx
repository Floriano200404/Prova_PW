import './Container.css'

function Container({titulo,sub,desc,text,desc1}) {

    return(
        
      <div className='ContainerPai'>
       
       <h1 className='titulo1'>{titulo}</h1>
       
      
        <h3 className='sub1'>{sub}</h3>
        <div className='arrumar'>
        <p className='desc1'>{desc}</p>
        <p className='desc1'>{desc1}</p>
        </div>
        <button className="Button">
            {text}
        </button>
        </div>

        
    );
}

export default Container