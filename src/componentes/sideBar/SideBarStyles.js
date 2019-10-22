const drawerWidth = 240;

export default (() => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: 1,
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: '#192254',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		position: '-webkit-sticky',
		position: 'sticky',
		height: '100vh',
		'&::-webkit-scrollbar': {
			width: '0.4em'
		},
		'&::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'white',
			outline: '1px solid slategrey'
		}
    },
    drawerClose: {
        overflowX: 'hidden',
        width: 7
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 1,
    },
    content: {
        flexGrow: 1,
        padding: 3,
    },
}));