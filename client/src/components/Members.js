import React from "react";
import "../styles/styles.css";
import { colors } from "../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import PolaroidFrame from "./cards/PolaroidFrame";

export default class MembersComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="body" style={{ backgroundColor: colors.purple }}>
          <div class="title">
            <TypistLoop interval={100}>
              {["executive team", ""].map((text) => (
                <Typist
                  repeat
                  avgTypingDelay={100}
                  key={text}
                  stdTypingDelay={30}
                  cursor={{ show: true, blink: true }}
                >
                  <span>{text}</span>
                  <Typist.Backspace count={text.length} delay={2000} />
                </Typist>
              ))}
            </TypistLoop>
          </div>
          <div class="content">
            <PolaroidFrame></PolaroidFrame>
          </div>
        </div>
      </div>
    );
  }
}
