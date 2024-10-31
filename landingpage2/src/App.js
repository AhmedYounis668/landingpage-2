import { Contact } from "./Component/Contact";
import { FourSections } from "./Component/FourSections";
import { Inspiring } from "./Component/Inspiring";
import { Inspiring3 } from "./Component/Inspiring3";
import { Letstalk2 } from "./Component/Letstalk2";
import { PhotoSession } from "./Component/PhotoSession";
import { Slideshow } from "./Component/Slideshow";
import { TextinHeader } from "./Component/TextinHeader";
import { Textinheader2 } from "./Component/Textinheader2";
import { ThreecolumnsPhotos } from "./Component/ThreecolumnsPhotos";


function App() {
  return (
    <div className="App">
      <Slideshow/>
      <Inspiring/>
      <TextinHeader/>
      <ThreecolumnsPhotos/>
      <Textinheader2/>
      <TextinHeader/>
      <FourSections/>
      <Inspiring3/>
      <TextinHeader/>
     <PhotoSession/>
     <Letstalk2/>
     <TextinHeader/>
     <Contact/>
    </div>
  );
}

export default App;
