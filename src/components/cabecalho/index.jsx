import './index.scss'



export default function Cabecalho() {
    return (
<div className='cabecalho'>
        <div className='textos-cabecalho'>
          <a href="#">TechProcess</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
        </div>
        <div className='icons-cabecalho'>
          <img src="./solar_figma-bold-duotone.png" alt="" />
          <img src="./mdi_github.png" alt="" />
          <img src="./mdi_linkedin.png" alt="" />
          <img src="./material-symbols_mail-rounded.png" alt="" className='email'/>
        </div>
      </div>
    )
}