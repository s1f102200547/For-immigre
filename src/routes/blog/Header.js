import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header(props) {
  const { sections, title, showOtherSection } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link to="/checkout">
        <Button size="small">Subscribe</Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to="/signup">
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Button
            onClick={()=>showOtherSection(section)}
            color="inherit"
            key={section}
            variant="body2"
            sx={{ p: 1, flexShrink: 0, whiteSpace: 'nowrap'}}
          >
            {section}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
