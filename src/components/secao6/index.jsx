import './index.scss'

export default function Secao6() {

    return (
        <div className='secao6'>
            <h1>Entre em <span>contato</span></h1>
            <p>Para mais informações</p>
            <div className='contatos'>
                <img class = "email" src="/images/emailbranco.png" alt=" "width = "60px" height="60px" />
                <a href="https://chat.whatsapp.com/ErDkFVFF1xWGy0moVz6TtE"><img class = "zap" src="/images/whatsappbranco.png" alt=" "width = "60px" height="60px"/></a>
                <img class = "ig" src="/images/instagrambranco.png" alt=" "width = "60px" height="60px" />
                <img class = "linkedin" src="/images/linkedinbranco.png" alt=" "width = "60px" height="60px"/>
            </div>
            <footer> &copy; 2024 Copyright - Tech Process </footer>
        </div>
    )
}