/**
 * [(lv.3)once.js]
 *
 * 1) once(fn) 함수를 작성하세요.
 * 2) fn을 딱 한 번만 실행한 뒤, 이후 호출에는 이전 실행 결과를 반환하세요.
 * 3) 클로저를 이용해 fn이 다시 호출되지 않도록 만드세요.
 *
 * @param {Function} fn
 * @returns {Function}
 */

function once(fn) {
  
  let called = false; // 함수가 처음 실행되었는지 여부 확인
  let result;

  // 전달받은 인자들을 사용하여 fn 실행
  return function (...args) {
    // fn이 아직 실행되지 않았다면, 실행 후 결과 저장
    if (!called) {
      result = fn.apply(this, args);
      called = true; // fn이 더이상 실행되지 않도록함
    }
    return result;
  };
}

// export를 수정하지 마세요.
export { once };
