import './index.scss'

export default function Secao6() {

    return (
        <div className='secao6' id='contato'>
            <h1>Entre em <span>contato</span></h1>
            <p>Para mais informações</p>
            <div className='contatos'>
                <img className = "email" src="/images/emailbranco.png" alt=" "width = "60px" height="60px" />
                <a href="https://chat.whatsapp.com/JRPSYGaRnvm0jZcO9YVBfL"><img class = "zap" src="/images/whatsappbranco.png" alt=" "width = "60px" height="60px"/></a>
                <a href="https://www.instagram.com/techprocess_/profilecard"><img className='ig' src="/images/instagrambranco.png" alt="" width = "60px" height="60px"/></a> 
                <a href="https://www.linkedin.com/in/tech-process-8b86a1335/"><img className='linkedin' src="/images/linkedinbranco.png" alt="" width = "60px" height="60px" /></a>
            </div>
            <footer> &copy; 2024 Copyright - Tech Process </footer>
        </div>
    )
}