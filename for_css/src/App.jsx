import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  useEffect(() => {
    // Apply background image to the body element
    document.body.style.backgroundImage = 'url(/R.jpg)';
    document.body.style.backgroundSize = 'cover';  // Ensure the background covers the screen
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';  // Keeps the background fixed when scrolling
    document.body.style.margin = '0';
    document.documentElement.style.height = '100%';  // Ensure the html element is also 100% height
    document.body.style.height = '100%';  // Ensure the body element is 100% height

    // Cleanup on component unmount
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.margin = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <>
      <div>
        <div style={{display:'flex',flexDirection:'row'}}>
          <h1 style={{margin:30}}>SHIJIN</h1>
          <ul style={{display:'flex',listStyle:"none",marginLeft:'auto',fontSize:30}}>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div style={{
          border: 'solid', 
          borderColor: 'rgb(0, 0, 0)', 
          borderRadius: '4px'
        }}>
          <p style={{ margin: 'auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dui nec magna pharetra, non vehicula lorem ullamcorper. Sed condimentum purus sapien, ut vestibulum elit tincidunt at. In vel magna tempor, gravida felis et, faucibus velit. Integer nec mollis nulla, nec tempus sem. Vivamus auctor, mi a tincidunt placerat, neque odio scelerisque magna, ac gravida ligula ante at odio. Cras cursus auctor nunc, nec suscipit risus tempor at. Integer vitae orci at augue cursus ullamcorper. Fusce et purus ac augue blandit vehicula sit amet non urna. Nulla facilisi. Sed lacinia mauris vitae augue maximus, id tincidunt nunc vehicula. Proin gravida libero quis mi tincidunt auctor. Cras a ligula sit amet ante fermentum gravida.
          </p>
        </div>
        <p>
          Curabitur eget tortor gravida, congue leo et, tincidunt nisl. Curabitur vehicula, ligula in lacinia varius, nisi nisl auctor ante, id facilisis felis nisi eget nulla. Aliquam erat volutpat. Integer posuere velit sit amet nulla rutrum, nec pretium lorem lacinia. Ut auctor ante vitae maximus pharetra. Vestibulum tincidunt lorem id suscipit aliquet. Suspendisse fermentum ipsum vel ex scelerisque placerat. Proin pellentesque tortor nec tortor tristique, a tincidunt lorem aliquam. Donec venenatis, ante eu rhoncus vehicula, eros arcu lacinia elit, non malesuada turpis turpis ut tortor. Mauris pharetr
        </p>

        <p>
          Curabitur a sapien vitae augue suscipit venenatis. Integer tempor ipsum sit amet velit gravida, vel hendrerit eros bibendum. Aenean vel arcu in nisl venenatis finibus. Nulla sit amet suscipit ex, in tristique elit. Nulla tincidunt, ante id aliquam tincidunt, tortor dui tincidunt nisi, eget fermentum leo felis id leo. In pharetra, metus sed gravida hendrerit, metus augue gravida nisi, sed lacinia lorem lorem ac est. Vivamus tristique lacus at mauris dapibus efficitur. Integer at libero tempor, pharetra erat at, aliquam nunc. Aliquam condimentum ex ut efficitur tincidunt.
        </p>       
        <p>
        Nam in turpis ac sapien interdum ullamcorper a a magna. Donec eget est nec dui efficitur eleifend vel vel turpis. Integer mollis metus nisl, ac laoreet dui aliquet eget. Vestibulum rutrum magna quam, sit amet fermentum nisl rhoncus sit amet. Aenean feugiat risus sit amet ligula maximus efficitur. Pellentesque malesuada erat est, ut feugiat orci rutrum non. Nunc condimentum fermentum risus sed sollicitudin. Aenean tristique, justo eu condimentum maximus, lorem nisl malesuada erat, in mollis ante purus vel lectus. Donec consequat, mi eget laoreet eleifend, mauris tortor sollicitudin sapien, at malesuada elit mi vel odio.
    </p>
    
    <p>
        Curabitur a sapien vitae augue suscipit venenatis. Integer tempor ipsum sit amet velit gravida, vel hendrerit eros bibendum. Aenean vel arcu in nisl venenatis finibus. Nulla sit amet suscipit ex, in tristique elit. Nulla tincidunt, ante id aliquam tincidunt, tortor dui tincidunt nisi, eget fermentum leo felis id leo. In pharetra, metus sed gravida hendrerit, metus augue gravida nisi, sed lacinia lorem lorem ac est. Vivamus tristique lacus at mauris dapibus efficitur. Integer at libero tempor, pharetra erat at, aliquam nunc. Aliquam condimentum ex ut efficitur tincidunt.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dui nec magna pharetra, non vehicula lorem ullamcorper. Sed condimentum purus sapien, ut vestibulum elit tincidunt at. In vel magna tempor, gravida felis et, faucibus velit. Integer nec mollis nulla, nec tempus sem. Vivamus auctor, mi a tincidunt placerat, neque odio scelerisque magna, ac gravida ligula ante at odio. Cras cursus auctor nunc, nec suscipit risus tempor at. Integer vitae orci at augue cursus ullamcorper. Fusce et purus ac augue blandit vehicula sit amet non urna. Nulla facilisi. Sed lacinia mauris vitae augue maximus, id tincidunt nunc vehicula. Proin gravida libero quis mi tincidunt auctor. Cras a ligula sit amet ante fermentum gravida.
    </p>
    
    <p>
        Curabitur eget tortor gravida, congue leo et, tincidunt nisl. Curabitur vehicula, ligula in lacinia varius, nisi nisl auctor ante, id facilisis felis nisi eget nulla. Aliquam erat volutpat. Integer posuere velit sit amet nulla rutrum, nec pretium lorem lacinia. Ut auctor ante vitae maximus pharetra. Vestibulum tincidunt lorem id suscipit aliquet. Suspendisse fermentum ipsum vel ex scelerisque placerat. Proin pellentesque tortor nec tortor tristique, a tincidunt lorem aliquam. Donec venenatis, ante eu rhoncus vehicula, eros arcu lacinia elit, non malesuada turpis turpis ut tortor. Mauris pharetra tortor metus, vel pharetra arcu consequat vitae.
    </p>
    
    <p>
        Suspendisse consectetur sem at turpis iaculis, at tempor augue lobortis. Mauris porttitor metus ligula, vitae auctor lorem laoreet at. Integer tempor sapien nisi, eget iaculis magna pharetra ac. Morbi euismod eget nunc sit amet tincidunt. Nam ornare, sem sed condimentum sollicitudin, augue nunc sodales nulla, eu sollicitudin ante lorem sit amet purus. Nulla at lorem scelerisque, pharetra lorem ac, malesuada ligula. Integer aliquam tincidunt ipsum ut ullamcorper. Curabitur vitae nulla sapien. In ac lacus in ligula iaculis hendrerit a sit amet libero. Donec tempor viverra libero. Proin fringilla eros a erat dictum, in luctus risus rhoncus. In ultricies mi ac massa tempus, sit amet malesuada urna placerat. Fusce euismod malesuada nisi, ut volutpat odio laoreet ac.
    </p>
    
    <p>
        Integer ac bibendum mi. Nullam sed turpis vel risus feugiat varius. Pellentesque sollicitudin velit sed risus condimentum, eu laoreet lectus elementum. Suspendisse nec risus erat. Curabitur lacinia malesuada dui, ut pretium felis malesuada vitae. Morbi non orci sit amet odio vehicula volutpat. Sed accumsan, metus eget tincidunt suscipit, nisi eros maximus dui, vel venenatis magna arcu non felis. Mauris viverra nulla a justo pharetra, a rutrum tortor cursus. Integer vitae leo feugiat, varius magna nec, laoreet felis. Cras feugiat tempor libero sit amet pretium. Nam sed ligula sit amet velit accumsan tristique.
    </p>
    
    <p>
        Vestibulum vel felis velit. Phasellus tristique dolor purus, vel rhoncus eros tempor vel. Nam at risus lectus. Suspendisse eu nisi quis elit rutrum maximus. Donec non tincidunt nulla. Sed nec nulla feugiat, lacinia lorem vitae, luctus risus. Aliquam erat volutpat. Curabitur efficitur tristique mollis. Sed sodales, sapien ac tincidunt consequat, lorem turpis tempor elit, sed placerat libero tortor nec ligula. Quisque ac ex sed libero iaculis vestibulum. Integer a tincidunt elit. Aliquam vestibulum arcu sapien, sed tempus dui mollis ut. Nam laoreet risus lorem, et varius leo volutpat a. Aenean rutrum vitae ipsum eget vulputate.
    </p>
    
    <p>
        Nunc et augue eu neque pretium volutpat at vel magna. Nulla bibendum sapien sed risus malesuada, non sodales eros lacinia. Suspendisse vulputate magna sed neque condimentum, eget maximus risus malesuada. Quisque aliquet vulputate arcu ac tincidunt. Ut bibendum, ipsum non dictum varius, ligula velit tincidunt lectus, et tincidunt nunc elit sed ante. Nullam sollicitudin lorem augue, non feugiat turpis auctor sed. Integer ullamcorper euismod justo ut feugiat. In malesuada lacus id turpis vestibulum, euismod vulputate enim viverra.
    </p>
    
    <p>
        Nam in turpis ac sapien interdum ullamcorper a a magna. Donec eget est nec dui efficitur eleifend vel vel turpis. Integer mollis metus nisl, ac laoreet dui aliquet eget. Vestibulum rutrum magna quam, sit amet fermentum nisl rhoncus sit amet. Aenean feugiat risus sit amet ligula maximus efficitur. Pellentesque malesuada erat est, ut feugiat orci rutrum non. Nunc condimentum fermentum risus sed sollicitudin. Aenean tristique, justo eu condimentum maximus, lorem nisl malesuada erat, in mollis ante purus vel lectus. Donec consequat, mi eget laoreet eleifend, mauris tortor sollicitudin sapien, at malesuada elit mi vel odio.
    </p>
    
    <p>
        Curabitur a sapien vitae augue suscipit venenatis. Integer tempor ipsum sit amet velit gravida, vel hendrerit eros bibendum. Aenean vel arcu in nisl venenatis finibus. Nulla sit amet suscipit ex, in tristique elit. Nulla tincidunt, ante id aliquam tincidunt, tortor dui tincidunt nisi, eget fermentum leo felis id leo. In pharetra, metus sed gravida hendrerit, metus augue gravida nisi, sed lacinia lorem lorem ac est. Vivamus tristique lacus at mauris dapibus efficitur. Integer at libero tempor, pharetra erat at, aliquam nunc. Aliquam condimentum ex ut efficitur tincidunt.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dui nec magna pharetra, non vehicula lorem ullamcorper. Sed condimentum purus sapien, ut vestibulum elit tincidunt at. In vel magna tempor, gravida felis et, faucibus velit. Integer nec mollis nulla, nec tempus sem. Vivamus auctor, mi a tincidunt placerat, neque odio scelerisque magna, ac gravida ligula ante at odio. Cras cursus auctor nunc, nec suscipit risus tempor at. Integer vitae orci at augue cursus ullamcorper. Fusce et purus ac augue blandit vehicula sit amet non urna. Nulla facilisi. Sed lacinia mauris vitae augue maximus, id tincidunt nunc vehicula. Proin gravida libero quis mi tincidunt auctor. Cras a ligula sit amet ante fermentum gravida.
    </p>
    
    <p>
        Curabitur eget tortor gravida, congue leo et, tincidunt nisl. Curabitur vehicula, ligula in lacinia varius, nisi nisl auctor ante, id facilisis felis nisi eget nulla. Aliquam erat volutpat. Integer posuere velit sit amet nulla rutrum, nec pretium lorem lacinia. Ut auctor ante vitae maximus pharetra. Vestibulum tincidunt lorem id suscipit aliquet. Suspendisse fermentum ipsum vel ex scelerisque placerat. Proin pellentesque tortor nec tortor tristique, a tincidunt lorem aliquam. Donec venenatis, ante eu rhoncus vehicula, eros arcu lacinia elit, non malesuada turpis turpis ut tortor. Mauris pharetra tortor metus, vel pharetra arcu consequat vitae.
    </p>
    
    <p>
        Suspendisse consectetur sem at turpis iaculis, at tempor augue lobortis. Mauris porttitor metus ligula, vitae auctor lorem laoreet at. Integer tempor sapien nisi, eget iaculis magna pharetra ac. Morbi euismod eget nunc sit amet tincidunt. Nam ornare, sem sed condimentum sollicitudin, augue nunc sodales nulla, eu sollicitudin ante lorem sit amet purus. Nulla at lorem scelerisque, pharetra lorem ac, malesuada ligula. Integer aliquam tincidunt ipsum ut ullamcorper. Curabitur vitae nulla sapien. In ac lacus in ligula iaculis hendrerit a sit amet libero. Donec tempor viverra libero. Proin fringilla eros a erat dictum, in luctus risus rhoncus. In ultricies mi ac massa tempus, sit amet malesuada urna placerat. Fusce euismod malesuada nisi, ut volutpat odio laoreet ac.
    </p>
    
    <p>
        Integer ac bibendum mi. Nullam sed turpis vel risus feugiat varius. Pellentesque sollicitudin velit sed risus condimentum, eu laoreet lectus elementum. Suspendisse nec risus erat. Curabitur lacinia malesuada dui, ut pretium felis malesuada vitae. Morbi non orci sit amet odio vehicula volutpat. Sed accumsan, metus eget tincidunt suscipit, nisi eros maximus dui, vel venenatis magna arcu non felis. Mauris viverra nulla a justo pharetra, a rutrum tortor cursus. Integer vitae leo feugiat, varius magna nec, laoreet felis. Cras feugiat tempor libero sit amet pretium. Nam sed ligula sit amet velit accumsan tristique.
    </p>
    
    <p>
        Vestibulum vel felis velit. Phasellus tristique dolor purus, vel rhoncus eros tempor vel. Nam at risus lectus. Suspendisse eu nisi quis elit rutrum maximus. Donec non tincidunt nulla. Sed nec nulla feugiat, lacinia lorem vitae, luctus risus. Aliquam erat volutpat. Curabitur efficitur tristique mollis. Sed sodales, sapien ac tincidunt consequat, lorem turpis tempor elit, sed placerat libero tortor nec ligula. Quisque ac ex sed libero iaculis vestibulum. Integer a tincidunt elit. Aliquam vestibulum arcu sapien, sed tempus dui mollis ut. Nam laoreet risus lorem, et varius leo volutpat a. Aenean rutrum vitae ipsum eget vulputate.
    </p>
    
    <p>
        Nunc et augue eu neque pretium volutpat at vel magna. Nulla bibendum sapien sed risus malesuada, non sodales eros lacinia. Suspendisse vulputate magna sed neque condimentum, eget maximus risus malesuada. Quisque aliquet vulputate arcu ac tincidunt. Ut bibendum, ipsum non dictum varius, ligula velit tincidunt lectus, et tincidunt nunc elit sed ante. Nullam sollicitudin lorem augue, non feugiat turpis auctor sed. Integer ullamcorper euismod justo ut feugiat. In malesuada lacus id turpis vestibulum, euismod vulputate enim viverra.
    </p>
    
    <p>
        Nam in turpis ac sapien interdum ullamcorper a a magna. Donec eget est nec dui efficitur eleifend vel vel turpis. Integer mollis metus nisl, ac laoreet dui aliquet eget. Vestibulum rutrum magna quam, sit amet fermentum nisl rhoncus sit amet. Aenean feugiat risus sit amet ligula maximus efficitur. Pellentesque malesuada erat est, ut feugiat orci rutrum non. Nunc condimentum fermentum risus sed sollicitudin. Aenean tristique, justo eu condimentum maximus, lorem nisl malesuada erat, in mollis ante purus vel lectus. Donec consequat, mi eget laoreet eleifend, mauris tortor sollicitudin sapien, at malesuada elit mi vel odio.
    </p>
    
    <p>
        Curabitur a sapien vitae augue suscipit venenatis. Integer tempor ipsum sit amet velit gravida, vel hendrerit eros bibendum. Aenean vel arcu in nisl venenatis finibus. Nulla sit amet suscipit ex, in tristique elit. Nulla tincidunt, ante id aliquam tincidunt, tortor dui tincidunt nisi, eget fermentum leo felis id leo. In pharetra, metus sed gravida hendrerit, metus augue gravida nisi, sed lacinia lorem lorem ac est. Vivamus tristique lacus at mauris dapibus efficitur. Integer at libero tempor, pharetra erat at, aliquam nunc. Aliquam condimentum ex ut efficitur tincidunt.
    </p>    
      </div>
    </>
  );
}

export default App;
