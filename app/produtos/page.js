'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function produtos() {

    const [produtos, alteraprodutos] = useState([])

async function buscaproduto(){
    const response = await axios.get("http://localhost:3000/api/produtos")
    console.log (response)
    alteraprodutos(response.data)
}
 

useEffect(()=> {
    buscaproduto()
  
}, [])



return(<div className="px-20 ">

<h1 className="bg-blue-500 text-center p-4"> produtos </h1>
<p>lojinha da umbrulma</p>
 <hr/>
    {produtos.map(i=> <p>{i.nome}-   preço: R$ {i.preco} -z quantidade {i.quantidade}</p>)}
</div>
);
}
export default produtos;