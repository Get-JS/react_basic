import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
const getAgeLimit = (state, props) => props.ageLimit;

// 리팩터링 후
export const makeGetFriendsWithAgeLimit = () => {
  return createSelector(
    [getFriends, getAgeLimit],
    (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit),
  );
};

// 리팩터링 전
// export const getFriendsWithAgeLimit = createSelector(
//   [getFriends, getAgeLimit],
//   
//   (friends, ageLimit) => { 
//    console.log("타임라인 추가 버튼 눌러도 찍힘");
//    return friends.filter(friend => friend.age <= ageLimit);
//    },
// );
// export const getShowLimit = state => state.friend.showLimit;
// export const getFriendsWithAgeShowLimit = createSelector(
//   [getFriendsWithAgeLimit, getShowLimit],
//   (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
// );
