import './Title.css'
function Title({Texto_Principal,Subtitulo}) {

    return(
      <div className='TITLE'>
        <h1 ><strong>{Texto_Principal}</strong></h1>
       <p>{Subtitulo}</p>

    
    

        </div>
    );
}

export default Title