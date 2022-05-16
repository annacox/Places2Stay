import * as React from 'react';

import Text from '../../../../component/base/Text';

type SectionHeaderProps = {
  title: string;
  description?: string;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({title, description}) => {
  return (
    <>
      <Text styles={{fontSize: 24, lineHeight: 29, marginBottom: 20}}>
        {title}
      </Text>
      <Text styles={{fontSize: 12, lineHeight: 15}}>{description}</Text>
    </>
  );
};

export default SectionHeader;
