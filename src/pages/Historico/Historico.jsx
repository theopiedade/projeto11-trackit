import Topo from "../Fixed/Topo";
import Menu from "../Fixed/Menu";
import {ContainerBase, ContainerMid} from "../Hoje/Hoje";

export default function Historico() {
    return ( 
        <ContainerBase>
                <Topo/>
                <ContainerMid>
                    <h1> Históricos aqui </h1>
                </ContainerMid>
                <Menu/>
            </ContainerBase>
    )
}