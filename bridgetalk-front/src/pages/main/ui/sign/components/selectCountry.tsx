import { useSignupStore } from '@/pages/main/store';
import * as S from '@/styles/main/selectCountry.style';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
  handleSignup: any;
}

export function SelectCountry({ setPage, handleSignup }: Props) {
  const navigate = useNavigate();

  const { email, password, name, nickname, dino } = useSignupStore((state) => ({
    email: state.email,
    password: state.password,
    name: state.name,
    nickname: state.nickname,
    dino: state.dino,
  }));

  return (
    <S.Container>
      <div className="top">
        <div className="title">
          <img src={'assets/img/main/selectYourCountry.svg'} />
        </div>
        <div className="countrylist">
          <button className="countrylist__taiwan">
            Taiwan
            <img src={'assets/img/main/commingSoon.svg'} />
          </button>
          <button className="countrylist__vietnam">Vietnam</button>
          <button className="countrylist__china">
            China
            <img src={'assets/img/main/commingSoon.svg'} />
          </button>
        </div>
      </div>
      <div className="buttons">
        <button
          className="buttons__prev"
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          <img src={'assets/img/previcon.svg'} />
          이전
        </button>
        <button
          className="buttons__next"
          onClick={() => {
            handleSignup(email, password, name, nickname, dino);
            navigate('/start');
          }}
        >
          완료
          <img src={'assets/img/main/star.svg'} />
        </button>
      </div>
    </S.Container>
  );
}
