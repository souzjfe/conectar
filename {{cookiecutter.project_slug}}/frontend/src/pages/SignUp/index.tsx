import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import { BodySignUp } from './styles';
import logo from '../../assets/image/logo_fundoClaro.svg';
import cadastro_banner from '../../assets/image/cadastro_banner.svg';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
import ToggleSwitch from '../../components/UI/ToggleSwitch';
import InputMask from '../../components/UI/InputMask';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router';
import { daysOptions, monthOptions, yearOptions } from '../../utils/dates';
import { AxiosError } from 'axios';
import api from '../../services/api';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { IoMdAlert } from 'react-icons/io';
import { useContext } from 'react';

import { Context } from '../../context/AuthContext';
import ProfileTypeToogleSwitch from '../../components/UI/ProfileTypeToggleSwitch';

interface routeParms {
  parte: string;
}
interface PessoaType {
  email: string;
  telefone: string;
  nome: string;
  username: string;
  password: string;
  year: string;
  month: string;
  day: string;
  idealizador: string;
  colaborador: string;
  aliado: string;
  profileType: string[];
}
const SignUp: React.FC = () => {
  const history = useHistory();
  const { handleLogin } = useContext(Context);
  const params = useParams<routeParms>();
  const formRef = useRef<FormHandles>(null);
  const [showNextStep, setShowNextStep] = useState<boolean>(
    params.parte === '2'
  );

  const handleSubmit = useCallback(
    async (formData: PessoaType) => {
      try {
        // Remove all previous errors
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('N??o corresponde ao formato exemple@ex.com')
            .required('Email ?? obrigat??rio'),
          password: Yup.string()
            .matches(/(?=.*[!@#$%^&*])/g, 'Deve conter caracteres especiais')
            .matches(/(?=.*[A-Z])/g, 'Deve conter caracteres mai??sculas')
            .matches(/(?=.*[0-9])/g, 'Deve conter caracteres num??ricos')
            .matches(/(?=.*[a-z])/g, 'Deve conter caracteres min??sculas')
            .min(8, 'Deve conter no m??nimo 8 caracteres')
            .required('Senha ?? obrit??ria'),
          username: Yup.string()
            .min(4, 'Deve conter no m??nimo 4 caracteres')
            .max(20, 'Deve conter no m??ximo 20 caracteres')
            .required('Usu??rio ?? obrigat??rio'),
          nome: Yup.string()
            .max(80)
            .matches(/(?=.*[ ])/g, 'Informe o nome completo')
            .required('Nome ?? obrigat??rio'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });
        // Validation passed
        const data = new FormData();

        data.append('email', formData.email);
        data.append('nome', formData.nome);
        data.append('username', formData.username);
        data.append('password', formData.password);
        await api.post('/api/signup', data);
        setShowNextStep(true);
        handleLogin(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          // Validation failed
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          // alert(errors);
        }
      }
    },
    [handleLogin]
  );
  const handleSecondSubmit = useCallback(
    async (formData: PessoaType) => {
      console.log(formData);

      try {
        // Remove all previogeus errors
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          telefone: Yup.string().required('Telefone ?? obrigat??rio!'),
          year: Yup.string().required('Ano ?? obrigat??rio!'),
          month: Yup.string().required('M??s ?? obrigat??rio!'),
          day: Yup.string().required('Dia ?? obrigat??rio!'),
          profileType: Yup.array().min(
            1,
            'Deve ser selecionado ao menos um tipo de perfil abaixo!'
          ),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });
        // Validation passed
        const { year, month, day, telefone } = formData;

        const data_nascimento = `${year}-${month}-${day}`;

        const aliado = formData.profileType.includes('aliado');
        const colaborador = formData.profileType.includes('colaborador');
        const idealizador = formData.profileType.includes('idealizador');

        const data = {
          data_nascimento,
          aliado,
          colaborador,
          idealizador,
          telefone,
        };
        console.log(data);

        await api.put('/api/v1/pessoas', data, {
          withCredentials: true,
        });
        history.push('/experiencias-do-usuario');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          // Validation failed
          console.log(err);

          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history]
  );

  /** This function checks if the profile is idealizer, collaborator or ally then advances to the next form and set name and email in formData */
  async function checkProfileType() {
    const { aliado, colaborador, idealizador } = (
      await api.get('/api/v1/pessoas/me')
    ).data;
    if (!aliado || !colaborador || !idealizador) {
      setShowNextStep(true);
    }
    // setFormData({ ...formData, nome, email });
  }
  const responseFacebook = async (resposta: ReactFacebookLoginInfo) => {
    const { email, name } = resposta;
    const foto_perfil = resposta.picture?.data.url;
    const res = await api
      .post(`/api/login?provider=facebook`, {
        email,
        nome: name,
        foto_perfil,
      })
      .then(checkProfileType)
      .catch((err: AxiosError) => {
        // Returns error message from backend
        return err?.response?.data.detail;
      });

    console.log(res);
  };
  const responseGoogle = async (response: GoogleLoginResponse | any) => {
    const { tokenId } = response;
    const res = await api
      .post(`/api/login?provider=google&token=${tokenId}`)
      .then(checkProfileType)
      .catch((err: AxiosError) => {
        // Returns error message from backend
        return err?.response?.data.detail;
      });
    console.log(res);
  };

  return (
    <BodySignUp>
      {!showNextStep && (
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          className="area-central container"
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="primeira-etapa">
            <img src={cadastro_banner} alt="cadastro" />

            <div className="area-form">
              <h1>Criar sua conta</h1>
              <Input name="nome" label="Nome Completo" />
              <Input type="email" name="email" label="E-mail" />
              <section>
                <Input name="username" label="Nome de usu??rio" />
                <Input type="password" name="password" label="Senha" />
              </section>
              <p>
                Ao prosseguir, voc?? concorda com os{' '}
                <Link to="#">Termos de Uso</Link> e{' '}
                <Link to="#">Pol??tica de Privacidade.</Link>
              </p>

              <section>
                <Link to="login">J?? tem uma conta?</Link>
                <Button theme="primary" type="submit">
                  Continuar
                </Button>
              </section>
              <section>
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="facebook-button"
                  textButton="Cadastre-se com Facebook"
                  icon={<FaFacebookF />}
                />
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="google-button"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle />
                      Inscreva-se com Google
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </section>
            </div>
          </div>
        </Form>
      )}
      {showNextStep && (
        <Form
          ref={formRef}
          onSubmit={handleSecondSubmit}
          className="area-central container"
        >
          <div className="segunda-etapa">
            <legend>
              <h1>Bem vindo(a) ao Conectar</h1>
            </legend>
            <section>
              <InputMask
                type="tel"
                name="telefone"
                label="Celular"
                mask="(99) 99999-9999 "
              />
              <Select
                label="Ano de Nascimento"
                name="year"
                defaultOption="Ano"
                options={yearOptions}
              />
              <Select
                label="M??s de Nascimento"
                name="month"
                defaultOption="M??s"
                options={monthOptions}
              />

              <Select
                label="Dia de Nascimento"
                name="day"
                defaultOption="Dia"
                options={daysOptions(4, 2000)}
              />
            </section>
            <ProfileTypeToogleSwitch
              name="profileType"
              options={[
                {
                  id: 'idealizador',
                  value: 'idealizador',
                  label: 'Idealizador',
                  message: 'Interessado em criar projetos',
                },
                {
                  id: 'colaborador',
                  value: 'colaborador',
                  label: 'Colaborador',
                  message: 'Interessado em participar de projetos',
                },
                {
                  id: 'aliado',
                  value: 'aliado',
                  label: 'Aliado',
                  message: 'Interessado em apoiar projetos',
                },
              ]}
            />
            <section>
              <Button
                theme="secondary"
                type="submit"
                onClick={() => history.push('/experiencias-do-usuario')}
              >
                Pular
              </Button>
              <Button theme="primary" type="submit">
                Continuar
              </Button>
            </section>
          </div>
        </Form>
      )}
    </BodySignUp>
  );
};
export default SignUp;
