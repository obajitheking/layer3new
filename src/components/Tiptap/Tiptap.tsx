"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import { FormikBag, FormikContextType, useFormikContext } from "formik";
import Link from "@tiptap/extension-link";
import { Editor } from "@tiptap/core";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  Link.configure({}),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const TiptapProvider = ({ name }: { name: string }) => {
  const [editor, setEditor] = useState<Editor>();
  const formikContext = useFormikContext() as FormikContextType<any>;

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(
        formikContext?.initialValues?.[name] || "Hello World"
      );
    }
  }, [formikContext?.initialValues, name, editor]);
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={formikContext?.values?.[name] || "Hello World"}
      onBlur={() => formikContext?.setFieldTouched(name, true)}
      onUpdate={(props) =>
        formikContext?.setFieldValue(name, props.editor.getHTML())
      }
      onCreate={(props) => {
        setEditor(props.editor);
      }}
    />
  );
};

export default TiptapProvider;
