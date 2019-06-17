import { Livro } from "../entidades/livro";

export interface LivroStatus extends Livro {
    disponivel: boolean,
    dataEntrega: Date
}

export async function consultarLivros():Promise<LivroStatus[]>{
    
}