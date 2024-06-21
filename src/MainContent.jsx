import { useContext } from "react"
import { ecomContext } from "./Home";

const MainContent = () => {

    const{products} = useContext(ecomContext);

    const featCHeredProduct = products.filter((prod)=>{
        return prod.attributes.featured==true;
    })
    console.log(featCHeredProduct);

  return (
    <div>

      <div className="up">

        <div id="upl">
            <h1>We are changing the way people shop</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eveniet? Temporibus praesentium modi enim facilis blanditiis? Necessitatibus nam porro vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est!
            </p>
            <button>Our Products</button>
        </div>

        <div id="upr">
            <img src="" alt="" />
            <img src="" alt="" />
            <h1>image</h1>
        </div>

      </div>

      <div className="midProduct">
        <h1>Featured Product</h1>
        {
            featCHeredProduct.map((p, indx)=>{
                return (
                    <>
                    <div className="box" key={indx}>
                        <a href=""><img src={p.attributes.image} alt="" /></a>
                        <a href=""><h3>{p.attributes.title}</h3></a>
                        <p>${p.attributes.price/100}</p>
                    </div>
                    </>
                )
            })
        }
      </div>

    </div>
  )
}

export default MainContent
