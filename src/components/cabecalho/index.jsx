import './index.scss'



export default function Cabecalho() {
  return (
    <div className='cabecalho'>
      <div className='textos-cabecalho'>
        <a href="#">TechProcess</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </div>
      <div className='icons-cabecalho'>
        <a href="https://www.instagram.com/techprocess_/profilecard"><img src="/images/instaroxo.png" alt="" /></a>
        <a href="https://github.com/bruno-2810/techProcess_tcc.git"><img src="/images/mdi_github.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/tech-process-8b86a1335/"><img src="/images/mdi_linkedin.png" alt="" /></a>
        <img src="/images/material-symbols_mail-rounded.png" alt="" className='email' />
      </div>

    </div>
  )
}