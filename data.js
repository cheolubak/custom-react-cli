module.exports = {
  componentData: (fileName) =>
    `import React from 'react';

function ${fileName}({ ...props }) {
  return <div>${fileName}</div>;
}

export default ${fileName};`,

  styledData: (fileName) => `import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ${fileName}Styled = styled.div([
  tw\`\`
]);`,

  propsData: (fileName) => `import { HTMLAttributes } from 'react';

export interface ${fileName}Props extends HTMLAttributes<HTMLElement> {
}`,

  indexData: (fileName) => `export { default } from './${fileName}.tsx';`,

  storeData: (fileName) => `import { atom } from 'recoil';

export const ${fileName}State = atom({
  key: \`${fileName}State\`,
  default: null
})`,

  modelData: (fileName) => `export interface ${fileName}Model {
}`,
};
