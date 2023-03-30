import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const hitCheck = (props) => (
  <Svg
    width={41}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h41v38H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.02083 0 0 .02248 0 -.04)" />
      </Pattern>
      <Image
        id="b"
        width={48}
        height={48}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABx0lEQVR4nO2ZvUsDMRiH7z+qm6OOXlT8gHNy6+RoN1EQlPpxWUSqVAXbVfBjECz4VXtZrIKggw7q2GodtLFFur2S0hNqr9bkSnKF/OBd2+fJ++Zy5AxDR0dHJ9CxM2gIE3RhE1TGBIGMsgkq246ZxqRv0B88MZdkQePmMlE/Kw9BqGXHHOAWYGOjGhy75Zjn/B0gqBQggU+RDjT8EK0UpBT2+G8tgHUHCnqEAreJdy/jkC8+deYm3k4vgoVDEEmOQq742FkCLrxVq98SgRbYOp2rg7dwCMZwF5zc7cgXeP/KwfPbrfDKWzX4g6tN+SPE4Bf2JiAc64H7XLZt8FSGgAvvgrSS4IGnMgQOb5INQOFYLzzkr33DUxkCxcorxI9nPSTqOyECT2XtgVYSovBU5lOomcT4Srcn/H52419PKyzzHGgmIQpPVRxkf0nwwlNVJ/FH5QUmE8MNAmupaS54qvJVgklEEiM/8KtHU9zwVPW7kCuxnpoRgqeqBdpRWAsYugOgR4j43MRBulq0HUT5Bar38wERIOiMW4B9XFANjt3KoH5ugWoXCIqqhrcdc97wE/Zxgd3Py9wTNkElNjbCK6+jo6NjyMo3JR5x6LsumYUAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
)

export default hitCheck
