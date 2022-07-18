import Grid from './grid/grid'
import Inner from './inner/inner';

function LeftSide() {
    return <div className="left-side horizontally-centered">
        <Inner></Inner>
        <Grid></Grid>
    </div>
}

export default LeftSide;