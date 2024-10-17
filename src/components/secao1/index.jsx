import './index.scss'


export default function Secao1() {
    return (
        <div className='secao1'>
            <div className='textos'>
                <h1><span>Design</span> e <span>Tecnologia</span> <br/> para o futuro.</h1>
                <div className='paragrafo'>
                    <p>Na Tech Process, oferecemos <span>soluções web</span> inovadoras e personalizadas. Desenvolvemos sites, aplicativos e <span>estratégias digitais</span> que elevam sua presença online e transformam suas ideias em resultados.</p>
                </div>
                <button><a href="#">Ver Serviços</a></button>
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="" className='logo-icon' />
            </div>
        </div>
    )
}