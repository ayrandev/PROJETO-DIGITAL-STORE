import { useState } from "react";
import Layout from "./Layout";

 function LoginPage() {
    
    return (
    <>
    <Layout>
        <div className="border border-black w-[400px] h-[300px] ml-[500px] mt-[100px] bg-transparent drop-shadow-[-3.61px_4.52px_6.52px_#000000] rounded-[29px]"> 
            <form className="flex flex-col w-60 m-auto gap-2 mt-[40px]  ">
                <label htmlFor="">Email</label>
                <input type="text" className="border border-black w-[300px] h-[35px] rounded-[9px]"/>
                <label htmlFor="">Senha</label>
                <input type="password" className="border border-black w-[300px] h-[35px] rounded-[9px]"/>
                <button className="bg-black text-white font-bold w-[300px] h-[35px] rounded-[29px] mt-[20px]">Entrar</button>
            </form>
        </div>
    </Layout>
    </>
    )
        
} 

export default LoginPage;