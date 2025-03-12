/**
 * [(lv.3)deepClone.js]
 *
 * 중첩 객체와 배열을 복사하는 깊은 복사 함수를 작성하세요.
 * 재귀를 통해 객체나 배열을 만나면 내부까지 복사해야 합니다.
 *
 * @param {*} obj - 복사할 대상
 * @returns {*} 깊은 복사된 결과
 */

function deepClone(obj) {
  // 1. 기본 타입은 깊은복사가 필요없으므로 그대로 반환(string, number, boolean, null, undefiend)
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 2. 배열과 객체에 때라 새로운 복사본을 초기화
  const clone = Array.isArray(obj) ? [] : {};

  // 3. 객체의 각 속성을 순회하면서 재귀적으로 깊은복사 실행
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// export 를 수정하지 마세요.
export { deepClone };
