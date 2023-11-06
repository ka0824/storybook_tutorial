import React from "react";

import Task from "./Task";

// Storybook 설정
export default {
  // 해당 파일에서 다루고자 하는 컴포넌트
  component: Task,
  // Storybook UI에서 보여질 때 보여질 제목
  title: "Task",
};

// 컴포넌트를 렌더링하기 위한 템플릿 함수.
const Template = (args) => <Task {...args} />;

// Default라는 이름의 스토리 정의
// 기본 상태의 'Task'
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

// Pinned라는 이름의 스토리 정의
// 고정 상태의 'Task'
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

// Archived라는 이름의 스토리 정의
// 보관된 상태의 'Task'
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
