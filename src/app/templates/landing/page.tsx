"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport, RenderNode } from "@components/editor";
import { Container, Text } from "@components/selectors";
import { Button } from "@components/selectors/Button";
import { Custom1, OnlyButtons } from "@components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "@components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "@components/selectors/Custom3";
import { Video } from "@components/selectors/Video";
import Hero from "@components/selectors/Hero";
import Footer from "@components/selectors/Footer/Footer";

function LandingTemplate() {
  return (
    <div className="h-screen">
      <Editor
        resolver={{
          Container,
          Text,
          Custom1,
          Custom2,
          Custom2VideoDrop,
          Custom3,
          Custom3BtnDrop,
          OnlyButtons,
          Button,
          Video,
          Hero,
          Footer,
        }}
        enabled={false}
        onRender={RenderNode}
      >
        <Viewport>
          <Frame>
            <Element
              canvas
              is={Container}
              width="100%"
              height="auto"
              background={{ r: 255, g: 255, b: 255, a: 1 }}
              padding={["40", "40", "40", "40"]}
              custom={{ displayName: "App" }}
            >
              <Hero />

              <Element
                canvas
                is={Container}
                background={{ r: 39, g: 41, b: 41, a: 1 }}
                flexDirection="column"
                width="100%"
                height="auto"
                padding={["40", "40", "40", "40"]}
                margin={["0", "0", "40", "0"]}
                custom={{ displayName: "ComplexSection" }}
              >
                <Element
                  canvas
                  background={{
                    r: 76,
                    g: 78,
                    b: 78,
                    a: 0,
                  }}
                  is={Container}
                  flexDirection="row"
                  margin={["0", "0", "0", "0"]}
                  width="100%"
                  height="auto"
                  alignItems="center"
                  custom={{ displayName: "Wrapper" }}
                >
                  <Element
                    canvas
                    background={{
                      r: 0,
                      g: 0,
                      b: 0,
                      a: 0,
                    }}
                    is={Container}
                    alignItems="center"
                    padding={["0", "0", "0", "0"]}
                    flexDirection="row"
                    width="350px"
                    height="250px"
                    custom={{ displayName: "Square" }}
                  >
                    <Element
                      canvas
                      is={Container}
                      justifyContent="center"
                      alignItems="center"
                      background={{
                        r: 76,
                        g: 78,
                        b: 78,
                        a: 1,
                      }}
                      shadow={25}
                      width="90%"
                      height="90%"
                      padding={["10", "20", "10", "20"]}
                      custom={{ displayName: "Outer" }}
                    >
                      <Element
                        canvas
                        is={Container}
                        justifyContent="center"
                        alignItems="center"
                        background={{
                          r: 76,
                          g: 78,
                          b: 78,
                          a: 1,
                        }}
                        shadow={50}
                        width="80%"
                        height="80%"
                        padding={["10", "20", "10", "20"]}
                        custom={{ displayName: "Middle" }}
                      >
                        <Element
                          canvas
                          is={Container}
                          justifyContent="center"
                          alignItems="center"
                          background={{
                            r: 76,
                            g: 78,
                            b: 78,
                            a: 1,
                          }}
                          shadow={50}
                          width="60%"
                          height="60%"
                          padding={["10", "20", "10", "20"]}
                          custom={{ displayName: "Inner" }}
                        />
                      </Element>
                    </Element>
                  </Element>
                  <Element
                    canvas
                    background={{
                      r: 0,
                      g: 0,
                      b: 0,
                      a: 0,
                    }}
                    is={Container}
                    padding={["0", "0", "0", "20"]}
                    flexDirection="column"
                    width="55%"
                    height="100%"
                    fillSpace="yes"
                    custom={{ displayName: "Content" }}
                  >
                    <Text
                      color={{
                        r: "255",
                        g: "255",
                        b: "255",
                        a: "1",
                      }}
                      margin={["0", "0", "18", "0"]}
                      fontSize="20"
                      text="Design complex components"
                    ></Text>
                    <Text
                      color={{
                        r: "255",
                        g: "255",
                        b: "255",
                        a: "0.8",
                      }}
                      fontSize="14"
                      fontWeight="400"
                      text="You can define areas within your React component which users can drop other components into. <br/><br />You can even design how the component should be edited — content editable, drag to resize, have inputs on toolbars — anything really."
                    ></Text>
                  </Element>
                </Element>
              </Element>
              <Element
                canvas
                is={Container}
                background={{
                  r: 234,
                  g: 245,
                  b: 245,
                  a: 1,
                }}
                flexDirection="column"
                width="100%"
                height="auto"
                margin={["0", "0", "40", "0"]}
                custom={{ displayName: "Programmatic" }}
              >
                <Footer />
              </Element>
            </Element>
          </Frame>
        </Viewport>
      </Editor>
    </div>
  );
}

export default LandingTemplate;
