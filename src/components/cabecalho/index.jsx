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
        <a href="https://www.instagram.com/v1ctorbz/profilecard">     <img src="/images/instaroxo.png" alt="" /></a>
        <a href="https://github.com/bruno-2810/techProcess_tcc.git"><img src="/images/mdi_github.png" alt="" /></a>
        <img src="/images/mdi_linkedin.png" alt="" />
        <img src="/images/material-symbols_mail-rounded.png" alt="" className='email' />
      </div>

    </div>
  )
}