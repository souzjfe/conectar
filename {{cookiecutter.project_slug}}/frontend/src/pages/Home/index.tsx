import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../../components/UI/NavBar';
import { BodyHome } from './styles';

import Login from '../../components/UI/Login';
import hero from '../../assets/image/landing_page.svg';
import lamp from '../../assets/image/lampada.svg';
import card_colaborador from '../../assets/image/card_colaborador.svg';
import card_idealizador from '../../assets/image/card_idealizador.svg';
import card_aliado from '../../assets/image/card_aliado.svg';
import colaborador from '../../assets/image/colaborador.svg';
import idealizador from '../../assets/image/idealizador.svg';
import fc from '../../assets/image/fc.png';
import aliado from '../../assets/image/aliado.svg';
import curtiu from '../../assets/image/curtiu.svg';
import aspasDestaque from '../../assets/image/aspasDestaque.svg';
import logo from '../../assets/image/logo.svg';
import Modal from '../../components/UI/Modal';
import { IoIosArrowDown } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

import { Context } from '../../context/AuthContext';

import Button from '../../components/UI/Button';
import ContainerScroll from '../../components/UI/ContainerScroll';
import { isAuthenticated } from '../../utils/auth';
const Home: React.FC = () => {
  const { handleLogin } = useContext(Context);
  const history = useHistory();
  return (
    <BodyHome>
      <main>
        <div className="topo-background">
          <NavBar />
          <div className="container topo">
            <section className="hero">
              <img src={hero} alt="imagem de redes neurais" />
            </section>
            <section className="area-login">
              <h1>
                <strong>
                  Encontre o <br />
                </strong>
                time ideal
              </h1>
              {!isAuthenticated() && (
                <Login
                  onSuccessLogin={() => {
                    history.push('/explorar');
                    handleLogin(true);
                  }}
                />
              )}
            </section>

            <a className="arrow-bottom" href="#introducao">
              <IoIosArrowDown />
            </a>
          </div>
        </div>
        <div id="introducao">
          <aside>
            <h3>Se liga em como tudo acontece</h3>
          </aside>
          <main>
            <section className="intro-box">
              <h4>Voc?? j?? teve uma ideia fora da caixa e pensou:</h4>
              <p>
                ???Mazolha com uma equipe qualificada, mentoria experiente e um
                investimento maroto este projeto ajudaria uma galera e de extra
                me faria o Bill Gates da minha cidade???? Ou j?? se viu sem
                oportunidade de trampar com o que realmente domina e curte?
              </p>
            </section>
            <section className="texto">
              <img src={lamp} alt="ideia" />
              <h4>
                Imagina quanto projeto da hora t?? mofando numa gaveta neste
                exato momento
              </h4>
              <p>
                A gente t?? aqui pra tirar a poeira dessas ideias e
                <strong> impulsionar </strong>o surgimento de novos projetos,
                conectando
                <strong> ideias inovadoras </strong>
                aos
                <strong> times perfeitos </strong>
                para que sejam desenvolvidas.
              </p>
            </section>
          </main>

          <a className="arrow-bottom" href="#perfis">
            <IoIosArrowDown />
          </a>
        </div>
        <div id="perfis">
          <legend>
            Para fazer isso de forma <strong>automatizada</strong> nossos
            usu??rios podem escolher aquele(s) tipo(s) de perfil que mais se
            identificam dentre as seguintes op????es:
          </legend>
          <main>
            <section className="area-cards">
              <input
                type="radio"
                id="radIdea"
                name="perfil"
                value="idealizador"
                defaultChecked
              />
              <aside>
                <label htmlFor="radIdea">
                  <div>
                    <img src={card_idealizador} alt="Idealizador" />
                    <legend>Idealizador</legend>
                  </div>
                </label>
                <div className="descricao">
                  <p>
                    P??e pra jogo sua ideia inovadora, adicione os detalhes do
                    seu projeto e encontre o time perfeito para tirar sua ideia
                    do papel e finalmente coloc??-la em pr??tica.
                  </p>
                  <a href="#idealizador">
                    <Button theme="primary">Saiba mais</Button>
                  </a>
                </div>
              </aside>
              <input
                type="radio"
                id="radColab"
                name="perfil"
                value="colaborador"
              />
              <aside className="teste">
                <label htmlFor="radColab">
                  <div>
                    <img src={card_colaborador} alt="Colaborador" />
                    <legend>Colaborador</legend>
                  </div>
                </label>
                <div className="descricao">
                  <p>
                    Relatando suas experi??ncias e habilidades voc?? pode ser
                    selecionado para fazer parte de um time que botou no mundo
                    uma ideia fresquinha e revolucion??ria
                  </p>
                  <a href="#colaborador">
                    <Button theme="primary">Saiba mais</Button>
                  </a>
                </div>
              </aside>
              <input type="radio" id="radAlia" name="perfil" value="aliado" />
              <aside>
                <label htmlFor="radAlia">
                  <div>
                    <img src={card_aliado} alt="Aliado" />
                    <legend>Aliado</legend>
                  </div>
                </label>
                <div className="descricao">
                  <p>
                    Conta pra gente suas experi??ncias e habilidades e apoie
                    empreendedores acompanhando a transforma????o de pequenas
                    ideias em grandes realiza????es.
                  </p>
                  <a href="#aliado">
                    <Button theme="primary">Saiba mais</Button>
                  </a>
                </div>
              </aside>
            </section>
          </main>

          <a className="arrow-bottom" href="#idealizador">
            <IoIosArrowDown />
          </a>
        </div>
        <div id="idealizador">
          <h3>Idealizador</h3>

          <section>
            <img src={idealizador} alt="Avatar fict??cio do idealizador" />
            <div className="area-texto">
              <p>
                Basicamente, o idealizador ?? o cara que prop??e a ideia visando
                fazer dela um projeto ou at?? mesmo um produto. Se voc?? se v??
                nesse perfil n??s podemos te ajudar a encontrar um time de
                colaboradores com as habilidades necess??rias para fazer
                acontecer, de quebra ter apoio de um aliado e quem sabe at??
                conseguir um investimento. Tudo isso de forma automatizada.
                Basta seguir este tutorial:
              </p>
              <aside>
                <section>
                  <legend>Passo 01</legend>
                  <p>Fa??a uma conta e crie um novo projeto</p>
                </section>
                <section>
                  <legend>Passo 02</legend>
                  <p>
                    Adicione as vagas dispon??veis no projeto e as habilidades
                    que os candidatos devem dominar pra botar pra quebrar nessa
                    parada
                  </p>
                </section>
                <section>
                  <legend>Passo 03</legend>
                  <p>
                    Convide os candidatos do time selecionado para o que voc??
                    precisa e ap??s o aceite tenha seu time perfeito
                  </p>
                </section>
              </aside>
            </div>
            <Button theme="primary">Criar sua conta</Button>
          </section>

          <a className="arrow-bottom" href="#colaborador">
            <IoIosArrowDown />
          </a>
        </div>

        <div id="colaborador">
          <h3>Coladorador</h3>

          <section>
            <div className="area-texto">
              <p>
                O colaborador ?? o respons??vel pelo desenvolvimento do projeto, a
                galera da m??o na massa. Se voc?? se v?? nesse perfil n??s podemos
                te ajudar a ser convidado para um projeto no qual voc?? ??
                candidato ideal, o cara da vez. Al??m disso voc?? pode demonstrar
                interesse em projetos p??blicos da aba ???Explorar??? e concorrer por
                vagas em ??reas diferentes da sua linha de atua????o mas que podem
                compensar o esfor??o para se aprender algo novo. Basta seguir
                este tutorial:
              </p>
              <aside>
                <section>
                  <legend>Passo 01</legend>
                  <p>Fa??a uma conta e nos conte sobre suas experi??ncias</p>
                </section>
                <section>
                  <legend>Passo 02</legend>
                  <p>
                    Adicione suas ??reas de atua????o, suas habilidades e as
                    ferramentas que voc?? conhece de cabo a rabo
                  </p>
                </section>
                <section>
                  <legend>Passo 03</legend>
                  <p>
                    Agora sim, al??m de ser um candidato dos projetos daqui voc??
                    pode demonstrar interesse nos que achar top
                  </p>
                </section>
              </aside>
            </div>

            <Button theme="primary">Criar sua conta</Button>
            <img src={colaborador} alt="Avatar fict??cio do colaborador" />
          </section>

          <a className="arrow-bottom" href="#aliado">
            <IoIosArrowDown />
          </a>
        </div>
        <div id="aliado">
          <h3>Aliado</h3>

          <section>
            <img src={aliado} alt="Avatar fict??cio do colaborador" />
            <div className="area-texto">
              <p>
                O aliado ?? o apoiador do projeto, este apoio pode vir na forma
                de mentoria e consultoria, apoio t??cnico ou at?? mesmo
                financeiro, em forma de investimento para a proposta do
                idealizador. Se voc?? se v?? nesse perfil n??s podemos te ajudar a
                encontrar um projeto que mere??a sua aten????o, que pode vir a
                render bons frutos para a comunidade e quem sabe at?? pro seu
                bolso. Basta seguir este tutorial:
              </p>
              <aside>
                <section>
                  <legend>Passo 01</legend>
                  <p>Fa??a uma conta e nos conte suas experi??ncias</p>
                </section>
                <section>
                  <legend>Passo 02</legend>
                  <p>
                    Adicione suas ??reas de atua????o, suas habilidades e as
                    ferramentas que voc?? conhece de cabo a rabo
                  </p>
                </section>
                <section>
                  <legend>Passo 03</legend>
                  <p>
                    Agora sim, al??m de ser um candidato aos projetos daqui voc??
                    pode demonstrar interesse nos que achar top
                  </p>
                </section>
              </aside>
            </div>
            <Button theme="primary">Criar sua conta</Button>
          </section>

          <a className="arrow-bottom" href="#rodape">
            <IoIosArrowDown />
          </a>
        </div>

        <div id="rodape">
          <p>
            E ainda d?? pra
            <strong> explorar </strong>e<strong> interagir </strong>
            com os projetos publicados por aqui.
            <br />
            Sinceramente, s?? falta
            <strong> voc?? </strong>
          </p>
          <aside>
            <img src={curtiu} alt="e a?? curtiu? vem pra c??!" />

            <Button theme="primary">Crie sua conta</Button>
          </aside>
          <footer>
            <h3>
              <img
                src={aspasDestaque}
                alt=" vamos ser aaspasDestaque nas redes sociais"
              />
              Vamos ser amigos nas redes sociais
              <img
                src={aspasDestaque}
                alt=" vamos ser aaspasDestaque nas redes sociais"
              />
            </h3>

            <section className="redes">
              <a href="https://www.facebook.com/boraConectar/">
                <AiFillFacebook />
                <span>/boraconectar</span>
              </a>
              <a href="https://www.instagram.com/boraconectar/">
                <AiOutlineInstagram />
                <span>/boraconectar</span>
              </a>
              <a href="https://www.linkedin.com/company/boraconectar/">
                <FaLinkedinIn color="#fff" />
                <span>/company/boraconectar</span>
              </a>
            </section>
            <section>
              <img src={logo} alt="conectar logo" />
              <Link to="">Termos de Uso | Pol??tica de privacidade </Link>
            </section>

            <p> ?? 2020, Conectar. Todos os direitos reservados.</p>
          </footer>
        </div>
      </main>
    </BodyHome>
  );
};
export default Home;
