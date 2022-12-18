import { Box } from "@chakra-ui/react";
 
import Dslideone from "./Dslide1";
import Footer from '../Components/Footer'
import "./Details.css"

function Details () {

    return(
        <>
           
           <iframe width="99%" height="505"
            src="https://www.youtube.com/embed/X4QYV5GTz7c"
             title="YouTube video player" frameborder="0" allow="accelerometer; 
             autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        <hr />
      

        <hr />

        
        <div className="watchfree">
             {/* <h1 className="Head">Trailers</h1> */}
             <div >
               <Dslideone/>
             </div>
        </div>

        <hr />

        <div className="trailerBox">
            <h1 className="Head">Related</h1>
            <div className="Watch">
                <img  src="https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp" alt="" height="100%" width="50%" />
            </div>
        </div>
        <hr />

        <div className="trailerBox">

            <h1 className="Head">Cast & Crew</h1>

            <div className="CastBox">
                <div>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/nQFFovdeUTTXH3TbXbz_KQ/492x492bb.webp" alt="" />
                </div>
                <div>
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/CUR1hHL_Tea1n0Jpfxz_kw/492x492bb.webp" alt="" />
                </div>
                <div>
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/kTEKRpv_3ghSGA7ajSciiQ/492x492bb.webp" alt="" />
                </div>

                <div>
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/vzz8NxN-sV5KUAxlFa-B7A/492x492bb.webp" alt="" />
                </div>

                <div>
                    <img src="https://is5-ssl.mzstatic.com/image/thumb/FFVfIP6QoZ8bSWU6UsCtVA/492x492bb.webp" alt="" />
                </div>
                
                <div>
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/NOGi7wJKPKYXGe54sLrGXQ/492x492ve.webp" alt="" />
                </div>
            </div>
            
        </div>

        <hr />
        <div className="trailerBox">
            {/* <h1 className="Head">Trailers</h1> */}
            <div>
                <img src="https://is4-ssl.mzstatic.com/image/thumb/MyAuxYfuNZeytIiPf5PhiQ/1000x563.webp" alt="" height="100%" width="100%" />
            </div>
        </div>
        <hr />

        <div className="trailerBox">
            <h1 className="Head">How To Watch</h1>
            <div>
                <img src="https://is1-ssl.mzstatic.com/image/thumb/DB8YqlVtN7M8YvGvgsP2eg/400x225.png" alt="" height="50%" width="30%" />
            </div>
            <h1>Start Free Trail</h1>
        </div>
        
     
       <Footer/>
        </>
    )

}


export default Details