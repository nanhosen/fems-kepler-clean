import styled from "styled-components";
import {IconRoundSmall, MapControlButton, Tooltip, Close} from 'kepler.gl';

console.log('IconRoundSmall', IconRoundSmall)
// import {addDataToMap, inputMapStyle, wrapTo } from 'kepler.gl/actions';

export default function CustomLegend({visState}){ 
	console.log('visState', visState)
	// console.log('visState', visState.filters[0].value[0])
	const dateObj = {}
	if(visState.filters.length > 0 && visState.filters && visState.filters[0].value){
		console.log('there are filters', visState.filters[0].value)
		const date1 = visState.filters[0].value[0]
		const date2 = visState.filters[0].value[1]
		console.log('visState', new Date(date1).toUTCString(), new Date(date2).toUTCString())
		dateObj.date1 = new Date(date1).toUTCString()
		dateObj.date2 = new Date(date2).toUTCString()
	}
	const ROW_H = 11;
	const GAP = 4;
	const RECT_W = 20;
	const idx = 0;
	 const LegendRow = ({label = '', displayLabel, color, idx}) => (

		  <g transform={`translate(0, ${idx * (ROW_H + GAP)})`}>
		    <rect width={RECT_W} height={ROW_H} style={{fill: color}} />
		    <text x={RECT_W + 8} y={ROW_H - 1}>
		      {displayLabel ? label.toString() : ''}
		    </text>
		  </g>
		)
	const Title = styled.div`
		  font-size: 1em;
		  text-align: center;
		  background: #29323c;
		  color:white;
		  padding: 0.3em
		`;
	const Body = styled.div`
	  font-size: 0.5em;
	  text-align: left;
	  background: black;
	  padding: 0.5em;
	  color:white
	`;
	const StyledLegend = styled.div`
		background: #242730;
	  max-height: 150px;
	  overflow-y: auto;
	  padding: 0.5em;
	  font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	  svg {
	    text {
	      font-size: 12px;
	      fill:white;
	    }
	  }
	`;
	const StyledMapControlPanel = styled.div`
	  background-color: #242730;
	  flex-grow: 1;
	  z-index: 1;
	  p {
	    margin-bottom: 0;
	  }
	`;
	const StyledMapControlPanelHeader = styled.div.attrs({
	  className: 'map-control__panel-header'
	})`
	  display: flex;
	  justify-content: space-between;
	  background-color: #29323c;
	  height: 32px;
	  padding: 6px 12px;
	  font-size: 17px;
	  color: white;
	  position: relative;
	  font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	  button {
	    width: 18px;
	    height: 18px;
	  }
	`;

	const TimeSpot = styled.div.attrs({
	  className: 'map-control__time-spot'
	})`
	  display: flex;
	  justify-content: space-between;
	  background-color: #29323c;
	  height: 32px;
	  padding: 6px 12px;
	  font-size: 12px;
	  color: white;
	  position: relative;
	  font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	  button {
	    width: 18px;
	    height: 18px;
	  }
	`;
	return(
		<div>
{/*			<Title>

				Leven
			</Title>*/}
			<StyledMapControlPanelHeader>
        <span style={{verticalAlign: 'middle'}}>
            ERC Percentile Rank
          </span>
      </StyledMapControlPanelHeader>
      <TimeSpot>
          <span style={{verticalAlign: 'middle'}}>
             {dateObj.date2 ? dateObj.date2 : 'no date on filter'}
          </span>
        
      </TimeSpot>
			<StyledLegend>
				<svg width = '200' height = '95'>
					<g transform={`translate(0, ${idx * (ROW_H + GAP)})`}>
						<rect width={RECT_W} height={ROW_H} style={{fill: '#00cc00'}} />
						<text x={RECT_W + 8} y={ROW_H - 1}>
				      below 50th
				    </text>
					</g>
					<g transform={`translate(0, 20)`}>
						<rect width={RECT_W} height={ROW_H} style={{fill: '#ffff00'}} />
						<text x={RECT_W + 8} y={ROW_H - 1}>
				      50th to 69th
				    </text>
					</g>
					<g transform={`translate(0, 40)`}>
						<rect width={RECT_W} height={ROW_H} style={{fill: '#ffa700'}} />
						<text x={RECT_W + 8} y={ROW_H - 1}>
				      70th to 79th
				    </text>
					</g>
					<g transform={`translate(0, 60)`}>
						<rect width={RECT_W} height={ROW_H} style={{fill: '#fa0606'}} />
						<text x={RECT_W + 8} y={ROW_H - 1}>
				      80th to 89th
				    </text>
					</g>
					<g transform={`translate(0, 80)`}>
						<rect width={RECT_W} height={ROW_H} style={{fill: '#a706f8'}} />
						<text x={RECT_W + 8} y={ROW_H - 1}>
				      90th to 100th
				    </text>
					</g>
				</svg>	
      </StyledLegend>
		</div>
	)
}