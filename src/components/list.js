import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStylesType: 'none',
        margin: 0,
        paddng: 0,
        ...parentStyle
      }}
    >
      {items.map((item, index) => (
        <Flex
          className={item.isAvailable ? "open" : "closed"}
          as="li"
          sx={{ ...childStyle }}
          key={index}
        >
          <IconButton sx={styles.listIcon} area-label="List icon">
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
