import React from "react";

function HeaderDir (){
    return(
        <div className=" w-60 h-11 absolute top-11 left-[75%]">
        <a className="underline px-4" href="#">Cadastre-se</a>
        <a href="http://localhost:5173/LoginPage"><button className="w-28 h-10 rounded bg-pink-600 text-white font-bold text-sm px-4" >Entrar</button></a>
        </div>
    )
}

export default HeaderDir;