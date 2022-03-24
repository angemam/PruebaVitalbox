import "./Header.css";

function Header() {
    return (
        <header> 
            <div className="container flex justify-space-between align-center"></div> 
            <img src={"http://localhost:3000/logo_vitalbox.png"} className="logo"></img>
            <ul>Registro de pacientes, cálculo de la edad y del IMC</ul> 
        </header>

    );
}

export default Header;