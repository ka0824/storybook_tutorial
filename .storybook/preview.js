// Storybook의 글로벌 설정을 정의

// Storybook의 모든 story에 적용될 CSS 스타일시트를 불러옴
import "../src/index.css";

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  // action 판단 기준, 현재는 on으로 시작하고 대문자로 이어지는 모든 프로퍼티를 Action으로 간주
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 특정 props의 타입을 자동으로 감지하고, 적절한 컨트롤 제공
  controls: {
    matchers: {
      // background나 color로 끝나는 props는 색상 선택기로 처리
      color: /(background|color)$/i,
      // Date로 끝나는 props는 날짜 선택기로 처리
      date: /Date$/,
    },
  },
};
