import React from "react";
import { NavLink } from "react-router-dom";


 function FormLogin() {
    
    return (
    <>
     
        <div className="flex flex-row-reverse justify-between bg-gradient-to-t from-gray-200 to-rose-500 p-8">
            <img className="w-[700px]" src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0YgSvviQuE9Gl9Q43bQIgzLxQtrZKYH7Z0n4oT8TooLEsMHjLRBreor7I9k-WEhdoKlegGxuOJaveyEPMzqndNs2AvnNh3gJkO~nzSM-wQGdYDyuWYeMVWdm03M8HRp5Erv2wgdNR3FklSGtaB3ixMba6tldexyAw4wDcLVo6wVlJobguIG5jKvH19uubJJghS3pwST6PIQk06JpYvWvboV2mlIpNnO1SxHWWtqM3poC~qZw3VQIuoc-9huaMWyGPKDzgna7RugQ-h02nn~Ufkm~fhGuRZtiqBN4oG-hxHHkEvVuX0DFAnMpXYjoCaDUqSXk0SEPYvjoJVAxlPX9Q__" alt="" />
            
                <div className="border border-black w-[400px] h-[400px] ml-[100px] mt-[100px] bg-slate-100 rounded"> 
                    <h1 className="font-bold text-[25px] ml-[50px] mt-[40px]"> Acesse sua conta </h1>
                    <h3 className="ml-[50px] pt-4">Cliente novo? Então registre-se <NavLink to='' className="underline">aqui</NavLink> </h3>
                    
                    <form className="flex flex-col  w-[300px] m-auto gap-2 mt-[20px] ">
                        <label className="font-bold text-slate-700">Login*</label>
                        <input type="text" className="border border-black w-[300px] h-[35px] rounded-[9px]"/>
                        <label className="font-bold text-slate-700">Password*</label>
                        <input type="password" className="border border-black w-[300px] h-[35px] rounded-[9px]"/>
                        <button className="bg-black text-white font-bold w-[300px] h-[35px] rounded-[29px] mt-[20px]">Entrar</button>
                    </form>
                </div>
        </div>
        
    </>
    )
        
} 

export default FormLogin;