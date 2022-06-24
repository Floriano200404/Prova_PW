import Title from './Title'
import Container from './Container'

function App() {
  const Titulo2 =
    [{
      Texto_Principal: "Premium Plans",
      Subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti voluptates corporis odit magnam accusamus placeat architecto."
    }]


  const Container2 = [
    {
     
      titulo: "Start",
      sub: "Free",
      desc: "1 user", 
      desc1: "Project",
      text: "Order Now",
      
    },
    {
      titulo: "Basic",
      sub: "$19.99",
      desc: "5 Users", 
      desc1:"20 Project",
      text: "Order Now"
    },
    {
      titulo: "Expert",
      sub: "$129.99",
      desc: " Unlimited Users",
      desc1: "Unlimited Projects",
      text: "Order Now"
    },
  ];


  return (
    <div>

      {Titulo2.map((titu) => {
        return <Title

          Texto_Principal={titu.Texto_Principal}
          Subtitulo={titu.Subtitulo}
        />;


      })}
      <div className='pai'>
        {
          Container2.map((cont, id) => {
            return <Container key={id}
              titulo={cont.titulo}
              sub={cont.sub}
              desc={cont.desc}
              desc1={cont.desc1}
              text={cont.text}
            />;
          })
        }
      </div>




    </div>
  );
}

export default App
