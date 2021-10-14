import { makeStyles, Toolbar, AppBar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        // flexDirection: 'column',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '80px 50px 1fr 1fr 10px',
        rowGap: '20px'
    },
    title: {
        paddingTop: '13px',
        margin: '0 auto'
    }
})
const Layout = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.page}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="h1" className={classes.title}>
                        Calcule!
                    </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </div>
    )
}

export default Layout