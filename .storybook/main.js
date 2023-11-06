module.exports = {
  // Stroybook이 스토리를 찾을 위치 정의
  stories: ["../src/components/**/*.stories.js"],
  // 정적 파일이 위치한 디렉토리 지정
  staticDirs: ["../public"],
  // Storybook 기능을 확장하는데 사용되는 추가 기능
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  // 특정 Storybook 기능 활성화 혹은 비활성화 할 때 사용
  features: {
    // CSS 변환하거나 확장하기 위한 도구
    postcss: false,
  },
  // 사용 중인 프레임워크를 지정
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // Storybook의 Docs 애드온 관련 설정
  docs: {
    autodocs: true,
  },
};
