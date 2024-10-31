import React, { useEffect, useState } from "react";

export const NavBarHook = () => {
  
    const afun = () => {
        let navbarrr = document.getElementById("nav1");
        let navbarrrmobile = document.getElementById("nav2");

          // let leftside = document.getElementById("leftside");
         let logoappear = document.getElementById("logoappear");
        //  let logocontainer = document.getElementById("logocontainer");

         
        
        window.addEventListener("scroll", () => {
           const srollable =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          //  const scrollwidth=window.innerWidth;
          
           if (scrolled < srollable) {
            // navbarrr.style.backgroundColor = "white";
            navbarrr.classList.add("whenscroll");
            navbarrrmobile.classList.add("whenscroll");

            //logo.style.display = "none";
            if(scrolled>5)
              {
                logoappear.style.marginLeft = "10px";
                logoappear.style.marginRight = "10px";
               logoappear.style.transition = "all 0.5s ease"
               logoappear.style.display = "block";

            }
           // if(scrolled>100)
            //  {
             //   logoappear.style.marginLeft = "10px";
             //   logoappear.style.marginRight = "10px";
              // logoappear.style.transition = "all 0.5s ease"
              // logoappear.style.display = "block";

           // }

            if(scrolled>200)
              {
                logoappear.style.marginLeft = "10px";
                logoappear.style.marginRight = "10px";


                // leftside.style.width="20px"
              // logoappear.style.transform = "scale(0,0.8)";


               logoappear.style.transition = "all 0.5s ease"
               logoappear.style.display = "block";
              //  leftside.style.opacity="1"

            }
            if(scrolled>300)
              {
                logoappear.style.marginLeft = "25px";
                logoappear.style.marginRight = "25px";


                // leftside.style.width="20px"
              // logoappear.style.transform = "scale(0,0.8)";


               logoappear.style.transition = "all 0.5s ease"
               logoappear.style.display = "block";
              //  leftside.style.opacity="1"

            }


          }
          if (scrolled === 0) {
            navbarrr.classList.remove("whenscroll");
            navbarrrmobile.classList.remove("whenscroll");

            //logo.style.display="none"

            logoappear.style.display = "none";
            logoappear.style.marginLeft = "-25px";
            logoappear.style.marginRight = "-25px";
            logoappear.style.transition = "all 0.5s ease in out"
          }
    
          if (scrolled > 0) {
            navbarrr.style.marginTop = "0";
            navbarrrmobile.style.marginTop = "0";

             logoappear.style.display="block"


          } else {
            navbarrr.style.marginTop = "0px";
            navbarrrmobile.style.marginTop = "0";

             logoappear.style.display="none"

          }
        });
      };
    
    
      useEffect(() => {
        afun();
        window.removeEventListener("scroll", afun);
      }, []);


    
    




      //=========================================


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // for search

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseopen = () => {
    setOpen(false);
  };
  
 return [show,open,handleClose,handleShow,handleClickOpen,handleCloseopen]
}
