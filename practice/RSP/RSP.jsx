import React, { useState, useRef, useEffect } from "react";

// *                        result, imgCoord, score
// * componentDidMount
// * componentDidUpdate
// * componentWillUnmount

// * Class Component는 모든걸 각각 조절 가능
// * Hooks는 모든걸 하나로 실행

// * componentDidMount() {
// *   this.setState({
// *     imgCoord: 3,
// *     score: 1,
// *     result: 2,
// *   })
// * }

// * ===== || ======
// * ===== VV ======
// * React는 DOM을 바꾼 뒤에 “effect” 함수를 실행할 것입니다.
// * Effects는 컴포넌트 안에 선언되어있기 때문에 props와 state에 접근할 수 있습니다.
// * 기본적으로 React는 매 렌더링 이후에 effects를 실행합니다.

// * useEffect(() => {
// *   setImgCoord();
// *   setScore();
// * }, [imgCoord, score]);
// * useEffect(() => {
// *   setResult();
// * }, [result]);
// * useEffect를 여러 번 작성 가능
// * useEffect 작성 순서에 따라 순서 보장

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();
  const timeout = useRef();
  // console.log("RSP-render");
  // console.log("interval.current", interval.current);

  useEffect(() => {
    // * componentDidMount
    // console.log("componentDidMount - 실행");
    return () => {
      // * componentWillUnmount 역할
      // console.log("componentDidMount - 실행 - 종료");
    };
  }, []);

  useEffect(() => {
    // * componentDidUpdate
    // console.log("componentDidUpdate - 매번 실행");
    return () => {
      // * componentWillUnmount 역할
      // console.log("componentDidUpdate - 매번 실행 - 종료");
    };
  });

  useEffect(() => {
    // * componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log("componentDidMount/componentDidUpdate - imgCoord - 다시 실행");
    interval.current = setInterval(changeHand, 100);
    return () => {
      // * componentWillUnmount 역할
      // * 리액트는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행합니다.
      // * 하지만 위의 예시에서 보았듯이 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됩니다.
      // * 리액트가 다음 차례의 effect를 실행하기 전에 이전의 렌더링에서 파생된 effect 또한 정리하는 이유가 바로 이 때문입니다.
      console.log("componentDidMount/componentDidUpdate - imgCoord - 종료");
      clearInterval(interval.current);
    };
  }, []);

  const changeHand = () => {
    setImgCoord((imgCoord) => {
      if (imgCoord === rspCoords.바위) {
        return rspCoords.가위;
      } else if (imgCoord === rspCoords.가위) {
        return rspCoords.보;
      } else if (imgCoord === rspCoords.보) {
        return rspCoords.바위;
      }
    });
  };

  const onClickBtn = (choice) => () => {
    if (timeout.current) return;
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다!");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다!");
      setScore((prevScore) => prevScore - 1);
    }
    timeout.current = setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
      timeout.current = null;
    }, 1000);
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};
export default RSP;

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};
