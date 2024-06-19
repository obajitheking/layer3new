/** @jsxImportSource @emotion/react */
import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback, RefObject } from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/react";

import ArrowUp from "@assets/icons/arrow-up.svg";
import Delete from "@assets/icons/delete.svg";
import Move from "@assets/icons/move.svg";

const btnCss = `
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export const RenderNode = ({ render }: { render: React.ReactNode }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement | null) => {
    if (!dom) return { top: 0, left: 0 };
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: top > 0 ? top : bottom,
      left: left,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = `${top}px`;
    currentDOM.style.left = `${left}px`;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      ?.addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        ?.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <div
              css={css`
                height: 30px;
                margin-top: -29px;
                font-size: 12px;
                line-height: 12px;

                svg {
                  fill: #fff;
                  width: 15px;
                  height: 15px;
                }
              `}
              ref={currentRef}
              className="px-2 py-2 text-white bg-primary fixed flex items-center"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable ? (
                <button
                  css={css`
                    ${btnCss}
                  `}
                  className="mr-2 cursor-move"
                  ref={drag as unknown as RefObject<HTMLButtonElement> | null}
                >
                  <Move />
                </button>
              ) : null}
              {id !== ROOT_NODE && (
                <button
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent || undefined);
                  }}
                >
                  <ArrowUp />
                </button>
              )}
              {deletable ? (
                <button
                  css={css`
                    ${btnCss}
                  `}
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Delete />
                </button>
              ) : null}
            </div>,
            document.querySelector(".page-container") ||
              document.createElement("div") // Add null check and fallback element
          )
        : null}
      {render}
    </>
  );
};
