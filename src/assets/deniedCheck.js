import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const deniedCheck = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h30v30H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.03333)" />
      </Pattern>
      <Image
        id="b"
        width={30}
        height={30}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwhJREFUSEvtlr9LW1EUxz/3/YgmUYrSRUWKWFq3CkrroKDOglVEXQu6OQgOrUaQTvoPiHQougguomi3Li0i1g4lBEVo6yCIFKuimERNXvLKva/ij+aZH6Ad2rNkeOfczz3nnu85EXvwHBgEirllswEB+wLeiD1YBZ7eMvPK8TZ8leBvwMO7BAPf/4PvquJpSm0YaPfvY5+cYB8dpb+UrqMVFYHXi314iH187BZzA9g0MZ48Ib+/n0QwyNn0NMkfP8CWokhhhoFeWUl+by96dTWxmRlOp6bAslJ5u4O1sjL84+N4Wluxw2Fis7NEAwGSOzt/wiX08WN8w8N4urvV98TGBkdNTdi7u9mBxb176vbekRFEQQF2JEJsbo6TQIDE9jYkk86B16GAfXpKfHGR487OHEoNaCUl+EZH8XR0IPx+B76w4MC3tkDTrmYqMfE41pcvRAYGsJaXcwMjBFppKb6xMTxtbQ48GiX+7h3RkRGVrS8QcMqbOVR6ZjBAhEAvL8cr4a2tCJ9Pwa3Pn7EPDvC0t2cLzRAs3WRJHzxQmZstLQp+xTIr7+WQDDI+d5fwR4/wT0xgNjZeHCI7eHOTcE8P1seP6bXueGQBlt1bVYXv9euL8v5+1/jqKtG+Pqz1dTfdXr9QhuAUklGDRA4H01TysT58IDo8jBUKqc5OYxmAU0HjcSUnOcmM2lpEfj722RnW0hLRoSGsYDAdPP2svjKRLkvm5Us4PFQNZzQ1IfLyHPjysppwUsvEYjnoWNfV7FVv6qZTw1DzXMEbGhRcwqyVFSKDg+rXxdwzFsXFeAcG8A4N3axTuUyqqx2p1deDx6Myj79/T7izU222FHbDkigvp2ByErO5WTVPIhRyH4MSXlODf2wMva4OYZpqSRx3d5NYW8sOLAoLyevqctZiKMTJ+PhNs1dlKuGyQnpFBbH5edXlWZdaBRgGsuQuqy3lmcLrRausdMv0PCYDOaVTZG7f/0XwT/gm/tIf+k/As9yeKqeohA1BsQ8vkvBKgJbTMVkG2XCUhLe/AAHVo3+1Xg/bAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
)

export default deniedCheck
