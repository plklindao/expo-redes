import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Usuario' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Adam K.'
      idade='30'
      rede_social='@adam_ai'
      endereco='Rua da Tecnologia, 2525'
      img='perfil00'
      descricao='Pesquisador em Machine Learning'
    />
    <CartaoUsuario
      nome='Alice G.'
      idade='25'
      rede_social='@alice_dev'
      endereco='Av. Central, 123'
      img='perfil01'
      descricao='Designer UX/UI'
    />
    <CartaoUsuario
      nome='Arthur D.'
      idade='29'
      rede_social='@art_design'
      endereco='Praça Central, 990'
      img='perfil04'
      descricao='Especialista em Interface'
    />
    <CartaoUsuario
      nome='Beatriz L.'
      idade='25'
      rede_social='@biatriz_test'
      endereco='Praça dos Bits, 2626'
      img='perfil02'
      descricao='Especialista em Testes Automatizados'
    />
    <CartaoUsuario
      nome='Bianca G.'
      idade='31'
      rede_social='@bi_cloud'
      endereco='Travessa do Vento, 111'
      img='perfil02'
      descricao='Administradora de Nuvem'
    />
    <CartaoUsuario
      nome='Bruno T.'
      idade='32'
      rede_social='@bruno.tech'
      endereco='Travessa do Sol, 45'
      img='perfil03'
      descricao='Analista de Dados'
    />
    <CartaoUsuario
      nome='Caio H.'
      idade='25'
      rede_social='@caiotech'
      endereco='Alameda da Paz, 222'
      img='perfil00'
      descricao='Técnico em Redes'
    />
    <CartaoUsuario
      nome='Carla M.'
      idade='28'
      rede_social='@cm_code'
      endereco='Estrada Nova, 678'
      img='perfil02'
      descricao='Desenvolvedora Web'
    />
    <CartaoUsuario
      nome='César M.'
      idade='36'
      rede_social='@cesar_proj'
      endereco='Avenida dos Códigos, 2727'
      img='perfil03'
      descricao='Diretor de Projetos de TI'
    />
    <CartaoUsuario
      nome='Daniel F.'
      idade='35'
      rede_social='@danielf'
      endereco='Rua da Lua, 90'
      img='perfil04'
      descricao='Especialista em Cloud'
    />
    <CartaoUsuario
      nome='Diana I.'
      idade='38'
      rede_social='@diana_pm'
      endereco='Rua da Colina, 333'
      img='perfil01'
      descricao='Líder de Equipe de TI'
    />
    <CartaoUsuario
      nome='Elisa S.'
      idade='22'
      rede_social='@elisa.dev'
      endereco='Alameda dos Anjos, 101'
      img='perfil01'
      descricao='Estudante de TI'
    />
    <CartaoUsuario
      nome='Enzo J.'
      idade='22'
      rede_social='@enzo_ti'
      endereco='Caminho do Sol, 444'
      img='perfil03'
      descricao='Estagiário em Programação'
    />
    <CartaoUsuario
      nome='Felipe R.'
      idade='38'
      rede_social='@felipe_x'
      endereco='Rua das Flores, 202'
      img='perfil00'
      descricao='Gerente de Projetos'
    />
    <CartaoUsuario
      nome='Flora P.'
      idade='35'
      rede_social='@flora_sec'
      endereco='Avenida Sul, 555'
      img='perfil02'
      descricao='Analista de Segurança da Informação'
    />
    <CartaoUsuario
      nome='Gabriela L.'
      idade='29'
      rede_social='@gabi_ti'
      endereco='Praça da Liberdade, 303'
      img='perfil02'
      descricao='Engenheira de Software'
    />
    <CartaoUsuario
      nome='Gustavo R.'
      idade='30'
      rede_social='@gusta_data'
      endereco='Rua Nova, 666'
      img='perfil04'
      descricao='Engenheiro de Machine Learning'
    />
    <CartaoUsuario
      nome='Helena S.'
      idade='28'
      rede_social='@hele.ux'
      endereco='Praça Velha, 777'
      img='perfil01'
      descricao='Consultora de Usabilidade'
    />
    <CartaoUsuario
      nome='Hugo P.'
      idade='24'
      rede_social='@hugo_prog'
      endereco='Rodovia Antiga, 404'
      img='perfil03'
      descricao='Suporte Técnico'
    />
    <CartaoUsuario
      nome='Ícaro T.'
      idade='33'
      rede_social='@icaro_dev'
      endereco='Rua do Sinos, 888'
      img='perfil00'
      descricao='Desenvolvedor Back-End'
    />
    <CartaoUsuario
      nome='Isabela C.'
      idade='31'
      rede_social='@isa_cloud'
      endereco='Jardim Secreto, 505'
      img='perfil01'
      descricao='Consultora de Segurança'
    />
    <CartaoUsuario
      nome='Jennifer U.'
      idade='26'
      rede_social='@jenny_data'
      endereco='Avenida Larga, 999'
      img='perfil02'
      descricao='Analista de Business Intelligence'
    />
    <CartaoUsuario
      nome='Júlia V.'
      idade='27'
      rede_social='@julia_vfx'
      endereco='Rua do Rio, 606'
      img='perfil02'
      descricao='Especialista em Marketing Digital'
    />
    <CartaoUsuario
      nome='Kauã V.'
      idade='21'
      rede_social='@kaua_prog'
      endereco='Praia da Pedra, 1010'
      img='perfil03'
      descricao='Estudante de Engenharia'
    />
    <CartaoUsuario
      nome='Laura W.'
      idade='37'
      rede_social='@laura_arqui'
      endereco='Vale do Sol, 1111'
      img='perfil01'
      descricao='Arquiteta de Soluções'
    />
    <CartaoUsuario
      nome='Lucas N.'
      idade='33'
      rede_social='@lucas_net'
      endereco='Avenida Leste, 707'
      img='perfil04'
      descricao='Arquiteto de Sistemas'
    />
    <CartaoUsuario
      nome='Marcos X.'
      idade='32'
      rede_social='@marcos_agile'
      endereco='Rua do Lago, 1212'
      img='perfil04'
      descricao='Scrum Master'
    />
    <CartaoUsuario
      nome='Mariana K.'
      idade='26'
      rede_social='@mari_code'
      endereco='Beco da Fantasia, 808'
      img='perfil01'
      descricao='Analista de QA'
    />
    <CartaoUsuario
      nome='Natália Y.'
      idade='29'
      rede_social='@nati_front'
      endereco='Bairro Antigo, 1313'
      img='perfil02'
      descricao='Desenvolvedora Front-End'
    />
    <CartaoUsuario
      nome='Otávio Z.'
      idade='24'
      rede_social='@otavio_sup'
      endereco='Estrada da Montanha, 1414'
      img='perfil00'
      descricao='Técnico de Suporte Nível 2'
    />
    <CartaoUsuario
      nome='Pedro B.'
      idade='39'
      rede_social='@pedro_dev'
      endereco='Praia do Mar, 909'
      img='perfil00'
      descricao='Desenvolvedor Mobile'
    />
    <CartaoUsuario
      nome='Plk'
      idade='18'
      rede_social='@plk lindo'
      endereco='Rua 21 de abril'
      img='perfil00'
      descricao='Progamador'
    />
    <CartaoUsuario
      nome='Priscila A.'
      idade='30'
      rede_social='@pri_cloud'
      endereco='Jardim das Rosas, 1515'
      img='perfil01'
      descricao='Especialista em Migração Cloud'
    />
    <CartaoUsuario
      nome='Rafael B.'
      idade='34'
      rede_social='@rafa_devops'
      endereco='Praça Nova, 1616'
      img='perfil03'
      descricao='Engenheiro de Automação'
    />
    <CartaoUsuario
      nome='Renata O.'
      idade='21'
      rede_social='@re_data'
      endereco='Vale Verde, 110'
      img='perfil02'
      descricao='Cientista de Dados Júnior'
    />
    <CartaoUsuario
      nome='Samuel Z.'
      idade='30'
      rede_social='@samuel_prod'
      endereco='Rua Principal, 220'
      img='perfil03'
      descricao='Product Owner'
    />
    <CartaoUsuario
      nome='Sofia C.'
      idade='27'
      rede_social='@sofia_ux'
      endereco='Rua do Cedro, 1717'
      img='perfil02'
      descricao='Designer de Produto'
    />
    <CartaoUsuario
      nome='Tainá Q.'
      idade='23'
      rede_social='@taina_seg'
      endereco='Morro da Paz, 330'
      img='perfil01'
      descricao='Estudante de Cibersegurança'
    />
    <CartaoUsuario
      nome='Thiago D.'
      idade='35'
      rede_social='@thiago_pm'
      endereco='Rua do Cobre, 1818'
      img='perfil04'
      descricao='Gerente de Produto'
    />
    <CartaoUsuario
      nome='Úrsula E.'
      idade='28'
      rede_social='@ursula_qa'
      endereco='Avenida do Prata, 1919'
      img='perfil01'
      descricao='Testadora de Software'
    />
    <CartaoUsuario
      nome='Victor M.'
      idade='37'
      rede_social='@victor_eng'
      endereco='Jardim Real, 440'
      img='perfil04'
      descricao='Engenheiro de Redes'
    />
    <CartaoUsuario
      nome='Vinícius F.'
      idade='23'
      rede_social='@vini_ti'
      endereco='Rua da Esmeralda, 2020'
      img='perfil00'
      descricao='Analista de Suporte Júnior'
    />
    <CartaoUsuario
      nome='Wanessa G.'
      idade='31'
      rede_social='@wan_data'
      endereco='Praça do Diamante, 2121'
      img='perfil02'
      descricao='Engenheira de Dados'
    />
    <CartaoUsuario
      nome='Wesley G.'
      idade='29'
      rede_social='@wesley_ux'
      endereco='Estrada Velha, 550'
      img='perfil00'
      descricao='Pesquisador UX'
    />
    <CartaoUsuario
      nome='Xavier H.'
      idade='39'
      rede_social='@xavier_dev'
      endereco='Vale do Ouro, 2222'
      img='perfil03'
      descricao='Consultor de Desenvolvimento'
    />
    <CartaoUsuario
      nome='Xênia H.'
      idade='34'
      rede_social='@xenia_ia'
      endereco='Campo Belo, 660'
      img='perfil02'
      descricao='Especialista em IA'
    />
    <CartaoUsuario
      nome='Yago C.'
      idade='24'
      rede_social='@yago_full'
      endereco='Rua do Gato, 770'
      img='perfil03'
      descricao='Desenvolvedor Full-Stack'
    />
    <CartaoUsuario
      nome='Yara I.'
      idade='26'
      rede_social='@yara_ux'
      endereco='Caminho do Bronze, 2323'
      img='perfil01'
      descricao='Especialista em Acessibilidade'
    />
    <CartaoUsuario
      nome='Zara L.'
      idade='36'
      rede_social='@zara.devops'
      endereco='Bosque das Árvores, 880'
      img='perfil01'
      descricao='Engenheira de DevOps'
    />
    <CartaoUsuario
      nome='Zeca J.'
      idade='32'
      rede_social='@zeca_cloud'
      endereco='Morro da Prata, 2424'
      img='perfil04'
      descricao='Técnico em Infraestrutura Cloud'
    />

  </ScrollView>


}