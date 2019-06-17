import { Autor } from "../entidades/autor";
import { AutorModel, AutorDocument } from "./autorModel";
import { Query } from "mongoose";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor;
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscarPorPrimeiroNome(nome:string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('primeiro_nome').equals(nome);
        return consulta.exec();
    }

    static async buscarPorUltimoNome(nome:string): Promise<Autor[]> {
        let consulta = AutorModel.find().where('ultimo_nome').equals(nome);
        return consulta.exec();
    }

    static async alterar(autor:Autor): Promise<Autor> {
        let autorAlterado = AutorModel
    }
}
