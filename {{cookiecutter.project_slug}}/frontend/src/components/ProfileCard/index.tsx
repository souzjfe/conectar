import React, {
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BodyCard } from './styles';
import { Link } from 'react-router-dom';
import id from '../../assets/icon/id.svg';
import al from '../../assets/icon/al.svg';
import co from '../../assets/icon/co.svg';
import { AxiosError } from 'axios';
import { AreaType } from '../UI/SelectArea';
import { ToolType } from '../UI/SelectTools';
import api from '../../services/api';
import Skeleton from 'react-loading-skeleton';
import Button from '../UI/Button';

export interface IProfile {
  data_nascimento: string;
  usuario: string;
  email: string;
  ativo: boolean;
  nome: string;
  telefone: string;
  colaborador: boolean;
  idealizador: boolean;
  aliado: boolean;
  foto_perfil: string;
  habilidades: ToolType[];
  areas: AreaType[];
  id: number;
  data_criacao: string;
  data_atualizacao: string;
}
interface IProfileCardProps {
  profile: IProfile;
}
const ProfileCard: React.FC<IProfileCardProps> = ({ profile }) => {
  return (
    <BodyCard>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Clube_do_Remo.png/120px-Clube_do_Remo.png"
        alt=""
      />
      <section>
        <p>
          <h2>{profile.nome}</h2>
          {(profile.usuario && '@' + profile.usuario) || (
            <Skeleton width="100px" />
          )}
        </p>
      </section>
      <aside>
        <span>
          {profile.idealizador && <img src={id} alt="" />}
          {profile.aliado && <img src={al} alt="" />}
          {profile.colaborador && <img src={co} alt="" />}
        </span>
        <Button theme="primary">SEGUIR</Button>
      </aside>
    </BodyCard>
  );
};
export default ProfileCard;
