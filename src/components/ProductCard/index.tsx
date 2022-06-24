import './styles.css';
import ProductImg from 'assets/images/Avenida.png';
const ProductCard = () => {
return(
<div className='second-card product-card'>
<div className='card-top-container'>
<img src={ProductImg} alt="Imagem do Produto" />
</div>
<div className="card-bottom-container">
<h6>Audi Supra TT</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupidate, nisi</p>
<div className="btn2-container">
<button className="btn2">
<h5>Verificar</h5>

          
</button>
</div>
</div>
</div>
);
}
export default ProductCard;