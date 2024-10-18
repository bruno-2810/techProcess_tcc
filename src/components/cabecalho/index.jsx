import './index.scss'



export default function Cabecalho() {
    return (
<div className='cabecalho'>
        <div className='textos-cabecalho'>
          <a href="#">TechProcess</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
        </div>
        <div className='icons-cabecalho'>
          <img src="/images/solar_figma-bold-duotone.png" alt="" />
          <img src="/images/mdi_github.png" alt="" />
          <img src="/images/mdi_linkedin.png" alt="" />
          <img src="/images/material-symbols_mail-rounded.png" alt="" className='email'/>
        </div>
        
      </div>
    )
}