
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function MenuCiudades (props) {

    function renderItems (items) {
        let result = []
        for(var i of items) {
            result.push(
                <Option value={i}>{i}</Option>
          )
        }
        return result
    }

    return (
        <Select defaultValue={props.items[0]} style={{ width: 120 }} onChange={props.handleChange}>
            {renderItems(props.items)}
        </Select>
    )
}

export default MenuCiudades