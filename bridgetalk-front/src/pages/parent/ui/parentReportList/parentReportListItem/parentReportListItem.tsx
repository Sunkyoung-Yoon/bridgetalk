import { Dino } from '@/pages/child/ui/talk/components/dino';
import { SelectDino } from '@/pages/main/ui/sign/components/selectDino';
import { useReportStore } from '@/pages/parent/store';
import * as S from '@/styles/parent/parentReportListItem.style';
import { Canvas } from '@react-three/fiber';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  reportsId: number;
  reportsSummary: string;
  reportsKeywords: string[];
  createdAt: string;
  uuid: string;
  name: string;
  nickname: string;
}

export function ParentReportListItem({
  reportsId,
  reportsSummary,
  reportsKeywords,
  createdAt,
  uuid,
  name,
  nickname,
}: Props) {
  const navigate = useNavigate();
  const [date, setDate] = useState<string[]>([]);
  const language = useReportStore((state) => state.language);

  const dateWord = useMemo(
    () => ({
      kor: ['년', '월', '일'],
      viet: ['Năm', 'tháng', 'ngày'],
    }),
    [],
  );

  useEffect(() => {
    setDate(createdAt.split('T')[0].split('-'));
  }, []);

  return (
    <S.Container onClick={() => navigate(`${reportsId}`)}>
      <S.Content>
        <div className="left"></div>
        <div className="right">
          <div className="right__date">
            {date &&
              `${date[0]}${dateWord[language][0]} ${date[1]}${dateWord[language][1]} ${date[2]}${dateWord[language][2]}`}
          </div>
          <div className="right__content">
            <div className="right__content-tags">
              {reportsKeywords.slice(0, 3).map((keyword, idx) => (
                <div className="right__content-tags-tag" key={idx}>
                  # {keyword.trim()}
                </div>
              ))}
            </div>
            <div className="right__content-title">{reportsSummary}</div>
          </div>
        </div>
        {/* <button className="view">VIEW</button> */}
      </S.Content>
    </S.Container>
  );
}
