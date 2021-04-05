import pic1 from './images/harry potter.jpg'
import pic2 from './images/shantaram1.png'
import pic3 from './images/anne.jpg'
import {Card} from './components/Card'


function App() {
  const data=[
    {
      title:"HARRY POTTER",
      sum:'20$',
      img:pic1
    },
    {
      title:"SHANTARAM",
      sum:'13$',
      img:pic2

    },
    {
      title:"Anne whith an A",
      sum:'15$',
      img:pic3
    },
  
  ]

   return (
    
     <div>
      <h1 id="sum"> </h1>
     <div  style={{display:'flex'}}className="App">
    {
      data.map((el,id) => {
        return <Card 
        title={el.title}
        sum={el.sum}
        img={el.img}
        key={id}
        />
      })
    }
  </div>
  </div>


   );
 }
 
 export default App;
