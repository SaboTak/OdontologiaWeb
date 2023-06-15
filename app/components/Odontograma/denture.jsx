import Teeth from "./teeth";
import { useState } from "react";

function Denture(props) {
  const [top1, setTop1] = useState(props.top_1);
  const [top2, setTop2] = useState(props.top_2);
  const [bottom1, setBottom1] = useState(props.bottom_1);
  const [bottom2, setBottom2] = useState(props.bottom_2);

  return (
    <>
      {top1 ? (
        <div className="dentureTop1">
          <div
            className="1"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="18" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  18
                </p>
                <Teeth 
                  vestibularC={() => {
                    props.tooth("Vestibular", 18, 1)
                  }}
                  vestibularU={() => {
                    props.Rtooth(1)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 18, 1)
                  }}
                  distialU={() => {
                    props.Rtooth(2)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 18, 1)
                  }}
                  mastialU={() => {
                    props.Rtooth(3)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 18, 1)
                  }}
                  palastinaU={() => {
                    props.Rtooth(4)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 18, 1)
                  }}
                  oclusalU={() => {
                    props.Rtooth(5)
                  }}
                />
              </div>
              <div className="17" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  17
                </p>
                <Teeth vestibularC={() => {
                    props.tooth("Vestibular", 17, 2)
                  }}
                  vestibularU={() => {
                    props.Rtooth(6)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 17, 2)
                  }}
                  distialU={() => {
                    props.Rtooth(7)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 17, 2)
                  }}
                  mastialU={() => {
                    props.Rtooth(8)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 17, 2)
                  }}
                  palastinaU={() => {
                    props.Rtooth(9)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 17, 2)
                  }}
                  oclusalU={() => {
                    props.Rtooth(10)
                  }}/>
              </div>
              <div className="16" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  16
                </p>
                <Teeth  vestibularC={() => {
                    props.tooth("Vestibular", 16, 3)
                  }}
                  vestibularU={() => {
                    props.Rtooth(11)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 16, 3)
                  }}
                  distialU={() => {
                    props.Rtooth(12)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 16, 3)
                  }}
                  mastialU={() => {
                    props.Rtooth(13)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 16, 3)
                  }}
                  palastinaU={() => {
                    props.Rtooth(14)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 16, 3)
                  }}
                  oclusalU={() => {
                    props.Rtooth(15)
                  }}/>
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  15
                </p>
                <Teeth 
                vestibularC={() => {
                  props.tooth("Vestibular", 15, 4)
                }}
                vestibularU={() => {
                  props.Rtooth(16)
                }}
                distialC={() => {
                  props.tooth("Distial", 15, 4)
                }}
                distialU={() => {
                  props.Rtooth(17)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 15, 4)
                }}
                mastialU={() => {
                  props.Rtooth(18)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 15, 4)
                }}
                palastinaU={() => {
                  props.Rtooth(19)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 15, 4)
                }}
                oclusalU={() => {
                  props.Rtooth(20)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  14
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 14, 5)
                }}
                vestibularU={() => {
                  props.Rtooth(21)
                }}
                distialC={() => {
                  props.tooth("Distial", 14, 5)
                }}
                distialU={() => {
                  props.Rtooth(22)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 14, 5)
                }}
                mastialU={() => {
                  props.Rtooth(23)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 14, 5)
                }}
                palastinaU={() => {
                  props.Rtooth(24)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 14, 5)
                }}
                oclusalU={() => {
                  props.Rtooth(25)
                }}
                />
              </div>
              <div className="13" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  13
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 13, 6)
                }}
                vestibularU={() => {
                  props.Rtooth(26)
                }}
                distialC={() => {
                  props.tooth("Distial", 13, 6)
                }}
                distialU={() => {
                  props.Rtooth(27)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 13, 6)
                }}
                mastialU={() => {
                  props.Rtooth(28)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 13, 6)
                }}
                palastinaU={() => {
                  props.Rtooth(29)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 13, 6)
                }}
                oclusalU={() => {
                  props.Rtooth(30)
                }}
                />
              </div>
              <div className="12" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  12
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 12, 7)
                }}
                vestibularU={() => {
                  props.Rtooth(31)
                }}
                distialC={() => {
                  props.tooth("Distial", 12, 7)
                }}
                distialU={() => {
                  props.Rtooth(32)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 12, 7)
                }}
                mastialU={() => {
                  props.Rtooth(33)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 12, 7)
                }}
                palastinaU={() => {
                  props.Rtooth(34)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 12, 7)
                }}
                oclusalU={() => {
                  props.Rtooth(35)
                }}
                />
              </div>
              <div className="11" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  11
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 11, 8)
                }}
                vestibularU={() => {
                  props.Rtooth(36)
                }}
                distialC={() => {
                  props.tooth("Distial", 11, 8)
                }}
                distialU={() => {
                  props.Rtooth(37)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 11, 8)
                }}
                mastialU={() => {
                  props.Rtooth(38)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 11, 8)
                }}
                palastinaU={() => {
                  props.Rtooth(39)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 11, 8)
                }}
                oclusalU={() => {
                  props.Rtooth(40)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="21" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  21
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 21, 9)
                }}
                vestibularU={() => {
                  props.Rtooth(41)
                }}
                distialC={() => {
                  props.tooth("Distial", 21, 9)
                }}
                distialU={() => {
                  props.Rtooth(42)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 21, 9)
                }}
                mastialU={() => {
                  props.Rtooth(43)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 21, 9)
                }}
                palastinaU={() => {
                  props.Rtooth(44)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 21, 9)
                }}
                oclusalU={() => {
                  props.Rtooth(45)
                }}
                />
              </div>
              <div className="22" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  22
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 22, 10)
                }}
                vestibularU={() => {
                  props.Rtooth(46)
                }}
                distialC={() => {
                  props.tooth("Distial", 22, 10)
                }}
                distialU={() => {
                  props.Rtooth(47)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 22, 10)
                }}
                mastialU={() => {
                  props.Rtooth(48)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 22, 10)
                }}
                palastinaU={() => {
                  props.Rtooth(49)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 22, 10)
                }}
                oclusalU={() => {
                  props.Rtooth(50)
                }}
                />
              </div>
              <div className="23" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  23
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 23, 11)
                }}
                vestibularU={() => {
                  props.Rtooth(51)
                }}
                distialC={() => {
                  props.tooth("Distial", 23, 11)
                }}
                distialU={() => {
                  props.Rtooth(52)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 23, 11)
                }}
                mastialU={() => {
                  props.Rtooth(53)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 23, 11)
                }}
                palastinaU={() => {
                  props.Rtooth(54)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 23, 11)
                }}
                oclusalU={() => {
                  props.Rtooth(55)
                }}
                />
              </div>
              <div className="24" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  24
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 24, 12)
                }}
                vestibularU={() => {
                  props.Rtooth(56)
                }}
                distialC={() => {
                  props.tooth("Distial", 24, 12)
                }}
                distialU={() => {
                  props.Rtooth(57)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 24, 12)
                }}
                mastialU={() => {
                  props.Rtooth(58)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 24, 12)
                }}
                palastinaU={() => {
                  props.Rtooth(59)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 24, 12)
                }}
                oclusalU={() => {
                  props.Rtooth(60)
                }}
                />
              </div>
              <div className="25" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  25
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 25, 13)
                }}
                vestibularU={() => {
                  props.Rtooth(61)
                }}
                distialC={() => {
                  props.tooth("Distial", 25, 13)
                }}
                distialU={() => {
                  props.Rtooth(62)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 25, 13)
                }}
                mastialU={() => {
                  props.Rtooth(63)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 25, 13)
                }}
                palastinaU={() => {
                  props.Rtooth(64)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 25, 13)
                }}
                oclusalU={() => {
                  props.Rtooth(65)
                }}
                />
              </div>
              <div className="26" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  26
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 26, 14)
                }}
                vestibularU={() => {
                  props.Rtooth(66)
                }}
                distialC={() => {
                  props.tooth("Distial", 26, 14)
                }}
                distialU={() => {
                  props.Rtooth(67)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 26, 14)
                }}
                mastialU={() => {
                  props.Rtooth(68)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 26, 14)
                }}
                palastinaU={() => {
                  props.Rtooth(69)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 26, 14)
                }}
                oclusalU={() => {
                  props.Rtooth(70)
                }}
                />
              </div>
              <div className="27" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  27
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 27, 15)
                }}
                vestibularU={() => {
                  props.Rtooth(71)
                }}
                distialC={() => {
                  props.tooth("Distial", 27, 15)
                }}
                distialU={() => {
                  props.Rtooth(72)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 27, 15)
                }}
                mastialU={() => {
                  props.Rtooth(73)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 27, 15)
                }}
                palastinaU={() => {
                  props.Rtooth(74)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 27, 15)
                }}
                oclusalU={() => {
                  props.Rtooth(75)
                }}
                />
              </div>
              <div className="28" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  28
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 28, 16)
                }}
                vestibularU={() => {
                  props.Rtooth(76)
                }}
                distialC={() => {
                  props.tooth("Distial", 28, 16)
                }}
                distialU={() => {
                  props.Rtooth(77)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 28, 16)
                }}
                mastialU={() => {
                  props.Rtooth(78)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 28, 16)
                }}
                palastinaU={() => {
                  props.Rtooth(79)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 28, 16)
                }}
                oclusalU={() => {
                  props.Rtooth(80)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : top2 ? (
        <div className="dentureTop2">
          <div
            className="2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="55" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  55
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 55, 17)
                }}
                vestibularU={() => {
                  props.Rtooth(81)
                }}
                distialC={() => {
                  props.tooth("Distial", 55, 17)
                }}
                distialU={() => {
                  props.Rtooth(82)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 55, 17)
                }}
                mastialU={() => {
                  props.Rtooth(83)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 55, 17)
                }}
                palastinaU={() => {
                  props.Rtooth(84)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 55, 17)
                }}
                oclusalU={() => {
                  props.Rtooth(85)
                }}
                />
              </div>
              <div className="54" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  54
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 54, 18)
                }}
                vestibularU={() => {
                  props.Rtooth(86)
                }}
                distialC={() => {
                  props.tooth("Distial", 54, 18)
                }}
                distialU={() => {
                  props.Rtooth(87)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 54, 18)
                }}
                mastialU={() => {
                  props.Rtooth(88)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 54, 18)
                }}
                palastinaU={() => {
                  props.Rtooth(89)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 54, 18)
                }}
                oclusalU={() => {
                  props.Rtooth(90)
                }}
                />
              </div>
              <div className="53" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  53
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 53, 19)
                }}
                vestibularU={() => {
                  props.Rtooth(91)
                }}
                distialC={() => {
                  props.tooth("Distial", 53, 19)
                }}
                distialU={() => {
                  props.Rtooth(92)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 53, 19)
                }}
                mastialU={() => {
                  props.Rtooth(93)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 53, 19)
                }}
                palastinaU={() => {
                  props.Rtooth(94)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 53, 19)
                }}
                oclusalU={() => {
                  props.Rtooth(95)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  52
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 52, 20)
                }}
                vestibularU={() => {
                  props.Rtooth(96)
                }}
                distialC={() => {
                  props.tooth("Distial", 52, 20)
                }}
                distialU={() => {
                  props.Rtooth(97)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 52, 20)
                }}
                mastialU={() => {
                  props.Rtooth(98)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 52, 20)
                }}
                palastinaU={() => {
                  props.Rtooth(99)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 52, 20)
                }}
                oclusalU={() => {
                  props.Rtooth(100)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  51
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 51, 21)
                }}
                vestibularU={() => {
                  props.Rtooth(101)
                }}
                distialC={() => {
                  props.tooth("Distial", 51, 21)
                }}
                distialU={() => {
                  props.Rtooth(102)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 51, 21)
                }}
                mastialU={() => {
                  props.Rtooth(103)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 51, 21)
                }}
                palastinaU={() => {
                  props.Rtooth(104)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 51, 21)
                }}
                oclusalU={() => {
                  props.Rtooth(105)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="61" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  61
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 61, 22)
                }}
                vestibularU={() => {
                  props.Rtooth(106)
                }}
                distialC={() => {
                  props.tooth("Distial", 61, 22)
                }}
                distialU={() => {
                  props.Rtooth(107)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 61, 22)
                }}
                mastialU={() => {
                  props.Rtooth(108)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 61, 22)
                }}
                palastinaU={() => {
                  props.Rtooth(109)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 61, 22)
                }}
                oclusalU={() => {
                  props.Rtooth(110)
                }}
                />
              </div>
              <div className="62" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  62
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 62, 23)
                }}
                vestibularU={() => {
                  props.Rtooth(111)
                }}
                distialC={() => {
                  props.tooth("Distial", 62, 23)
                }}
                distialU={() => {
                  props.Rtooth(112)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 62, 23)
                }}
                mastialU={() => {
                  props.Rtooth(113)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 62, 23)
                }}
                palastinaU={() => {
                  props.Rtooth(114)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 62, 23)
                }}
                oclusalU={() => {
                  props.Rtooth(115)
                }}
                />
              </div>
              <div className="63" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  63
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 63, 24)
                }}
                vestibularU={() => {
                  props.Rtooth(116)
                }}
                distialC={() => {
                  props.tooth("Distial", 63, 24)
                }}
                distialU={() => {
                  props.Rtooth(117)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 63, 24)
                }}
                mastialU={() => {
                  props.Rtooth(118)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 63, 24)
                }}
                palastinaU={() => {
                  props.Rtooth(119)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 63, 24)
                }}
                oclusalU={() => {
                  props.Rtooth(120)
                }}
                />
              </div>
              <div className="64" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  64
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 64, 25)
                }}
                vestibularU={() => {
                  props.Rtooth(121)
                }}
                distialC={() => {
                  props.tooth("Distial", 64, 25)
                }}
                distialU={() => {
                  props.Rtooth(122)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 64, 25)
                }}
                mastialU={() => {
                  props.Rtooth(123)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 64, 25)
                }}
                palastinaU={() => {
                  props.Rtooth(124)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 64, 25)
                }}
                oclusalU={() => {
                  props.Rtooth(125)
                }}
                />
              </div>
              <div className="65" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  65
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 65, 26)
                }}
                vestibularU={() => {
                  props.Rtooth(126)
                }}
                distialC={() => {
                  props.tooth("Distial", 65, 26)
                }}
                distialU={() => {
                  props.Rtooth(127)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 65, 26)
                }}
                mastialU={() => {
                  props.Rtooth(128)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 65, 26)
                }}
                palastinaU={() => {
                  props.Rtooth(129)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 65, 26)
                }}
                oclusalU={() => {
                  props.Rtooth(130)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : bottom1 ? (
        <div className="dentureBottom1">
          <div
            className="3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="55" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  85
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 85, 27)
                }}
                vestibularU={() => {
                  props.Rtooth(131)
                }}
                distialC={() => {
                  props.tooth("Distial", 85, 27)
                }}
                distialU={() => {
                  props.Rtooth(132)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 85, 27)
                }}
                mastialU={() => {
                  props.Rtooth(133)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 85, 27)
                }}
                palastinaU={() => {
                  props.Rtooth(134)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 85, 27)
                }}
                oclusalU={() => {
                  props.Rtooth(135)
                }}
                />
              </div>
              <div className="54" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  84
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 84, 28)
                }}
                vestibularU={() => {
                  props.Rtooth(136)
                }}
                distialC={() => {
                  props.tooth("Distial", 84, 28)
                }}
                distialU={() => {
                  props.Rtooth(137)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 84, 28)
                }}
                mastialU={() => {
                  props.Rtooth(138)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 84, 28)
                }}
                palastinaU={() => {
                  props.Rtooth(139)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 84, 28)
                }}
                oclusalU={() => {
                  props.Rtooth(140)
                }}
                />
              </div>
              <div className="53" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  83
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 83, 29)
                }}
                vestibularU={() => {
                  props.Rtooth(141)
                }}
                distialC={() => {
                  props.tooth("Distial", 83, 29)
                }}
                distialU={() => {
                  props.Rtooth(142)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 83, 29)
                }}
                mastialU={() => {
                  props.Rtooth(143)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 83, 29)
                }}
                palastinaU={() => {
                  props.Rtooth(144)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 83, 29)
                }}
                oclusalU={() => {
                  props.Rtooth(145)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  82
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 82, 30)
                }}
                vestibularU={() => {
                  props.Rtooth(146)
                }}
                distialC={() => {
                  props.tooth("Distial", 82, 30)
                }}
                distialU={() => {
                  props.Rtooth(147)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 82, 30)
                }}
                mastialU={() => {
                  props.Rtooth(148)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 82, 30)
                }}
                palastinaU={() => {
                  props.Rtooth(149)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 82, 30)
                }}
                oclusalU={() => {
                  props.Rtooth(150)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  81
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 81, 31)
                }}
                vestibularU={() => {
                  props.Rtooth(151)
                }}
                distialC={() => {
                  props.tooth("Distial", 81, 31)
                }}
                distialU={() => {
                  props.Rtooth(152)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 81, 31)
                }}
                mastialU={() => {
                  props.Rtooth(153)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 81, 31)
                }}
                palastinaU={() => {
                  props.Rtooth(154)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 81, 31)
                }}
                oclusalU={() => {
                  props.Rtooth(155)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="61" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  71
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 71, 32)
                }}
                vestibularU={() => {
                  props.Rtooth(156)
                }}
                distialC={() => {
                  props.tooth("Distial", 71, 32)
                }}
                distialU={() => {
                  props.Rtooth(157)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 71, 32)
                }}
                mastialU={() => {
                  props.Rtooth(158)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 71, 32)
                }}
                palastinaU={() => {
                  props.Rtooth(159)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 71, 32)
                }}
                oclusalU={() => {
                  props.Rtooth(160)
                }}
                />
              </div>
              <div className="62" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  72
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 72, 33)
                }}
                vestibularU={() => {
                  props.Rtooth(161)
                }}
                distialC={() => {
                  props.tooth("Distial", 72, 33)
                }}
                distialU={() => {
                  props.Rtooth(162)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 72, 33)
                }}
                mastialU={() => {
                  props.Rtooth(163)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 72, 33)
                }}
                palastinaU={() => {
                  props.Rtooth(164)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 72, 33)
                }}
                oclusalU={() => {
                  props.Rtooth(165)
                }}
                />
              </div>
              <div className="63" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  73
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 73, 34)
                }}
                vestibularU={() => {
                  props.Rtooth(166)
                }}
                distialC={() => {
                  props.tooth("Distial", 73, 34)
                }}
                distialU={() => {
                  props.Rtooth(167)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 73, 34)
                }}
                mastialU={() => {
                  props.Rtooth(168)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 73, 34)
                }}
                palastinaU={() => {
                  props.Rtooth(169)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 73, 34)
                }}
                oclusalU={() => {
                  props.Rtooth(170)
                }}
                />
              </div>
              <div className="64" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  74
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 74, 35)
                }}
                vestibularU={() => {
                  props.Rtooth(171)
                }}
                distialC={() => {
                  props.tooth("Distial", 74, 35)
                }}
                distialU={() => {
                  props.Rtooth(172)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 74, 35)
                }}
                mastialU={() => {
                  props.Rtooth(173)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 74, 35)
                }}
                palastinaU={() => {
                  props.Rtooth(174)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 74, 35)
                }}
                oclusalU={() => {
                  props.Rtooth(175)
                }}
                />
              </div>
              <div className="65" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  75
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 75, 36)
                }}
                vestibularU={() => {
                  props.Rtooth(176)
                }}
                distialC={() => {
                  props.tooth("Distial", 75, 36)
                }}
                distialU={() => {
                  props.Rtooth(177)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 75, 36)
                }}
                mastialU={() => {
                  props.Rtooth(178)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 75, 36)
                }}
                palastinaU={() => {
                  props.Rtooth(179)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 75, 36)
                }}
                oclusalU={() => {
                  props.Rtooth(180)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : bottom2 ? (
        <div className="dentureBottom2">
          <div
            className="4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="18" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  48
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 48, 37)
                }}
                vestibularU={() => {
                  props.Rtooth(181)
                }}
                distialC={() => {
                  props.tooth("Distial", 48, 37)
                }}
                distialU={() => {
                  props.Rtooth(182)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 48, 37)
                }}
                mastialU={() => {
                  props.Rtooth(183)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 48, 37)
                }}
                palastinaU={() => {
                  props.Rtooth(184)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 48, 37)
                }}
                oclusalU={() => {
                  props.Rtooth(185)
                }}
                />
              </div>
              <div className="17" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  47
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 47, 38)
                }}
                vestibularU={() => {
                  props.Rtooth(186)
                }}
                distialC={() => {
                  props.tooth("Distial", 47, 38)
                }}
                distialU={() => {
                  props.Rtooth(187)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 47, 38)
                }}
                mastialU={() => {
                  props.Rtooth(188)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 47, 38)
                }}
                palastinaU={() => {
                  props.Rtooth(189)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 47, 38)
                }}
                oclusalU={() => {
                  props.Rtooth(190)
                }}
                />
              </div>
              <div className="16" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  46
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 46, 39)
                }}
                vestibularU={() => {
                  props.Rtooth(191)
                }}
                distialC={() => {
                  props.tooth("Distial", 46, 39)
                }}
                distialU={() => {
                  props.Rtooth(192)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 46, 39)
                }}
                mastialU={() => {
                  props.Rtooth(193)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 46, 39)
                }}
                palastinaU={() => {
                  props.Rtooth(194)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 46, 39)
                }}
                oclusalU={() => {
                  props.Rtooth(195)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  45
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 45, 40)
                }}
                vestibularU={() => {
                  props.Rtooth(196)
                }}
                distialC={() => {
                  props.tooth("Distial", 45, 40)
                }}
                distialU={() => {
                  props.Rtooth(197)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 45, 40)
                }}
                mastialU={() => {
                  props.Rtooth(198)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 45, 40)
                }}
                palastinaU={() => {
                  props.Rtooth(199)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 45, 40)
                }}
                oclusalU={() => {
                  props.Rtooth(200)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  44
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 44, 41)
                }}
                vestibularU={() => {
                  props.Rtooth(201)
                }}
                distialC={() => {
                  props.tooth("Distial", 44, 41)
                }}
                distialU={() => {
                  props.Rtooth(202)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 44, 41)
                }}
                mastialU={() => {
                  props.Rtooth(203)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 44, 41)
                }}
                palastinaU={() => {
                  props.Rtooth(204)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 44, 41)
                }}
                oclusalU={() => {
                  props.Rtooth(205)
                }}
                />
              </div>
              <div className="13" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  43
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 43, 42)
                }}
                vestibularU={() => {
                  props.Rtooth(206)
                }}
                distialC={() => {
                  props.tooth("Distial", 43, 42)
                }}
                distialU={() => {
                  props.Rtooth(207)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 43, 42)
                }}
                mastialU={() => {
                  props.Rtooth(208)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 43, 42)
                }}
                palastinaU={() => {
                  props.Rtooth(209)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 43, 42)
                }}
                oclusalU={() => {
                  props.Rtooth(210)
                }}
                />
              </div>
              <div className="12" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  42
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 42, 43)
                }}
                vestibularU={() => {
                  props.Rtooth(211)
                }}
                distialC={() => {
                  props.tooth("Distial", 42, 43)
                }}
                distialU={() => {
                  props.Rtooth(212)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 42, 43)
                }}
                mastialU={() => {
                  props.Rtooth(213)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 42, 43)
                }}
                palastinaU={() => {
                  props.Rtooth(214)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 42, 43)
                }}
                oclusalU={() => {
                  props.Rtooth(215)
                }}
                />
              </div>
              <div className="11" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  41
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 41, 44)
                }}
                vestibularU={() => {
                  props.Rtooth(216)
                }}
                distialC={() => {
                  props.tooth("Distial", 41, 44)
                }}
                distialU={() => {
                  props.Rtooth(217)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 41, 44)
                }}
                mastialU={() => {
                  props.Rtooth(218)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 41, 44)
                }}
                palastinaU={() => {
                  props.Rtooth(219)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 41, 44)
                }}
                oclusalU={() => {
                  props.Rtooth(220)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="21" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  31
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 31, 45)
                }}
                vestibularU={() => {
                  props.Rtooth(221)
                }}
                distialC={() => {
                  props.tooth("Distial", 31, 45)
                }}
                distialU={() => {
                  props.Rtooth(222)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 31, 45)
                }}
                mastialU={() => {
                  props.Rtooth(223)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 31, 45)
                }}
                palastinaU={() => {
                  props.Rtooth(224)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 31, 45)
                }}
                oclusalU={() => {
                  props.Rtooth(225)
                }}
                />
              </div>
              <div className="22" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  32
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 32, 46)
                }}
                vestibularU={() => {
                  props.Rtooth(226)
                }}
                distialC={() => {
                  props.tooth("Distial", 32, 46)
                }}
                distialU={() => {
                  props.Rtooth(227)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 32, 46)
                }}
                mastialU={() => {
                  props.Rtooth(228)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 32, 46)
                }}
                palastinaU={() => {
                  props.Rtooth(229)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 32, 46)
                }}
                oclusalU={() => {
                  props.Rtooth(230)
                }}
                />
              </div>
              <div className="23" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  33
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 33, 47)
                }}
                vestibularU={() => {
                  props.Rtooth(231)
                }}
                distialC={() => {
                  props.tooth("Distial", 33, 47)
                }}
                distialU={() => {
                  props.Rtooth(232)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 33, 47)
                }}
                mastialU={() => {
                  props.Rtooth(233)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 33, 47)
                }}
                palastinaU={() => {
                  props.Rtooth(234)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 33, 47)
                }}
                oclusalU={() => {
                  props.Rtooth(235)
                }}
                />
              </div>
              <div className="24" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  34
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 34, 48)
                }}
                vestibularU={() => {
                  props.Rtooth(236)
                }}
                distialC={() => {
                  props.tooth("Distial", 34, 48)
                }}
                distialU={() => {
                  props.Rtooth(237)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 34, 48)
                }}
                mastialU={() => {
                  props.Rtooth(238)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 34, 48)
                }}
                palastinaU={() => {
                  props.Rtooth(239)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 34, 48)
                }}
                oclusalU={() => {
                  props.Rtooth(240)
                }}
                />
              </div>
              <div className="25" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  35
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 35, 49)
                }}
                vestibularU={() => {
                  props.Rtooth(241)
                }}
                distialC={() => {
                  props.tooth("Distial", 35, 49)
                }}
                distialU={() => {
                  props.Rtooth(242)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 35, 49)
                }}
                mastialU={() => {
                  props.Rtooth(243)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 35, 49)
                }}
                palastinaU={() => {
                  props.Rtooth(244)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 35, 49)
                }}
                oclusalU={() => {
                  props.Rtooth(245)
                }}
                />
              </div>
              <div className="26" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  36
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 36, 50)
                }}
                vestibularU={() => {
                  props.Rtooth(246)
                }}
                distialC={() => {
                  props.tooth("Distial", 36, 50)
                }}
                distialU={() => {
                  props.Rtooth(247)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 36, 50)
                }}
                mastialU={() => {
                  props.Rtooth(248)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 36, 50)
                }}
                palastinaU={() => {
                  props.Rtooth(249)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 36, 50)
                }}
                oclusalU={() => {
                  props.Rtooth(250)
                }}
                />
              </div>
              <div className="27" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  37
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 37, 51)
                }}
                vestibularU={() => {
                  props.Rtooth(251)
                }}
                distialC={() => {
                  props.tooth("Distial", 37, 51)
                }}
                distialU={() => {
                  props.Rtooth(252)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 37, 51)
                }}
                mastialU={() => {
                  props.Rtooth(253)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 37, 51)
                }}
                palastinaU={() => {
                  props.Rtooth(254)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 37, 51)
                }}
                oclusalU={() => {
                  props.Rtooth(255)
                }}
                />
              </div>
              <div className="28" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  38
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 38, 52)
                }}
                vestibularU={() => {
                  props.Rtooth(256)
                }}
                distialC={() => {
                  props.tooth("Distial", 38, 52)
                }}
                distialU={() => {
                  props.Rtooth(257)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 38, 52)
                }}
                mastialU={() => {
                  props.Rtooth(258)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 38, 52)
                }}
                palastinaU={() => {
                  props.Rtooth(259)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 38, 52)
                }}
                oclusalU={() => {
                  props.Rtooth(260)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Selecciona un prop (top_1, top_2, bottom_1, bottom_2)</p>
      )}
    </>
  );
}

export default Denture;
