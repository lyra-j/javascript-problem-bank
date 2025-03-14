/**
 * [(lv.3)Map과 Set 활용하기.js]
 *
 * 1) userLogs라는 Map 객체를 만들어, userId별로 액션(action)을 기록하세요.
 *    예: userId: "abc123" -> actions: ["login", "viewPage", "logout"] 형태
 * 2) recordUserAction(userId, action) 함수:
 *    - userId에 해당하는 Set을 찾아 action을 추가합니다(중복 액션은 Set이 관리).
 *    - Set이 없다면 새로 만들어 Map에 등록하세요.
 * 3) getUserActions(userId) 함수:
 *    - 해당 userId의 모든 actions를 배열로 반환하세요.
 * 4) createUserLogger 함수를 작성하여,
 *    { recordUserAction, getUserActions }를 반환하세요.
 *
 * @returns {{ recordUserAction: Function, getUserActions: Function }}
 */

function createUserLogger() {
  // 사용자별 액션 저장 Map
  const userLogs = new Map

  // 사용자 액션 기록 함수
  const recordUserAction = (userId, action) =>{
    // userId에 해당하는 액션이 없다면 새 Set만들어 액션 추가하기
    if(!userLogs.has(userId)){
      userLogs.set(userId, new Set())
    }
    userLogs.get(userId).add(action)
  }

  // 사용자 액션 조회 함수
  const getUserActions = (userId)=>{
    // userId에 해당하는 set을 찾고, 있다면 배열로 반환하기
    if(userLogs.has(userId)){
      return Array.from(userLogs.get(userId))
    }
    // 없다면 빈배열
    return []
  }

  return {recordUserAction, getUserActions }
}

// export 를 수정하지 마세요.
export { createUserLogger };
