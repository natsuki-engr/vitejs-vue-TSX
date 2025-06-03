import { render } from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

test("props", () => {
  const { getByText } = render(HelloWorld, { props: { msg: "hello" } });

  expect(getByText("hello")).toBeDefined();
});

test("increments counter on button click", async () => {
  const { getByRole, getByText } = render(HelloWorld, {
    props: { msg: "test" },
  });

  // ボタンを取得（role="button"を想定）
  const button = getByRole("button");

  // 初期値を確認（例: "count is 0" というテキストが表示されている場合）
  getByText(/count is 0/i);

  // ボタンをクリック
  await button.click();

  // カウントが1に増えていることを確認
  getByText(/count is 1/i);
});
