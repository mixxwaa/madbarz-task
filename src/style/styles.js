const styles = {
  bmBurgerButton: {
    display: 'none',
    position: 'fixed',
    width: '36px',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: 'black',
  },
  bmMenuWrap: {
    height: '100%',
    top: 0,
    border: '1px solid black',
  },
  bmMenu: {
    background: '#cecece',
    overflowY: 'scroll',
    padding: '2.5em 1.5em',
  },
  bmItemList: {
    color: '#000',
    padding: '1rem',
  },
  bmItem: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  bmOverlay: {
    top: 0,
    background: 'rgba(0, 0, 0, 0.1)',
  },
};

export default styles;
