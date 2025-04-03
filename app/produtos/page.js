'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function usuarios() {

    const [usuarios, alterausuarios] = useState([])

async function buscausuario(){
    const response = await axios.get("http://localhost:3000/api/produtos")
    console.log (response)
    alterausuarios(response.data)
}
 

useEffect(()=> {
    buscausuario()
  
}, [])



return(<div className="px-20 ">

<h1 className="bg-blue-500 text-center p-4"> produtos </h1>
<p>lojinha da umbrulma</p>
 <hr/>
    {usuarios.map(i=> <p>{i.nome}  preço {i.preco} quantidade {i.quantidade}</p>)}
</div>
);
}
export default usuarios;