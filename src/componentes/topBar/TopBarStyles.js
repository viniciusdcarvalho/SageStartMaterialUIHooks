const drawerWidth = 240;

export default (() => ({
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    }
}));