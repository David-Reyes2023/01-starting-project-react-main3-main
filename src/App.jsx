import {useState} from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS } from './data';



function App() {
  const [content, setContent] = useState("Press a Button")


    function handleClick(selectedButton){
      setContent(selectedButton);
      //console.log (selectedButton);
    }

 

  return (
    <div>
      <Header />
      
      <main>
        
        <h2>Time to get Started!</h2>
        
        <section id="core-concepts">

          <h2>Core Concepts</h2>

          <ul>
            
            <CoreConcept
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            />
            
            <CoreConcept 
            {... CORE_CONCEPTS[1]}
            />
            
            <CoreConcept 
            {... CORE_CONCEPTS[2]}
            />
            
            <CoreConcept 
            image={CORE_CONCEPTS[3].image}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            />
          
          </ul>

        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton handleClick={()=>{handleClick('Components')}}>Components</TabButton>
              <TabButton handleClick={()=>{handleClick('jsx')}}>JSX</TabButton>
              <TabButton handleClick={()=>{handleClick('Props')}}>Props</TabButton>
              <TabButton handleClick={()=>{handleClick('State')}}>State</TabButton>
            </menu>
            {content}
        </section>
       </main>

    </div>
  );
}

export default App;