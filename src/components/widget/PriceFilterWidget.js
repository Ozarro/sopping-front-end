import React, {Fragment, useState} from 'react';
import InputRange from 'react-input-range';

/**
 * Price Filter Widget
 * @returns {*}
 * @constructor
 */
function PriceFilterWidget() {

    const rangeMaxVal = 500;
    const [rangeVal, setRangeVal] = useState({
        min: 0,
        max: 50,
    });

    const HandleRangeVal = (v) => {
        console.log(v);
        console.log(rangeVal.max);
        if(v.max < rangeMaxVal && v.min > 0){
            setRangeVal({
                min: v.min,
                max: v.min + 50,
            })
        }
    };

    return (
        <Fragment>
            <div className="widget widget_price_filter">
                <h3>Filter By Price</h3>
                <div className="filter-price">

                    <InputRange
                        draggableTrack
                        maxValue={rangeMaxVal}
                        minValue={0}
                        formatLabel={value => `$${value}`}
                        onChange={value => HandleRangeVal(value)}
                        onChangeComplete={value => console.log(value)}
                        value={rangeVal}
                    />

                    <form>
                        <div id="slider-range"/>
                        <p>Price:  <input readOnly value={'$ '+rangeVal.min + ' - $'+rangeVal.max  } type="text" id="amount"/></p>
                        <button>filter</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default PriceFilterWidget;