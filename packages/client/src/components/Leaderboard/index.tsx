import { useSelector } from 'react-redux';

import { Title } from '@/components/Title';
import { getDataForLeaderBoard, getLeaderboard, getUserScore } from '@/store/selectors';

import { LeaderboardView } from './LeaderboardView';

import './index.scss';

export const Rating = () => {
  const leaderboardList = useSelector(getLeaderboard);
  const currUser = useSelector(getDataForLeaderBoard);
  const userScore = useSelector(getUserScore);

  return (
    <div className='board'>
      <Title className='board__title' text='Рейтинг' />
      {userScore ? (
        <div className='board__user'>
          <LeaderboardView
            {...userScore}
            avatar={currUser.avatar ?? ''}
            first_name={'Ваш'}
            second_name={'счёт'}
          />
        </div>
      ) : null}
      <div className='board__list'>
        {leaderboardList.map((player) => (
          <LeaderboardView key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
};
