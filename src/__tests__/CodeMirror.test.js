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
  editor;
  constructor(editor, options) {
    this.editor=editor;
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
  refresh() {}
  getWrapperElement(){
    return this.editor;
    return {
      style: {
        
      }
    }
  }
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
      font: "Fira Code"
    },
  });
  expect(container.querySelector("textarea")).toHaveStyle({ display: "none" });
  expect(container.querySelectorAll("div")[2]).toHaveClass("CodeMirror");
  expect(container.querySelectorAll("div")[2]).toHaveClass("cm-s-dracula");
  expect(container.querySelectorAll("textarea")[1]).toHaveValue(
    'const t = "hello"'
  );
});

test("it should rerender and append a second script", () => {
  let props = {
    mode: "javascript",
    theme: "dracula",
    value: 'const t = "hello"',
    font: "Fira Code"
  };

  const { rerender } = render(CodeMirror, {
    props,
  });
  expect(head.querySelectorAll("script").length).toBe(1);

  // adding an new mode should load a new script
  props.mode = "css";
  rerender({
    props,
  });
  expect(head.querySelectorAll("script").length).toBe(2);

  // adding an existing mode should not add a new script
  props.mode = "javascript";
  rerender({
    props,
  });
  expect(head.querySelectorAll("script").length).toBe(2);
});
