import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function noticias() {
    var produtos = [
        {
        id: 1,
        produto: "Notebook Dell Inspiron 15",
        descricao: "Notebook de 15 polegadas com processador Intel i5 de 10ª geração, 8GB de RAM e 512GB de SSD."
        },
        {
        id: 2,
        produto: "Smartphone Samsung Galaxy S23",
        descricao: "Smartphone com tela AMOLED de 6,1 polegadas, câmera de 50MP e processador Exynos 2200, ideal para multitarefas."
        },
        {
        id: 3,
        produto: "Cafeteira Nespresso Essenza Mini",
        descricao: "Cafeteira compacta com sistema de cápsulas, proporciona um café cremoso e encorpado em poucos minutos."
        },
        {
        id: 4,
        produto: "Monitor LG 27 polegadas UltraWide",
        descricao: "Monitor curvo de 27 polegadas com resolução 2560x1080, ideal para profissionais que precisam de espaço extra para trabalho."
        },
        {
        id: 5,
        produto: "Fone de ouvido Sony WH-1000XM5",
        descricao: "Fone de ouvido com cancelamento de ruído ativo, som de alta qualidade e conforto para longas horas de uso."
        },
        {
        id: 6,
        produto: "Camera GoPro HERO10 Black",
        descricao: "Câmera esportiva com gravação em 5.3K, estabilização de imagem HyperSmooth 4.0 e design à prova d'água para aventuras ao ar livre."
        },
        {
        id: 7,
        produto: "Impressora HP DeskJet 2720",
        descricao: "Impressora multifuncional compacta, que imprime, copia e digitaliza com conectividade sem fio para facilitar o uso em casa."
        },
        {
        id: 8,
        produto: "Colchão Ortobom Queen Size",
        descricao: "Colchão ortopédico de alta densidade, desenvolvido para proporcionar um sono confortável e adequado ao alinhamento da coluna."
        },
        {
        id: 9,
        produto: "Relógio Garmin Fenix 7",
        descricao: "Relógio GPS com múltiplos modos esportivos, monitoramento de saúde e resistência militar, ideal para atletas e aventureiros."
        },
        {
        id: 10,
        produto: "Ventilador Arno Turbo Silencio",
        descricao: "Ventilador de mesa com tecnologia Turbo Silencio, proporcionando um ambiente fresco e silencioso mesmo em altas velocidades."
        } 
    ]

    return (
        <>
            <Menu />
            <Container>Lista</Container>
            {produtos.map(produto =>
                <div>
                    <p>{produto.produto}</p>
                    <p>{produto.descricao}</p>
                </div>
            )}
            <Footer />
        </>
    );
}