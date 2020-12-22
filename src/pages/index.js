import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName = {config.firstName}
        lastName = {config.lastName}
        address = {config.address}
        phone = {config.phone}
        email= {config.email}
        socialLinks = {config.socialLinks}
      />
      
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Estagiário na área de suporte técnico</h3>
              <div className="subheading mb-3">CGDF (controladoria geral do Distrito
Federal) • 2018-2019</div>
              <p>
              Estagiário na área de suporte técnico tendo como principais atividades: atendimento ao cliente, manutenção e instalação de computadores e atualização e instalação de softwares e sistemas operacionais.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Outubro 2018 - Outubro 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Estagiário na área de Business Intelligence.</h3>
              <div className="subheading mb-3">CGDF (controladoria geral do Distrito Federal) </div>
              <p>
              Estagiário na área de Business Intelligence tendo como principais atividades: levantamento de requisitos, práticas de ETL, criação de queries, criação de dashboards e relatórios e automação.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Outubro 2019 - Outubro 2020</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação acadêmica</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Centro Universitário de Brasília - UniCeub </h3>
              <div className="subheading mb-3">Ciência da computação</div>
              <div>planeja, projeta, desenvolve, implanta e gerencia sistemas de computação, abrangendo desde soluções simples com computadores pessoais até redes corporativas complexas.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2015 - Dezembro 2020</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
          Linguagens  &amp; ferramentas de programação
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Cursos &amp; Certificações</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Business Intelligence com Tableau Desktop - Udemy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Git e contribuições para projetos Open Source - Udemy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Python Fundamentos para Análise de Dados - Data Science Academy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Microsoft Power BI Para Data Science, Versão 2.0 - Data Science Academy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Programação para internet com JavaScript - Digital Innovaton one
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Scrum Foundation Certificate - CertiProf
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Projetos</h2>
          <h3>Recriando a página do Instagram</h3>
          <p>
          Recriação da pagina de login do Instagram com intuito de reforçar a apredizagem do CSS Flexbox e o conceito de responsividade.
          </p>
          <p>
            <strong>Tecnologias: </strong>HTML5, CSS3 Flexbox.
          </p>
          <h3>Recriando a página da netflix</h3>
          <p>
          Recriando interface do Netflix Recriando a interface do principal site de streaming mundial utilizando tecnologias simples como HTML5, CSS3 e JavaScript. Nesse projeto foi estruturado um layout, com técnicas de CSS3 com containers e variáveis, posicionando os elementos com Flexbox e utilizando plugins Jquery na aplicação.
          </p>
          <p>
            <strong>Tecnologias: </strong>HTML5, CSS3, JavaScript e Jquery.
          </p>
          <h3>Snake Game</h3>
          <p>
          Projeto para desenvolver o clássico jogo da cobrinha utilizando HTML, CSS e JavaScript. Aplicando os conhecimentos adiquiridos nos cursos para avalição da plataforma Digital innovation one.
          </p>
          <p>
            <strong>Tecnologias: </strong>HTML5, CSS3, JavaScript.
          </p>
          <h3>Projeto AdoNet</h3>
          <p>
          Projeto para desenvolver um formulário para cadastro de funcionario para empresa, fazendo um CRUD para receber e gravar as informações no SQL Server.
          </p>
          <p>
            <strong>Tecnologias: </strong>HTML5, CSS3, JavaScript, C#, Bootstrap e SQL Server.
          </p>
          
        </div>
      </section>
      <footer className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <p>
            <h4>Criado por <a href="#">Vadjo Victor</a>.</h4>
        </p>
        
      </footer>
    </div>
  </Layout>
);

export default IndexPage;
