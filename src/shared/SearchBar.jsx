import React, { useRef } from 'react';
import './search-box.css';
import { Col, FormGroup } from "reactstrap";
import { BASE_URL } from './../utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    // using ref

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()

    // search handle function
    const searchHandle = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
        if (location === '' || distance === '' || maxGroupSize === '') {
            alert("All fields are required!")
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if (!res.ok) alert('Something went wrong')

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data })

    }


    return <Col lg='12'>
        <div className="search_bar d-flex align-items-center justify-content-center">
            <form className='d-flex align-items-center gap-4 '>
                <FormGroup className='d-flex gap-3 form_group form_group_fast'>
                    <span>
                        <i class='ri-map-pin-line'></i>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='where are you going' ref={locationRef} />
                        </div>
                    </span>
                </FormGroup>
                {/* ////// */}
                <FormGroup className='d-flex gap-3 form_group form_group_fast'>
                    <span>
                        <i class='ri-map-pin-time-line'></i>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </span>
                </FormGroup>
                {/* ..... */}
                <FormGroup className='d-flex gap-3 form_group form_group_last'>
                    <span>
                        <i class='ri-group-line'></i>
                        <div>
                            <h6>Max people</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </span>
                </FormGroup>
                <span className='search_icon' type='submit' onClick={searchHandle}>
                    <i class='ri-search-line'></i>
                </span>

            </form>
        </div>
    </Col>
}

export default SearchBar