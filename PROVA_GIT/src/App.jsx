import Title from './Title'


function App() {
  const Titulo2 = 
		[{
			Texto_Principal: "Premium Plans",
      Subtitulo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti voluptates corporis odit magnam accusamus placeat architecto."
		}]


    return(
      <div>
        
        {Titulo2.map((titu) => {
					return <Title 
          
            Texto_Principal={titu.Texto_Principal}
            Subtitulo={titu.Subtitulo}
						/>;
				})}
    
      
    

        </div>
    );
}

export default App
