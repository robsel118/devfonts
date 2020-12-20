import { render, cleanup } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import CodeMirror from "../components/CodeMirror.svelte";

const head = document.getElementsByTagName("head")[0];

afterEach(() => {
  cleanup();

  // remove scripts from head
  head.querySelectorAll("script").forEach((script) => {
    head.removeChild(script);
  });
});

class fromTextArea {
  constructor(editor, options) {
    editor.style.display = "none";
    var div = document.createElement("div");

    div.classList.add(`CodeMirror`);
    div.classList.add(`cm-s-${options.theme}`);

    var textarea = document.createElement("textarea");
    textarea.value = options.value;

    div.appendChild(textarea);

    editor.parentNode.insertBefore(div, editor.nextSibling);
  }
  setValue(key, value) {}
  setOption(key, value) {}
}

global.CodeMirror = {
  fromTextArea,
};

test("it should render a codemirror component with the correct theme and value", () => {
  const { container } = render(CodeMirror, {
    props: {
      mode: "javascript",
      theme: "dracula",
      value: 'const t = "hello"',
    },
  });
  expect(container.querySelector("textarea")).toHaveStyle({ display: "none" });
  expect(container.querySelectorAll("div")[1]).toHaveClass("CodeMirror");
  expect(container.querySelectorAll("div")[1]).toHaveClass("cm-s-dracula");
  expect(container.querySelectorAll("textarea")[1]).toHaveValue(
    'const t = "hello"'
  );
});

test("it should rerender and append a second script", () => {
  let props = {
    mode: "javascript",
    theme: "dracula",
    value: 'const t = "hello"',
  };

  const { rerender } = render(CodeMirror, {
    props,
  });

  expect(head.querySelectorAll("script").length).toBe(1);

  props.mode = "css";

  rerender({
    props,
  });

  expect(head.querySelectorAll("script").length).toBe(2);
});
