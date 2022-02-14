import React from 'react'

const DateRangeFilter = (props) => {
    return (
        <div className="date-range-filter">
            <div className="">
        <div className="d-flex justify-content-center">
          <div className="form-group me-2">
            {/* <label>Start Date</label> */}
            <input
              type="date"
              id="firstDate"
              name="firstDate"
              className="form-control"
              onChange={props.handleChange}
              value={props.currentDateTime}
              max={props.max}
            />
          </div>
          <div className="form-group ">
            {/* <label>End Date</label> */}
            <input
              type="date"
              id="secondDate"
              name="secondDate"
              className="form-control"
              onChange={props.handleChange}
              value={props.secondDate}
              max={props.max}
            />
          </div>
        </div>
      </div>
      {/* <div className="form-group mt-1 " style={{ marginBottom: 0 }}>
        <button
          type="button"
          className="btn btn-info"
          onClick={props.getDataByDate}
        >
          Submit
        </button>
      </div> */}
        </div>
    )
}

export default DateRangeFilter
