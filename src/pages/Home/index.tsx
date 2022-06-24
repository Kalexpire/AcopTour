import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/D.svg";
import { Link } from "react-router-dom";
import ButtonIcon from "components/ButtonIcon";
function Home() {
return (
<div className="home-container">
<div className="home-card first-card">
<div className="home-content-container">
<div>
<h1>Os melhores pontos turísticos de Acopiara</h1>
<p>Ajudaremos você encontrar alguns dos pontos mais interessantes da região.</p>

</div>
<div>
<Link to="/products"></Link>
<Link to="/products"> <ButtonIcon /> </Link>

</div>
</div>
<div className="home-image-container">
<MainImage />
</div>
</div>
<div className="btn"> 
<div className="second-card second-card-form">
<div className="second-card-container">


</div>
</div>
</div>
</div>
);
}
export default Home;