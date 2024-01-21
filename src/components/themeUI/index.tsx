import ColorPalette from "./colorPalette";
import Typography from "./typography";
import { ColorsKey, colors, fontSizes } from "../../styles/theme";
import { StyledWrapper } from "./style";

function generateColorScale(
  colorObject: (typeof colors)[ColorsKey],
  objectKey: string,
) {
  const colorScale = Object.entries(colorObject)
    .map(([shade, hex]) => ({
      label: `${objectKey}.${shade}`,
      value: hex,
    }))
    .reverse();

  return colorScale;
}

function generateDataList() {
  const colorScale = Object.entries(colors);
  const typographyScale = Object.entries(fontSizes);

  const colorOptionList = [];
  const colorPalette = [];
  const typographyList = [];

  for (const [key, value] of colorScale) {
    const colorScale = generateColorScale(value, key);
    colorOptionList.push(...colorScale);

    if (key === "white" || key === "black") continue;
    colorPalette.push({ colorName: key, colorScale });
  }

  for (const [key, value] of typographyScale) {
    typographyList.push({ label: key, value });
  }

  return { colorOptionList, colorPalette, typographyList };
}

const { colorOptionList, colorPalette, typographyList } = generateDataList();

function ThemeUI() {
  return (
    <StyledWrapper>
      <ColorPalette
        bgColorOptionList={colorOptionList}
        colorPalette={colorPalette}
      />
      <Typography
        typographyScale={typographyList}
        textColorOptionList={colorOptionList}
      />
    </StyledWrapper>
  );
}
export default ThemeUI;
