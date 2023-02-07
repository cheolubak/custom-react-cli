module.exports = {
  componentData: (fileName) =>
    `import React from 'react';
import { ${fileName}Props } from './${fileName}Props';
import { ${fileName}Styled } from './${fileName}Styled';

function ${fileName}({ ...props }: ${fileName}Props) {
  /**
   * TODO : Styled default is div . Changes are required to suit.
   **/
  return <${fileName}Styled>${fileName}</${fileName}Styled>;
}

export default ${fileName};`,

  styledData: (fileName) => `import styled from '@emotion/styled';
import tw from 'twin.macro';

/**
 * TODO : Styled default is div . Changes are required to suit.
 **/
export const ${fileName}Styled = styled.div([
  tw\`\`
]);`,

  propsData: (fileName) => `import { HTMLAttributes } from 'react';

export interface ${fileName}Props extends HTMLAttributes<HTMLElement> {
}`,

  indexData: (fileName) => `export { default } from './${fileName}';`,

  storeData: (fileName) => `import { atom } from 'recoil';

export const ${fileName}State = atom({
  key: \`${fileName}State\`,
  default: null
})`,

  modelData: (fileName) => `export interface ${fileName}Model {
}`,
};
